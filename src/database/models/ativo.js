const scripSchema = (sequelize, dataTypes) => {
  const scripTable = sequelize.define('Ativo', {
    codAtivo: { allowNull: false, type: dataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nomeAtivo: dataTypes.STRING(10),
    qtdAtivo: dataTypes.INT,
    valorAtivo: dataTypes.DECIMAL
  }, { timestamps: false, underscored: true })

  scripTable.associate = (models) => {
    scripTable.hasMany(models.Venda, {
      foreignKey: ativo, as: 'venda'
    })
  }

  scripTable.associate = (models) => {
    scripTable.hasMany(models.Compra, {
      foreignKey: ativo, as: 'compras'
    })
  }

  return scripTable;
}

module.exports = scripSchema;
