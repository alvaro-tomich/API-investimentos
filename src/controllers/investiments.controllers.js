const { getByClient, getScripService } = require('../services/investments.services');

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

module.exports = { getScripClient, getScrip };
