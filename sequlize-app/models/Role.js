const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');
const AppUser = require('./AppUser');

class Role extends Model {}

Role.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'Role',
    tableName: 'role',
    timestamps: false // Disable timestamps
});

module.exports = Role;
