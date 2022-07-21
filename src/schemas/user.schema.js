const joi = require('joi');

const userSchema = joi.object({
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
  email: joi.string().email().required().messages({
    'string.base': '422|Email deve ser uma string',
    'string.email': '422|Deve ser um email válido',
    'any.required': '400|Email é obrigatório',
  }),
  rua: joi.string().min(4).required().messages({
    'string.base': '422|Rua deve ser uma string',
    'string.min': '422|Rua deve conter 6 caracteres ou mais',
    'any.required': '400|Rua é obrigatório',
  }),
  numero: joi.number().required().messages({
    'number.base': '422|Numero deve ser um number',
    'any.required': '400|Numero é obrigatório',
  }),
  bairro: joi.string().min(4).required().messages({
    'string.base': '422|Bairro deve ser uma string',
    'string.min': '422|Bairro deve conter 4 caracteres ou mais',
    'any.required': '400|Bairro é obrigatório',
  }),
  cidade: joi.string().min(3).required().messages({
    'string.base': '422|Cidade deve ser uma string',
    'string.min': '422|Cidade deve conter 6 caracteres ou mais',
    'any.required': '400|Cidade é obrigatório',
  }),
  estado: joi.string().min(2).required().messages({
    'string.base': '422|Estado deve ser uma string',
    'string.min': '422|Estado deve conter 2 caracteres ou mais',
    'any.required': '400|Estado é obrigatório',
  }),
});

module.exports = userSchema;
