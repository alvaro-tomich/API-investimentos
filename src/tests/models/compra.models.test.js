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

const CompraModel = require('../../database/models/compra');

describe('O model de Compra', () => {
  const Compra = CompraModel(sequelize, dataTypes);
  const compra = new Compra();

  describe('possui o nome "Compra"', () => {
    checkModelName(Compra)('Compra');
  });

  describe('possui as propriedades "codCompra", "qtdAtivo" e "usuario"', () => {
    ['codCompra', 'qtdAtivo'].forEach(checkPropertyExists(compra));
  });

  describe('Associação belongsTo com Ativo', () => {
    const Ativo = 'Ativo';

    before(() => {
      Compra.associate({ Ativo });
    });

    it('Verifica se possui associação belongsTo com ativo', () => {
      expect(Compra.belongsTo).to.have.been.calledWith(Ativo, { foreignKey: 'ativo', as: 'ativos' });
    });
  });
});
