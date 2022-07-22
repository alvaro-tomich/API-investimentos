const {
  Compra, Ativo, AtivoCliente, Conta, Usuario,
} = require('../database/models');

const updateScripQuantityAndTotal = async ({ codAtivo, qtdAtivo }) => {
  const ativo = await Ativo.findByPk(codAtivo);
  const newTotal = ativo.total + (ativo.valorAtivo * qtdAtivo);
  await Ativo
    .update({
      qtdAtivo: ativo.qtdAtivo - qtdAtivo,
      total: newTotal,
    }, { where: { codAtivo } });
};

const updateBalance = async (codCliente, valor) => {
  const conta = await Conta.findByPk(codCliente);
  await Conta.update({ saldo: conta.saldo - valor }, { where: { usuario: codCliente } });
};

const mesclateScripAndClient = async ({ codCliente, codAtivo, qtdAtivo }) => {
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
    return update;
  }
  const newScriptAndClient = await AtivoCliente.create({
    usuario: codCliente, ativo: codAtivo, qtdAtivo, total,
  });
  return newScriptAndClient;
};

const verifyScripAndClient = async ({ codCliente, codAtivo }) => {
  const ativo = await Ativo.findByPk(codAtivo);
  if (!ativo) return { error: 404, message: 'Ativo não encontrado!' };
  const usuario = await Usuario.findByPk(codCliente);
  if (!usuario) return { error: 404, message: 'Usuario não encontrado!' };
  return {};
};

const purchaseScrip = async ({ codCliente, codAtivo, qtdAtivo }) => {
  const ativo = await Ativo.findByPk(codAtivo);
  const total = ativo.valorAtivo * qtdAtivo;
  const [conta] = await Conta.findAll({ where: { usuario: codCliente } });
  if (conta.saldo - total <= 0) return false;
  await updateBalance(codCliente, total);
  await Compra.create({ usuario: codCliente, ativo: codAtivo, qtdAtivo });
  return true;
};

module.exports = {
  purchaseScrip, updateScripQuantityAndTotal, mesclateScripAndClient, verifyScripAndClient,
};
