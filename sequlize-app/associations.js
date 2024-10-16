const AppUser = require('./models/AppUser');
const Profile = require('./models/Profile');
const Post = require('./models/Post');
const Role = require('./models/Role');

const defineAssociations = () => {
  // One-to-One (AppUser -> Profile)
  AppUser.hasOne(Profile, { foreignKey: 'profile_id', as: 'profile' });
  Profile.belongsTo(AppUser, { foreignKey: 'profile_id' });

  // One-to-Many (AppUser -> Post)
  AppUser.hasMany(Post, { foreignKey: 'app_user_id', as: 'posts' });
  Post.belongsTo(AppUser, { foreignKey: 'app_user_id' });

  // Many-to-Many (AppUser <-> Role)
  AppUser.belongsToMany(Role, {
    through: 'user_role',
    foreignKey: 'user_id',
    otherKey: 'role_id',
    as: 'roles'
  });

  Role.belongsToMany(AppUser, {
    through: 'user_role',
    foreignKey: 'role_id',
    otherKey: 'user_id',
    as: 'appUsers'
  });
};

module.exports = defineAssociations;
