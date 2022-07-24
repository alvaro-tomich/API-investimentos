/* eslint-disable no-undef */
const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const UsuarioModel = require('../../database/models/usuario');

describe('O model de Usuario', () => {
  const Usuario = UsuarioModel(sequelize, dataTypes);
  const usuario = new Usuario();

  describe('possui o nome "Usuario"', () => {
    checkModelName(Usuario)('Usuario');
  });

  describe('possui as propriedades "codUsuario", "nome", "senha" e "email"', () => {
    ['codUsuario', 'nome', 'senha', 'email'].forEach(checkPropertyExists(usuario));
  });
});
