const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');
const AppUser = require('./AppUser');

class Post extends Model {}

Post.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    app_user_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: 'app_user',
            key: 'id',
        }
    }
}, {
    sequelize,
    modelName: 'Post',
    tableName: 'post',
    timestamps: false // Disable timestamps
});

module.exports = Post;
