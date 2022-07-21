const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  algorithm: 'HS256',
};

const generateJWTToken = (payload) => jwt.sign(payload, SECRET, jwtConfig);

const authenticateToken = (token) => {
  try {
    const validate = jwt.verify(token, SECRET);
    return validate;
  } catch (error) {
    return false;
  }
};

module.exports = { generateJWTToken, authenticateToken };
