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

const AtivoModel = require('../../database/models/ativo');

describe('O model de Ativo', () => {
  const Ativo = AtivoModel(sequelize, dataTypes);
  const ativo = new Ativo();

  describe('possui o nome "Ativo"', () => {
    checkModelName(Ativo)('Ativo');
  });

  describe('possui as propriedades "codAtivo", "nomeAtivo", "qtdAtivo", "valorAtivo" e "total"', () => {
    ['codAtivo', 'nomeAtivo', 'qtdAtivo', 'valorAtivo', 'total'].forEach(checkPropertyExists(ativo));
  });

  describe('Associação hasMany com Compra', () => {
    const Compra = 'Compra';

    before(() => {
      Ativo.associate({ Compra });
    });

    it('Verifica se possui associação hasMany com compra', () => {
      expect(Ativo.hasMany).to.have.been.calledWith(Compra, { foreignKey: 'ativo', as: 'compras' });
    });
  });
});
