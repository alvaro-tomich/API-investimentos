/* eslint-disable no-console */
const {
  createUser,
  deleteUser,
  depositServices,
  withdrawServices,
  getAccountByCod,
  loginService,
  verifyUser,
  getUser,
} = require('../services/users.services');

const create = async (req, res) => {
  try {
    const token = await createUser(req.body);

    return res.status(201).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro interno!' });
  }
};

const deposit = async (req, res) => {
  const { codCliente } = req.body;
  try {
    const { error, message } = await getUser(codCliente);
    if (error && message) {
      return res.status(error).json({ message });
    }
    const newDeposit = await depositServices(req.body);
    if (!newDeposit) {
      return res.status(422).json({ message: 'Quantidade a ser depositada deve ser maior que zero!' });
    }

    return res.status(201).json({ message: 'Depósito realizado com sucesso' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro interno!' });
  }
};

const withdraw = async (req, res) => {
  const { codCliente } = req.body;
  try {
    const { error, message } = await getUser(codCliente);
    if (error && message) {
      return res.status(error).json({ message });
    }
    const newWithdraw = await withdrawServices(req.body);
    if (!newWithdraw) {
      return res.status(422).json({ message: 'Valor deve ser maior que zero e menor que o saldo atual!' });
    }

    return res.status(201).json({ message: 'Saque realizado com sucesso' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro interno!' });
  }
};

const getAccount = async (req, res) => {
  try {
    const [account] = await getAccountByCod(req.params);
    if (!account) {
      return res.status(404).json({ message: 'Conta não encontrada' });
    }

    return res.status(200).json(account);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro interno!' });
  }
};

const remove = async (req, res) => {
  const codUsuario = req.params.id;
  try {
    const { error, message } = await getUser(codUsuario);
    if (error && message) {
      return res.status(error).json({ message });
    }
    await deleteUser(codUsuario);

    return res.status(204).end();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro interno!' });
  }
};

const login = async (req, res) => {
  try {
    const { error, message } = await verifyUser(req.body);
    if (error && message) {
      return res.status(error).json({ message });
    }
    const token = await loginService(req.body);

    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro interno!' });
  }
};

module.exports = {
  create, remove, deposit, withdraw, getAccount, login,
};
