const { AtivoCliente, Ativo } = require('../database/models');

const getByClient = async (codCliente) => {
  const ativosClientes = await AtivoCliente.findAll({ where: { usuario: codCliente } });

  return ativosClientes;
};

const getScripService = async (codAtivo) => {
  const ativo = await Ativo.findByPk(codAtivo);

  return ativo;
};

module.exports = { getByClient, getScripService };
