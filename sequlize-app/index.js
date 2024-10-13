const sequelize = require('./database');
const { AppUser, Profile, Post, Role } = require('./associations');

const run = async () => {
    try {
        await sequelize.sync();
        const users = await AppUser.findAll();
        console.log(users);
    } catch (error) {
        console.error('Error fetching users:', error);
    } finally {
        await sequelize.close();
    }
}

run();