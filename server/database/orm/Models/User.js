const Sequelize = require('sequelize');
const connection = require('../connection');


const User = connection.define('User', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }, 
    DEL_FLAG: {
        type: Sequelize.INTEGER(1),
        defaultValue: 0,
    },
}, {
    tableName: 'TB_USER_INFO'
});

connection.sync({force: true}).then(() => console.log('Databases sync'));
module.exports = User;