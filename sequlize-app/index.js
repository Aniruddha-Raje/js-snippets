const sequelize = require('./database');
const defineAssociations = require('./associations');

// Import Models
const AppUser = require('./models/AppUser');
const Profile = require('./models/Profile');
const Post = require('./models/Post');
const Role = require('./models/Role');



const run = async () => {
    try {

        // Define Associations
        await defineAssociations();
        
        const users = await AppUser.findAll({
            include: [
              { model: Profile, as: 'profile' },         // Include Profile
              { model: Post, as: 'posts' },              // Include Posts
              { model: Role, as: 'roles' }               // Include Roles (Many-to-Many)
            ]
          });
        console.log(users);
    } catch (error) {
        console.error('Error fetching users:', error);
    } finally {
        await sequelize.close();
    }
}

run();