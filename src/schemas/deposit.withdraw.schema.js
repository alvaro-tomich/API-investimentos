const joi = require('joi');

const loginSchema = joi.object({
  codCliente: joi.number().min(1).required().messages({
    'number.base': '422|codCliente deve ser um number',
    'number.min': '422|codCliente deve ser maior ou igual a 1',
    'any.required': '400|codCliente é obrigatório',
  }),
  valor: joi.number().min(30).required().messages({
    'number.base': '422|Valor deve ser um number',
    'number.min': '422|Valor deve ser maior ou igual a 30',
    'any.required': '400|Valor é obrigatório',
  }),
});

module.exports = loginSchema;
