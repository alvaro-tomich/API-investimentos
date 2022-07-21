const { createSale } = require('../services/sales.services');

const create = async (req, res) => {
  const isSaleOk = await createSale(req.body);
  if (!isSaleOk) {
    return res.status(422).json({ message: 'Quantidade insuficiente!' });
  }
  return res.status(201).json({ message: 'Venda realizada com sucesso!' });
};

module.exports = { create };
