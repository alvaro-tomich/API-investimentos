const { Compra, Ativo, AtivoCliente } = require('../database/models');

const updateScripQuantity = async (codAtivo, qtdAtivo) => {
  const ativo = await Ativo.findByPk(codAtivo);
  await Ativo.update({ qtdAtivo: ativo.qtdAtivo - qtdAtivo }, { where: { codAtivo } });
};

const mesclateScripAndClient = async (codCliente, codAtivo, qtdAtivo) => {
  const ativo = await Ativo.findByPk(codAtivo);
  const total = ativo.valorAtivo * qtdAtivo;
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
