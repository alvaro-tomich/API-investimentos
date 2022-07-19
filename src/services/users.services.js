const { Usuario } = require('../database/models');

const createUser = async ({ nome, senha, email }) => {
  const newUser = await Usuario.create({ nome, senha, email });

  return newUser.codUsuario;
};

module.exports = { createUser };
