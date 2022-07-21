const { Venda } = require('../database/models');

const createSale = async ({ codCliente, codAtivo, qtdAtivo }) => {
  await Venda.create({ usuario: codCliente, ativo: codAtivo, qtdAtivo });
};

module.exports = { createSale };
