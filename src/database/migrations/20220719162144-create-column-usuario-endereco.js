'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Enderecos', 'usuario', {
      type: Sequelize.INTEGER,
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'Usuarios',
        key: 'cod_usuario',
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropColumn('Enderecos', 'usuario');
  }
};
