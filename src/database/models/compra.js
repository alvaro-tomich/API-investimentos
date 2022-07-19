const purchaseSchema = (sequelize, dataTypes) => {
  const purchaseTable = sequelize.define('Compra', {
    codCompra: {
      allowNull: false, type: dataTypes.INTEGER, autoIncrement: true, primaryKey: true,
    },
    qtdCompra: { allowNull: false, type: dataTypes.INTEGER },
  }, { timestamps: false, underscored: true });

  purchaseTable.associate = (models) => {
    purchaseTable.belongsTo(models.Usuario, {
      foreignKey: 'usuario', as: 'usuarios',
    });
  };

  purchaseTable.associate = (models) => {
    purchaseTable.belongsTo(models.Ativo, {
      foreignKey: 'ativo', as: 'ativos',
    });
  };

  return purchaseTable;
};

module.exports = purchaseSchema;
