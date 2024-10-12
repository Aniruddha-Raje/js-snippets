const sequelize = require('./database');
const { User, Role, Contact, Application, IDCard } = require('./associations');

const run = async () => {
    try {
        await sequelize.sync();
        const users = await User.findAll();
        console.log(users);
    } catch (error) {
        console.error('Error fetching users:', error);
    } finally {
        await sequelize.close();
    }
}

run();