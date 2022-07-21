const { Venda, AtivoCliente } = require('../database/models');

const verifySellQuantity = async (codCliente, codAtivo, qtdAtivo) => {
  const [ativoCliente] = await AtivoCliente
    .findAll({ where: { usuario: codCliente, ativo: codAtivo } });
  if (ativoCliente.qtdAtivo < qtdAtivo) return false;
  return true;
};

const createSale = async ({ codCliente, codAtivo, qtdAtivo }) => {
  const isSeelOk = await verifySellQuantity(codCliente, codAtivo, qtdAtivo);
  if (!isSeelOk) return false;
  await Venda.create({ usuario: codCliente, ativo: codAtivo, qtdAtivo });

  return true;
};

module.exports = { createSale };
