/* eslint-disable no-undef */
const { expect } = require('chai');
const { stub } = require('sinon');

const { AtivoCliente, Ativo } = require('../../database/models');
const investimentService = require('../../services/investments.services');

const testAtivo = {
  codAtivo: 1,
  nomeAtivo: 'AZUL4',
  qtdAtivo: 90,
  valorAtivo: 12.54,
  total: 125.4,
};

const testAtivoCliente = {
  usuario: 1,
  ativo: 1,
  qtdAtivo: 10,
  valor: 12.54,
};

const semAtivos = { error: 404, message: 'Usuário não possui ativos' };
const ativoNaoExiste = { error: 404, message: 'Ativo não encontrado' };

describe('InvestimentsService', () => {
  const findAllStub = stub(AtivoCliente, 'findAll');
  describe('#getByClient', () => {
    let ativoCliente;

    describe('quando o usuário possui um ativo', () => {
      before(async () => {
        findAllStub.resolves(testAtivoCliente);
        ativoCliente = await investimentService.getByClient(1);
      });

      after(() => {
        findAllStub.reset();
        ativoCliente = null;
      });

      it('investimentService.getByclient é chamado', async () => {
        expect(AtivoCliente.findAll.calledOnce).to.be.equals(true);
      });

      it('a resposta é um objeto', async () => {
        expect(ativoCliente).to.deep.equal(testAtivoCliente);
      });
    });
  });

  describe('quando o usuário não possui ativos', () => {
    let ativoCliente;

    before(async () => {
      findAllStub.resolves(semAtivos);
      ativoCliente = await investimentService.getByClient(2);
    });

    after(() => {
      findAllStub.reset();
      ativoCliente = null;
    });

    it('investimentService.getByclient é chamado', async () => {
      expect(AtivoCliente.findAll.calledOnce).to.be.equals(true);
    });

    it('a resposta é um objeto', async () => {
      expect(ativoCliente).to.deep.equal(semAtivos);
    });
  });

  describe('#getScripService', () => {
    const findByPk = stub(Ativo, 'findByPk');
    let ativo;

    describe('quando existe o ativo', () => {
      before(async () => {
        findByPk.resolves(testAtivo);
        ativo = await investimentService.getScripService(1);
      });

      after(() => {
        findAllStub.reset();
        ativo = null;
      });

      it('findByPk é chamado', async () => {
        expect(Ativo.findByPk.calledOnce).to.be.equals(true);
      });

      it('a resposta é um objeto', async () => {
        expect(ativo).to.deep.equal(testAtivo);
      });
    });

    describe('quando não existe o ativo', () => {
      before(async () => {
        findByPk.resolves(ativoNaoExiste);
        ativo = await investimentService.getScripService(4);
      });

      after(() => {
        findAllStub.reset();
        ativo = null;
      });

      it('a resposta é um objeto de erro', async () => {
        expect(ativo).to.deep.equal(ativoNaoExiste);
      });
    });
  });

  describe('#getScripsService', () => {
    let ativos;
    before(async () => {
      findAllStub.resolves([testAtivo]);
      ativos = await investimentService.getScripsService();
    });

    after(() => {
      findAllStub.reset();
      ativos = null;
    });

    it('a resposta é array', async () => {
      expect(ativos).to.be.an('array');
    });
  });
});
