const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Role extends Model {}

Role.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Role',
  tableName: 'role',
  timestamps: false
});

module.exports = Role;
