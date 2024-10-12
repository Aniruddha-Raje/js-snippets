const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Application = sequelize.define('Application', {
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
    tableName: 'application',
    timestamps: false // Disable timestamps
});

module.exports = Application;
