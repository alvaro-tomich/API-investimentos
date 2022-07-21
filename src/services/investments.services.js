const { AtivoCliente } = require('../database/models');

const getByClient = async (codCliente) => {
  const ativosClientes = await AtivoCliente.findAll({ where: { usuario: codCliente } });

  return ativosClientes;
};

module.exports = { getByClient };
