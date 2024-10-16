const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Profile extends Model {}

Profile.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  bio: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'Profile',
  tableName: 'profile',
  timestamps: false
});

module.exports = Profile;
