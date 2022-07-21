const { getByClient, getScripService, getScripsService } = require('../services/investments.services');

const getScripClient = async (req, res) => {
  const { codCliente } = req.params;
  const ativosClientes = await getByClient(codCliente);

  return res.status(200).json(ativosClientes);
};

const getScrip = async (req, res) => {
  const { codAtivo } = req.params;
  const ativo = await getScripService(codAtivo);

  return res.status(200).json(ativo);
};

const getScrips = async (_req, res) => {
  const scrips = await getScripsService();

  return res.status(200).json(scrips);
};

module.exports = { getScripClient, getScrip, getScrips };
