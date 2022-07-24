/* eslint-disable no-undef */
const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const AtivoClienteModel = require('../../database/models/ativocliente');

describe('O model de AtivoCliente', () => {
  const AtivoCliente = AtivoClienteModel(sequelize, dataTypes);
  const ativoCliente = new AtivoCliente();

  describe('possui o nome "AtivoCliente"', () => {
    checkModelName(AtivoCliente)('AtivoCliente');
  });

  describe('possui as propriedades "usuario", "ativo", "qtdAtivo" e "valor"', () => {
    ['usuario', 'ativo', 'qtdAtivo', 'valor'].forEach(checkPropertyExists(ativoCliente));
  });
});
