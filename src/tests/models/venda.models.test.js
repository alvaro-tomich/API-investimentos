/* eslint-disable no-undef */
const { expect } = require('chai');
const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');
const chai = require('chai');
chai.use(require('sinon-chai'));

const VendaModel = require('../../database/models/venda');

describe('O model de Venda', () => {
  const Venda = VendaModel(sequelize, dataTypes);
  const venda = new Venda();

  describe('possui o nome "Compra"', () => {
    checkModelName(Venda)('Venda');
  });

  describe('possui as propriedades "codVenda", "qtdAtivo"', () => {
    ['codVenda', 'qtdAtivo'].forEach(checkPropertyExists(venda));
  });

  describe('Associação belongsTo com Ativos', () => {
    const Ativo = 'Ativo';

    before(() => {
      Venda.associate({ Ativo });
    });

    it('Verifica se possui associação belongsTo com Ativos', () => {
      expect(Venda.belongsTo).to.have.been.calledWith(Ativo, { foreignKey: 'ativo', as: 'ativos' });
    });
  });
});
