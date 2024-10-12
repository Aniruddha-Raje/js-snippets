const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Role = sequelize.define('Role', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'role',
    timestamps: false // Disable timestamps
});

module.exports = Role;
