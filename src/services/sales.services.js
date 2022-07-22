const {
  Venda, AtivoCliente, Ativo, Conta,
} = require('../database/models');

const verifySellQuantity = async (codCliente, codAtivo, qtdAtivo) => {
  const [ativoCliente] = await AtivoCliente
    .findAll({ where: { usuario: codCliente, ativo: codAtivo } });
  if (!ativoCliente) return false;
  if (ativoCliente.qtdAtivo < qtdAtivo) return false;
  return true;
};

const updateScripQuantityAndValue = async ({ codAtivo, qtdAtivo }) => {
  const ativo = await Ativo.findByPk(codAtivo);
  const newTotal = ativo.total - (ativo.valorAtivo * qtdAtivo);
  await Ativo
    .update({ qtdAtivo: ativo.qtdAtivo + qtdAtivo, total: newTotal }, { where: { codAtivo } });
};

const updateScriptClient = async ({ codCliente, codAtivo, qtdAtivo }) => {
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

const updateBalance = async ({ codCliente, codAtivo, qtdAtivo }) => {
  const ativo = await Ativo.findByPk(codAtivo);
  const total = ativo.valorAtivo * qtdAtivo;
  const [conta] = await Conta.findAll({ where: { usuario: codCliente } });
  await Conta.update({ saldo: conta.saldo + total }, { where: { usuario: codCliente } });
};

const createSale = async ({ codCliente, codAtivo, qtdAtivo }) => {
  const isSeelOk = await verifySellQuantity(codCliente, codAtivo, qtdAtivo);
  if (!isSeelOk) return false;
  await Venda.create({ usuario: codCliente, ativo: codAtivo, qtdAtivo });

  return true;
};

module.exports = {
  createSale, updateBalance, updateScriptClient, updateScripQuantityAndValue,
};
