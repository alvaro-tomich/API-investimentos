const joi = require('joi');

const transactionsSchema = joi.object({
  codCliente: joi.number().min(1).required().messages({
    'number.base': '422|codCliente deve ser um number',
    'number.min': '422|codCliente deve ser maior ou igual a 1',
    'any.required': '400|codCliente é obrigatório',
  }),
  codAtivo: joi.number().min(1).required().messages({
    'number.base': '422|codAtivo deve ser um number',
    'number.min': '422|codAtivo deve ser maior ou igual a 1',
    'any.required': '400|codAtivo é obrigatório',
  }),
  qtdAtivo: joi.number().min(1).required().messages({
    'number.base': '422|qtdAtivo deve ser um number',
    'number.min': '422|qtdAtivo deve ser maior ou igual a 1',
    'any.required': '400|qtdAtivo é obrigatório',
  }),
});

module.exports = transactionsSchema;
