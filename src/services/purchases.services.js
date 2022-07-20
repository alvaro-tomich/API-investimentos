const { Compra } = require('../database/models');

const purchaseScrip = async ({ codCliente, codAtivo, qtdAtivo }) => {
  await Compra.create({ usuario: codCliente, ativo: codAtivo, qtdAtivo });
};

module.exports = { purchaseScrip };
