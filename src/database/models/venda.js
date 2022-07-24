const salesSchema = (sequelize, dataTypes) => {
  const salesTable = sequelize.define('Venda', {
    codVenda: {
      allowNull: false, type: dataTypes.INTEGER, autoIncrement: true, primaryKey: true,
    },
    qtdAtivo: { allowNull: false, type: dataTypes.INTEGER },
    usuario: { type: dataTypes.INTEGER, foreignKey: true },
  }, { timestamps: false, underscored: true, tableName: 'Vendas' });

  salesTable.associate = (models) => {
    salesTable.belongsTo(models.Usuario, {
      foreignKey: 'usuario', as: 'usuarios',
    });
  };

  salesTable.associate = (models) => {
    salesTable.belongsTo(models.Ativo, {
      foreignKey: 'ativo', as: 'ativos',
    });
  };

  return salesTable;
};

module.exports = salesSchema;
