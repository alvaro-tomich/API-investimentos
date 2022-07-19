const { createUser } = require('../services/users.services');

const create = async (req, res) => {
  const newUser = await createUser(req.body);

  res.status(201).json({ message: `Usuário ${newUser} criado com sucesso!` });
};

module.exports = { create };
