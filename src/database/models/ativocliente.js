const scriptClientSchema = (sequelize, dataTypes) => {
  const scriptClientTable = sequelize.define('AtivoCliente', {
    usuario: { type: dataTypes.INTEGER, primaryKey: true },
    ativo: { type: dataTypes.INTEGER, primaryKey: true },
    qtdAtivo: dataTypes.INTEGER,
    total: dataTypes.FLOAT,
  }, { timestamps: false, underscored: true, tableName: 'AtivosClientes' });

  scriptClientTable.associate = (models) => {
    models.AtivoCliente.belongsToMany(models.Usuario, {
      through: scriptClientTable,
      foreignKey: 'ativo',
      otherKey: 'usuario',
      as: 'usuarios',
    });

    models.AtivoCliente.belongsToMany(models.Ativo, {
      through: scriptClientTable,
      foreignKey: 'usuario',
      otherKey: 'ativo',
      as: 'ativos',
    });
  };

  return scriptClientTable;
};

module.exports = scriptClientSchema;
