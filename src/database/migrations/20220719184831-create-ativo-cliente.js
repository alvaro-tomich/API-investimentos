module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AtivosClientes', {
      usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        onDelete: 'CASCADE',
        references: {
          model: 'Usuarios',
          key: 'cod_usuario',
        },
      },
      ativo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        onDelete: 'CASCADE',
        references: {
          model: 'Ativos',
          key: 'cod_ativo',
        },
      },
      qtdAtivo: {
        type: Sequelize.INTEGER,
        field: 'qtd_ativo',
      },
      valor: {
        type: Sequelize.FLOAT,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('AtivosClientes');
  },
};
