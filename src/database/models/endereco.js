const addressSchema = (sequelize, dataTypes) => {
  const addressTable = sequelize.define('Endereco', {
    codEndereco: { allowNull: false, type: dataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    rua: dataTypes.STRING,
    numero: dataTypes.INTEGER,
    bairro: dataTypes.STRING,
    cidade: dataTypes.STRING,
    estado: dataTypes.STRING,
  }, { timestamps: false, underscored: true })

  addressTable.associate = (models) => {
    addressTable.belongsTo(models.Usuario, {
      foreignKey: 'usuario', as: 'usuarios'
    })
  }

  return addressTable;
};

module.exports = addressSchema;