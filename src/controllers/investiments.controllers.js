const { getByClient } = require('../services/investments.services');

const getScripClient = async (req, res) => {
  const { codCliente } = req.params;
  const ativosClientes = await getByClient(codCliente);

  return res.status(200).json(ativosClientes);
};

module.exports = { getScripClient };
