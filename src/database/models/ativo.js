const scripSchema = (sequelize, dataTypes) => {
  const scripTable = sequelize.define('Ativo', {
    codAtivo: {
      allowNull: false, type: dataTypes.INTEGER, autoIncrement: true, primaryKey: true,
    },
    nomeAtivo: dataTypes.STRING(10),
    qtdAtivo: dataTypes.INTEGER,
    valorAtivo: dataTypes.DECIMAL,
  }, { timestamps: false, underscored: true, tableName: 'Ativos' });

  scripTable.associate = (models) => {
    scripTable.hasMany(models.Venda, {
      foreignKey: 'ativo', as: 'venda',
    });
  };

  scripTable.associate = (models) => {
    scripTable.hasMany(models.Compra, {
      foreignKey: 'ativo', as: 'compras',
    });
  };

  return scripTable;
};

module.exports = scripSchema;
