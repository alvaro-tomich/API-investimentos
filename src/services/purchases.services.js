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
  const [ativoCliente] = await AtivoCliente
    .findAll({ where: { usuario: codCliente, ativo: codAtivo } });
  if (ativoCliente) {
    const update = await AtivoCliente.update(
      {
        total: ativoCliente.total + total,
        qtdAtivo: ativoCliente.qtdAtivo + qtdAtivo,
      },
      { where: { usuario: codCliente, ativo: codAtivo } },
    );
    await updateBalance(codCliente, total);
    return update;
  }
  await updateBalance(codCliente, total);
  const newScriptAndClient = await AtivoCliente.create({
    usuario: codCliente, ativo: codAtivo, qtdAtivo, total,
  });
  return newScriptAndClient;
};

const purchaseScrip = async ({ codCliente, codAtivo, qtdAtivo }) => {
  await Compra.create({ usuario: codCliente, ativo: codAtivo, qtdAtivo });
  await updateScripQuantity(codAtivo, qtdAtivo);
  await mesclateScripAndClient(codCliente, codAtivo, qtdAtivo);
};

module.exports = { purchaseScrip };
