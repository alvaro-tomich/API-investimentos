const userSchema = (sequelize, dataTypes) => {
  const userTable = sequelize.define("Usuario", {
      codUsuario: { allowNull: false, type: dataTypes.INTEGER, autoIncrement: true, primaryKey: true},
      nome: dataTypes.STRING,
      senha: dataTypes.STRING,
      email: { type: dataTypes.STRING, allowNull: false, unique: true },
  }, { timestamps: false, underscored: true })

  userTable.associate = (models) => {
    userTable.hasOne(models.Endereco, {
      foreignKey: 'usuario', as: 'enderecos'
    });
  }

  userTable.associate = (models) => {
    userTable.hasOne(models.Conta, {
      foreignKey: 'usuario', as: 'conta'
    });
  }

  userTable.associate = (models) => {
    userTable.hasMany(models.Venda, {
      foreignKey: 'usuario', as: 'vendas' 
    })
  }

  userTable.associate = (models) => {
    userTable.hasMany(models.Compra, {
      foreignKey: 'usuario', as: 'compras' 
    })
  }
  
  return userTable;
};

module.exports = userSchema;