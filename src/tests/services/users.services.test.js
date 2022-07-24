/* eslint-disable no-undef */
const { expect } = require('chai');
const { stub } = require('sinon');

const { Usuario, Conta, Endereco } = require('../../database/models');
const usersService = require('../../services/users.services');

const token = { token: 'asdadadadasdasdasd' };

const deposit = {
  codCliente: 1,
  valor: 100,
};

const user = {
  nome: 'Álvaro',
  senha: '5550123',
  email: 'juniorlouzada@gmail.com',
  rua: 'Mário Rocha',
  numero: 120,
  bairro: 'Santa Rita',
  cidade: 'Governador Valadares',
  estado: 'MG',
};

describe('UsersService', () => {
  const updateContaStub = stub(Conta, 'update');
  const createUserStub = stub(Usuario, 'create');

  describe('#createUser', () => {
    describe('Quando é criado com sucesso!', () => {
      const createContaStub = stub(Conta, 'create');
      const createEnderecoStub = stub(Endereco, 'create');
      let newUser;

      before(async () => {
        createUserStub.resolves(token);
        newUser = await usersService.createUser(user);
        await createContaStub(0, newUser.codUsuario);
        await createEnderecoStub(
          user.rua,
          user.numero,
          user.bairro,
          user.cidade,
          user.estado,
          newUser.codUsuario,
        );
      });

      after(() => {
        createUserStub.reset();
        userToken = null;
      });

      it('Usuario.create é chamado', () => {
        expect(Usuario.create.calledOnce).to.be.equals(true);
      });

      it('Retorna um token do tipo string', () => {
        expect(newUser.token).to.be.an('string');
      });
    });
  });

  describe('#deleteUser', () => {
    describe('Quando é removido com sucesso!', () => {
      const deleteUserStub = stub(Usuario, 'destroy');
      before(async () => {
        deleteUserStub.resolves();
        deletedUser = await usersService.deleteUser(1);
      });

      after(() => {
        deleteUserStub.reset();
      });

      it('Usuario.destroy é chamado', () => {
        expect(Usuario.destroy.calledOnce).to.be.equals(true);
      });
    });
  });

  describe('#depositService', () => {
    describe('Quando é depositado com sucesso!', () => {
      let updated;

      before(async () => {
        updateContaStub.resolves(deposit);
        updated = await usersService.depositServices(deposit);
      });

      after(() => {
        updateContaStub.reset();
        updated = null;
      });

      it('Conta update é chamado', () => {
        expect(Conta.update.calledOnce).to.be.equals(true);
      });

      it('Retorna verdadeiro', () => {
        expect(updated).to.be.equals(true);
      });
    });
  });

  describe('#withdrawService', () => {
    describe('Saque bem sucedido!', () => {
      let updated;

      before(async () => {
        updateContaStub.resolves(deposit);
        updated = await usersService.withdrawServices(deposit);
      });

      after(() => {
        updateContaStub.reset();
        updated = null;
      });

      it('Conta update é chamado', () => {
        expect(Conta.update.calledOnce).to.be.equals(true);
      });

      it('Retorna verdadeiro', () => {
        expect(updated).to.be.equals(true);
      });
    });
  });
});
