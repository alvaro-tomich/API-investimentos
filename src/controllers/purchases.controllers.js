const { purchaseScrip } = require('../services/purchases.services');

const purchase = async (req, res) => {
  const isBalanceOk = await purchaseScrip(req.body);
  if (!isBalanceOk) {
    return res.status(422).json({ message: 'Saldo insuficiente!' });
  }
  return res.status(201).json({ message: 'Compra efetuada com sucesso!' });
};

module.exports = { purchase };
