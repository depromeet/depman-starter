const User = reqlib('/server/database/orm/models/User');
const keygen = require('keygen');

exports.createUser = (req, res, next) => {
    User.create({
        USER_CD: keygen.hex(20),
        NAME: 'Kim HyeonJun'
    })
    .then((user) => res.send(user))
    .catch(next);
}

exports.getUserList = (req, res, next) => {
    User.findAll().then(list => {
        res.send({
            success: true, 
            data: {
                list: list, 
                count: list.length
            }
        })
    }).catch(next);
};