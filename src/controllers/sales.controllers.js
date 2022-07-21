const { createSale } = require('../services/sales.services');

const create = async (req, res) => {
  await createSale(req.body);
  res.status(201).json({ message: 'Venda realizada com sucesso!' });
};

module.exports = { create };
