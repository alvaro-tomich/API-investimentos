module.exports = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(Number(code)).json({ message });
  }

  return next();
};
