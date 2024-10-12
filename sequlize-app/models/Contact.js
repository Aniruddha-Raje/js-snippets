const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./User');

const Contact = sequelize.define('Contact', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    phoneNumber: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    }
}, {
    tableName: 'contact',
    timestamps: false // Disable timestamps
});

module.exports = Contact;
