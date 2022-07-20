const { createUser, deleteUser } = require('../services/users.services');

const create = async (req, res) => {
  const token = await createUser(req.body);

  res.status(201).json({ token });
};

const remove = async (req, res) => {
  const codUsuario = req.params.id;
  await deleteUser(codUsuario);

  return res.status(204).end();
};

module.exports = { create, remove };
