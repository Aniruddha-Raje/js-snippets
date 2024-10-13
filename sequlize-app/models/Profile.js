const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');
const AppUser = require('./AppUser');

class Profile extends Model {}

Profile.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    bio: {
        type: DataTypes.TEXT,
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
    modelName: 'Profile',
    tableName: 'profile',
    timestamps: false // Disable timestamps
});

module.exports = Profile;
