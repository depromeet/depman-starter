const User = reqlib('/server/database/orm/models/User');

exports.createUser = (req, res, next) => {
    User.create({
        firstName: 'Kim',
        lastName: 'HyeonJun'
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