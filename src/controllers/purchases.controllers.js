/* eslint-disable no-console */
const {
  purchaseScrip, updateScripQuantityAndTotal, mesclateScripAndClient, verifyScripAndClient,
} = require('../services/purchases.services');

const purchase = async (req, res) => {
  try {
    const existScripAndClient = await verifyScripAndClient(req.body);
    if (existScripAndClient.error) {
      return res.status(existScripAndClient.error).json({ message: existScripAndClient.message });
    }
    const isBalanceOk = await purchaseScrip(req.body);
    if (!isBalanceOk) {
      return res.status(422).json({ message: 'Saldo insuficiente!' });
    }
    await updateScripQuantityAndTotal(req.body);
    await mesclateScripAndClient(req.body);
    return res.status(201).json({ message: 'Compra efetuada com sucesso!' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro interno!' });
  }
};

module.exports = { purchase };
