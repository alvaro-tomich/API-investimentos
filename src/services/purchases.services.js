const {
  Compra, Ativo, AtivoCliente, Conta,
} = require('../database/models');

const updateScripQuantity = async (codAtivo, qtdAtivo) => {
  const ativo = await Ativo.findByPk(codAtivo);
  await Ativo.update({ qtdAtivo: ativo.qtdAtivo - qtdAtivo }, { where: { codAtivo } });
};

const updateBalance = async (codCliente, valor) => {
  const conta = await Conta.findByPk(codCliente);
  await Conta.update({ saldo: conta.saldo - valor }, { where: { usuario: codCliente } });
};

const mesclateScripAndClient = async (codCliente, codAtivo, qtdAtivo) => {
  const ativo = await Ativo.findByPk(codAtivo);
  const total = ativo.valorAtivo * qtdAtivo;
  await updateBalance(codCliente, total);
  await AtivoCliente.create({
    usuario: codCliente, ativo: codAtivo, qtdAtivo, total,
  });
};

const purchaseScrip = async ({ codCliente, codAtivo, qtdAtivo }) => {
  await Compra.create({ usuario: codCliente, ativo: codAtivo, qtdAtivo });
  await updateScripQuantity(codAtivo, qtdAtivo);
  await mesclateScripAndClient(codCliente, codAtivo, qtdAtivo);
};

module.exports = { purchaseScrip };
