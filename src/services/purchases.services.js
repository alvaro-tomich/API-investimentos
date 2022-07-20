const { Compra, Ativo } = require('../database/models');

const updateScripQuantity = async (codAtivo, qtdAtivo) => {
  const ativo = await Ativo.findByPk(codAtivo);
  await Ativo.update({ qtdAtivo: ativo.qtdAtivo - qtdAtivo }, { where: { codAtivo } });
};

const purchaseScrip = async ({ codCliente, codAtivo, qtdAtivo }) => {
  await Compra.create({ usuario: codCliente, ativo: codAtivo, qtdAtivo });
  await updateScripQuantity(codAtivo, qtdAtivo);
};

module.exports = { purchaseScrip };
