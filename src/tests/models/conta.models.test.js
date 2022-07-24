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

const ContaModel = require('../../database/models/conta');

describe('O model de Conta', () => {
  const Conta = ContaModel(sequelize, dataTypes);
  const conta = new Conta();

  describe('possui o nome "Conta"', () => {
    checkModelName(Conta)('Conta');
  });

  describe('possui as propriedades "codConta" e "saldo"', () => {
    ['codConta', 'saldo'].forEach(checkPropertyExists(conta));
  });

  describe('Associação belongsTo com Usuario', () => {
    const Usuario = 'Usuario';

    before(() => {
      Conta.associate({ Usuario });
    });

    it('Verifica se possui associação belongsTo com Usuario', () => {
      expect(Conta.belongsTo).to.have.been.calledWith(Usuario, { foreignKey: 'usuario', as: 'usuarios' });
    });
  });
});
