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

const EnderecoModel = require('../../database/models/endereco');

describe('O model de Book', () => {
  const Endereco = EnderecoModel(sequelize, dataTypes);
  const endereco = new Endereco();

  describe('possui o nome "Endereco"', () => {
    checkModelName(Endereco)('Endereco');
  });

  describe('possui as propriedades "codEndereco", "rua", "numero", "bairro", "cidade", "estado', () => {
    ['codEndereco', 'rua', 'numero', 'bairro', 'cidade', 'estado'].forEach(checkPropertyExists(endereco));
  });

  describe('Associações', () => {
    const Usuario = 'Usuario';

    before(() => {
      Endereco.associate({ Usuario });
    });

    it('Verifica se existe associação belongs to com Usuario', () => {
      expect(Endereco.belongsTo).to.have.been.calledWith(Usuario);
    });
  });
});
