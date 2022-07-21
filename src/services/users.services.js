const { Usuario } = require('../database/models');
const { Conta } = require('../database/models');
const { Endereco } = require('../database/models');
const { generateJWTToken } = require('../utils/JWTGenerate');

const createWallet = async (saldo, usuario) => {
  await Conta.create({ saldo, usuario });
};

const createAddress = async (rua, numero, bairro, cidade, estado, usuario) => {
  await Endereco.create({
    rua, numero, bairro, cidade, estado, usuario,
  });
};

const createUser = async ({
  nome, senha, email, rua, numero, bairro, cidade, estado,
}) => {
  const newUser = await Usuario.create({ nome, senha, email });
  await createWallet(0, newUser.codUsuario);
  await createAddress(rua, numero, bairro, cidade, estado, newUser.codUsuario);
  const token = generateJWTToken(JSON.stringify(newUser));

  return token;
};

const deleteUser = async (codUsuario) => {
  await Usuario.destroy({
    where: { codUsuario },
  });
};

const depositServices = async ({ codCliente, valor }) => {
  if (valor <= 0) return false;
  const [conta] = await Conta.findAll({ where: { usuario: codCliente } });
  await Conta.update({ saldo: conta.saldo + valor }, { where: { usuario: codCliente } });
  return true;
};

const withdrawServices = async ({ codCliente, valor }) => {
  const [conta] = await Conta.findAll({ where: { usuario: codCliente } });
  if (valor <= 0 || valor > conta.saldo) return false;
  await Conta.update({ saldo: conta.saldo - valor }, { where: { usuario: codCliente } });
  return true;
};

module.exports = {
  createUser, deleteUser, depositServices, withdrawServices,
};
