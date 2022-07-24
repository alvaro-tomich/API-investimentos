const { authenticateToken } = require('../utils/JWTGenerate');

const tokenMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const token = authorization.replace('Bearer ', '');
  const user = authenticateToken(token);
  if (!user) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  return next();
};

module.exports = tokenMiddleware;
