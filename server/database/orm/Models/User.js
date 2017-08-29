const Sequelize = require('sequelize');
const connection = require('../connection');

const commonModel = require('./Common');


const User = connection.define('User', Object.assign({}, commonModel, {
    USER_CD: {
        type: Sequelize.STRING(30),
        primaryKey: true
    },
    NAME: {
        type: Sequelize.STRING,
        // allowNull: false,
        // set(val) {
        //     this.setDataValue('title', val.toUpperCase());
        // }
        // get() {
        //     const title = this.getDataValue('title');
        //     // 'this' allows you to access attributes of the instance
        //     return this.getDataValue('name') + ' (' + title + ')';
        // },
        // validate: { min: -180, max: 180 }
    }
}), {
    tableName: 'TB_USER_INFO',
    timestamps: false,
    defaultScope: {
        where: {
            DEL_FLAG: 0
        }
    }
});


connection.sync({force: true}).then(() => {
    console.log('database is synced');
});

module.exports = User;