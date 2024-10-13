// associations.js
const AppUser = require('./AppUser');
const Profile = require('./Profile');
const Post = require('./Post');
const Role = require('./Role');

// Define associations

// AppUser associations
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

// Profile associations
Profile.belongsTo(AppUser, {
    foreignKey: 'app_user_id',
    as: 'appUser',
});

// Post associations
Post.belongsTo(AppUser, {
    foreignKey: 'app_user_id',
    as: 'appUser',
});

// Role associations
Role.belongsToMany(AppUser, {
    through: 'user_role',
    foreignKey: 'role_id',
    otherKey: 'user_id',
    as: 'appUsers',
});

module.exports = {
    AppUser,
    Profile,
    Post,
    Role,
};
