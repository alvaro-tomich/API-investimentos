const walletSchema = (sequelize, dataTypes) => {
  const walletTable = sequelize.define('Conta', {
    codConta: {
      allowNull: false, type: dataTypes.INTEGER, autoIncrement: true, primaryKey: true,
    },
    saldo: dataTypes.DECIMAL,
  }, { timestamps: false, underscored: true, tableName: 'Conta' });

  walletTable.associate = (models) => {
    walletTable.belongsTo(models.Usuario, {
      foreignKey: 'usuario', as: 'usuarios',
    });
  };

  return walletTable;
};

module.exports = walletSchema;
