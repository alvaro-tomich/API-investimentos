'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Ativos',
      [{
         cod_ativo: 1,
         nome_ativo: 'AZUL4',
         qtd_ativo: 100,
         valor_ativo: 12.54,
       },
       {
         cod_ativo: 2,
         nome_ativo: 'PETR4',
         qtd_ativo: 100,
         valor_ativo: 29.18,
       },
       {
        cod_ativo: 3,
        nome_ativo: 'VALE3',
        qtd_ativo: 100,
        valor_ativo: 68.88,
      },
      ], { timestamps: false })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Ativos', null, {});
  }
};
