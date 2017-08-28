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
    tableName: 'TB_USER_INFO',
    defaultScope: {
        where: {
            DEL_FLAG: 0
        }
    }
});

module.exports = User;