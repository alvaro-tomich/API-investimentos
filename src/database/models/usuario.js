const userSchema = (sequelize, dataTypes) => {
  const userTable = sequelize.define("Usuario", {
      codUsuario: { allowNull: false, type: dataTypes.INTEGER, autoIncrement: true, primaryKey: true},
      nome: dataTypes.STRING,
      senha: dataTypes.STRING,
      email: { type: dataTypes.STRING, allowNull: false, unique: true },
  }, { timestamps: false, underscored: true })
  
  return userTable;
};

module.exports = userSchema;