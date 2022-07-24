module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Usuarios',
      [{
        cod_usuario: 1,
        nome: 'Álvaro Ramos',
        email: 'alvaroramos222@hotmail.com',
        senha: '123456',
      },
      {
        cod_usuario: 2,
        nome: 'Teste Simples',
        email: 'testsimples@hotmail.com',
        senha: '123456',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Usuarios', null, {});
  },
};
