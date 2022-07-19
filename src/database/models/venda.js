const saleSchema = (sequelize, dataTypes) => {
  const salesTable = sequelize.define('Venda', {
    codVenda: { allowNull: false, type: dataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    qtdVenda: { allowNull: false, type: dataTypes.INTEGER }
  }, { timestamps: false, underscored: true })

  salesTable.associate = (models) => {
    salesTable.belongsTo(models.Usuario, {
      foreignKey: 'usuario', as: 'usuarios'
    })
  }

  salesTable.associate = (models) => {
    salesTable.belongsTo(models.Ativo, {
      foreignKey: 'ativo', as: 'ativos'
    })
  }

  return salesTable;
}

module.exports = saleSchema;
