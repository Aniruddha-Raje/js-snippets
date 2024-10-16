const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class UserRole extends Model {}

UserRole.init({
  user_id: {
    type: DataTypes.BIGINT,
    primaryKey: true
  },
  role_id: {
    type: DataTypes.BIGINT,
    primaryKey: true
  }
}, {
  sequelize,
  modelName: 'user_role',
  tableName: 'user_role',
  timestamps: false // Ensure no timestamps are expected
});

module.exports = UserRole;
