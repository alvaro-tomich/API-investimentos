module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Enderecos',
      [{
        cod_endereco: 1,
        rua: 'Mário Rocha',
        numero: 1234,
        bairro: 'Santa Rita',
        cidade: 'Governador Valadares',
        estado: 'MG'
      },
      {
        cod_endereco: 2,
        rua: 'Quintiliano Costa',
        numero: 1502,
        bairro: 'Santa Rita',
        cidade: 'Governador Valadares',
        estado: 'MG'
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Enderecos', null, {});
  },
};
