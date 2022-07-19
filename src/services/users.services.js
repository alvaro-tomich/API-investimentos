const { Usuario } = require('../database/models');
const { Conta } = require('../database/models');

const createWallet = async (saldo, usuario) => {
  await Conta.create({ saldo, usuario });
};

const createUser = async ({ nome, senha, email }) => {
  const newUser = await Usuario.create({ nome, senha, email });
  await createWallet(0, newUser.codUsuario);

  return newUser.codUsuario;
};

module.exports = { createUser };
