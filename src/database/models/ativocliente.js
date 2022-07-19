const scriptClientSchema = (sequelize, dataTypes) => {
  const scriptClientTable = sequelize.define('AtivoCliente', {
    usuario: { type: dataTypes.INTEGER, primaryKey: true },
    ativo: { type: dataTypes.INTEGER, primaryKey: true },
    qtdAtivo: sequelize.INTEGER,
    total: sequelize.FLOAT
  })

  scriptClientTable.associate = (models) => {
    models.BlogPost.belongsToMany(models.Usuario, {
        through: scriptClientTable,
        foreignKey: 'ativo',
        otherKey: 'usuario',
        as: 'usuarios' 
    });

    models.Category.belongsToMany(models.Ativo, {
        through: scriptClientTable,
        foreignKey: 'usuario',
        otherKey: 'ativo',
        as: 'ativos' 
    });
  }
}