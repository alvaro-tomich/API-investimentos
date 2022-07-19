'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Enderecos', {
      codEndereco: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'cod_endereco',
      },
      rua: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      numero: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      bairro: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      cidade: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      estado: {
        allowNull: false,
        type: Sequelize.STRING(2)
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Enderecos');
  }
};