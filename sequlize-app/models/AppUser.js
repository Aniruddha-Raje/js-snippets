const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class AppUser extends Model {}

AppUser.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'AppUser',
  tableName: 'app_user',
  timestamps: false
});

module.exports = AppUser;
