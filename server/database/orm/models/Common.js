const Sequelize = require('sequelize');

module.exports = {
    /* common */
    DEL_FLAG: {
        type: Sequelize.INTEGER(1),
        defaultValue: 0,
    },
    DT_CREATED: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    DT_MODIFIED: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
}