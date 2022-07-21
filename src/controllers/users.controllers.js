const { createUser, deleteUser, depositServices } = require('../services/users.services');

const create = async (req, res) => {
  const token = await createUser(req.body);

  res.status(201).json({ token });
};

const deposit = async (req, res) => {
  const newDeposit = await depositServices(req.body);
  if (!newDeposit) {
    return res.status(422).json({ message: 'Quantidade a ser depositada deve ser maior que zero!' });
  }
  return res.status(201).json({ message: 'Depósito feito com sucesso' });
};

const remove = async (req, res) => {
  const codUsuario = req.params.id;
  await deleteUser(codUsuario);

  return res.status(204).end();
};

module.exports = { create, remove, deposit };
