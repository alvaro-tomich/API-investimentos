'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ativos', {
      codAtivo: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'cod_ativo',
      },
      nomeAtivo: {
        type: Sequelize.STRING,
        field: 'nome_ativo',
      },
      qtdAtivo: {
        type: Sequelize.INTEGER,
        field: 'qtd_ativo',
      },
      valorAtivo: {
        type: Sequelize.FLOAT,
        field: 'valor_ativo',
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Ativos');
  }
};