/* eslint-disable no-console */
const {
  createSale, updateBalance, updateScriptClient, updateScripQuantityAndValue,
} = require('../services/sales.services');

const create = async (req, res) => {
  try {
    const isSaleOk = await createSale(req.body);
    if (!isSaleOk) {
      return res.status(422).json({ message: 'Quantidade insuficiente!' });
    }
    await updateScripQuantityAndValue(req.body);
    await updateScriptClient(req.body);
    await updateBalance(req.body);
    return res.status(201).json({ message: 'Venda realizada com sucesso!' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro interno!' });
  }
};

module.exports = { create };
