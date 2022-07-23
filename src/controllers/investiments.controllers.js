/* eslint-disable no-console */
const { getByClient, getScripService, getScripsService } = require('../services/investments.services');

const getScripClient = async (req, res) => {
  const { codCliente } = req.params;
  try {
    const ativosClientes = await getByClient(codCliente);
    if (ativosClientes.error) {
      const { error, message } = ativosClientes;
      return res.status(error).json({ message });
    }
    return res.status(200).json(ativosClientes);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro interno!' });
  }
};

const getScrip = async (req, res) => {
  const { codAtivo } = req.params;
  try {
    const ativo = await getScripService(codAtivo);
    if (ativo.error) {
      const { error, message } = ativo;
      return res.status(error).json({ message });
    }
    return res.status(200).json(ativo);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro interno!' });
  }
};

const getScrips = async (_req, res) => {
  try {
    const scrips = await getScripsService();
    return res.status(200).json(scrips);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro interno!' });
  }
};

module.exports = { getScripClient, getScrip, getScrips };
