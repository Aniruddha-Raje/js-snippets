const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./User');

const IDCard = sequelize.define('IDCard', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    }
}, {
    tableName: 'idcard',
    timestamps: false // Disable timestamps
});

module.exports = IDCard;
