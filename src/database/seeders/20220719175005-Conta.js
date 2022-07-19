'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Conta',
      [{
        cod_conta: 1,
        usuario: 1,
        saldo: 350.00
       },
       {
        cod_conta: 2,
        usuario: 2,
        saldo: 300.00
       },
       ], { timestamps: false })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Conta', null, {});
  }
};
