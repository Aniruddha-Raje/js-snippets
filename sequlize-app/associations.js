const User = require('./models/User');
const Role = require('./models/Role');
const Contact = require('./models/Contact');
const Application = require('./models/Application');
const IDCard = require('./models/IDCard');

// Associations
User.belongsTo(Role, { foreignKey: 'role_id' });
Role.hasMany(User, { foreignKey: 'role_id' });

User.hasMany(Contact, { foreignKey: 'user_id' });
Contact.belongsTo(User, { foreignKey: 'user_id' });

User.belongsToMany(Application, { through: 'user_application' });
Application.belongsToMany(User, { through: 'user_application' });

User.hasOne(IDCard, { foreignKey: 'user_id' });
IDCard.belongsTo(User, { foreignKey: 'user_id' });

module.exports = { User, Role, Contact, Application, IDCard };
