const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database'); // Adjust path as necessary

class AppUser extends Model {}

AppUser.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
}, {
    sequelize,
    modelName: 'AppUser',
    tableName: 'app_user',
    timestamps: false // Disable timestamps
});

module.exports = AppUser;
