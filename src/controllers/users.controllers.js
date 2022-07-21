const {
  createUser, deleteUser, depositServices, withdrawServices, getAccountByCod,
} = require('../services/users.services');

const create = async (req, res) => {
  const token = await createUser(req.body);

  res.status(201).json({ token });
};

const deposit = async (req, res) => {
  const newDeposit = await depositServices(req.body);
  if (!newDeposit) {
    return res.status(422).json({ message: 'Quantidade a ser depositada deve ser maior que zero!' });
  }
  return res.status(201).json({ message: 'Depósito realizado com sucesso' });
};

const withdraw = async (req, res) => {
  const newWithdraw = await withdrawServices(req.body);
  if (!newWithdraw) {
    return res.status(422).json({ message: 'Valor deve ser maior que zero e menor que o saldo atual!' });
  }
  return res.status(201).json({ message: 'Saque realizado com sucesso' });
};

const getAccount = async (req, res) => {
  const [account] = await getAccountByCod(req.params);
  if (!account) {
    return res.status(404).json({ message: 'Conta não encontrada' });
  }
  return res.status(200).json(account);
};

const remove = async (req, res) => {
  const codUsuario = req.params.id;
  await deleteUser(codUsuario);

  return res.status(204).end();
};

module.exports = {
  create, remove, deposit, withdraw, getAccount,
};
