const { createUser, deleteUser } = require('../services/users.services');

const create = async (req, res) => {
  const newUser = await createUser(req.body);

  res.status(201).json({ message: `Usuário ${newUser} criado com sucesso!` });
};

const remove = async (req, res) => {
  const codUsuario = req.params.id;
  await deleteUser(codUsuario);

  return res.status(204).json({ message: `Usuário ${codUsuario} deletado com sucesso!` });
};

module.exports = { create, remove };
