const { purchaseScrip } = require('../services/purchases.services');

const purchase = async (req, res) => {
  await purchaseScrip(req.body);

  return res.status(201).json({ message: 'Compra efetuada com sucesso!' });
};

module.exports = { purchase };
