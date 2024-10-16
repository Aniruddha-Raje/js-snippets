const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Post extends Model {}

Post.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Post',
  tableName: 'post',
  timestamps: false
});

module.exports = Post;
