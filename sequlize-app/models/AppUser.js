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

// Associations
AppUser.hasOne(Profile, {
    foreignKey: 'app_user_id',
    as: 'profile',
});

AppUser.hasMany(Post, {
    foreignKey: 'app_user_id',
    as: 'posts',
});

AppUser.belongsToMany(Role, {
    through: 'user_role',
    foreignKey: 'user_id',
    otherKey: 'role_id',
    as: 'roles',
});

module.exports = AppUser;
