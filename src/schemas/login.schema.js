const joi = require('joi');

const loginSchema = joi.object({
  nome: joi.string().min(3).required().messages({
    'string.base': '422|Nome deve ser uma string',
    'string.min': '422|Nome deve conter 3 caracteres ou mais',
    'any.required': '400|Nome é obrigatório',
  }),
  senha: joi.string().min(6).required().messages({
    'string.base': '422|Senha deve ser uma string',
    'string.min': '422|Senha deve conter 6 caracteres ou mais',
    'any.required': '400|Senha é obrigatório',
  }),
});

module.exports = loginSchema;
