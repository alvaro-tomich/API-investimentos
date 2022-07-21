const { Venda, AtivoCliente, Ativo } = require('../database/models');

const verifySellQuantity = async (codCliente, codAtivo, qtdAtivo) => {
  const [ativoCliente] = await AtivoCliente
    .findAll({ where: { usuario: codCliente, ativo: codAtivo } });
  if (!ativoCliente) return false;
  if (ativoCliente.qtdAtivo < qtdAtivo) return false;
  return true;
};

const updateScripQuantity = async (codAtivo, qtdAtivo) => {
  const ativo = await Ativo.findByPk(codAtivo);
  await Ativo.update({ qtdAtivo: ativo.qtdAtivo + qtdAtivo }, { where: { codAtivo } });
};

const updateScriptClient = async (codCliente, codAtivo, qtdAtivo) => {
  const ativo = await Ativo.findByPk(codAtivo);
  const [ativoCliente] = await AtivoCliente
    .findAll({ where: { usuario: codCliente, ativo: codAtivo } });
  const newTotal = (ativoCliente.qtdAtivo - qtdAtivo) * ativo.valorAtivo;
  if (newTotal <= 0) {
    await AtivoCliente.destroy({
      where: {
        usuario: codCliente,
        ativo: codAtivo,
      },
    });
  }
  await AtivoCliente
    .update(
      {
        total: newTotal,
        qtdAtivo: ativoCliente.qtdAtivo - qtdAtivo,
      },
      { where: { usuario: codCliente, ativo: codAtivo } },
    );
};

const createSale = async ({ codCliente, codAtivo, qtdAtivo }) => {
  const isSeelOk = await verifySellQuantity(codCliente, codAtivo, qtdAtivo);
  if (!isSeelOk) return false;
  await Venda.create({ usuario: codCliente, ativo: codAtivo, qtdAtivo });
  await updateScriptClient(codCliente, codAtivo, qtdAtivo);
  await updateScripQuantity(codAtivo, qtdAtivo);

  return true;
};

module.exports = { createSale };
