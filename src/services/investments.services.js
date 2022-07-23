const { AtivoCliente, Ativo } = require('../database/models');

const getByClient = async (codCliente) => {
  const ativosClientes = await AtivoCliente.findAll({ where: { usuario: codCliente } });
  if (ativosClientes.length === 0) return { error: 404, message: 'Usuário não possui ativos' };

  return ativosClientes;
};

const getScripService = async (codAtivo) => {
  const ativo = await Ativo.findByPk(codAtivo);
  if (!ativo) return { error: 404, message: 'Ativo não encontrado' };

  return ativo;
};

const getScripsService = () => Ativo.findAll();

module.exports = { getByClient, getScripService, getScripsService };
