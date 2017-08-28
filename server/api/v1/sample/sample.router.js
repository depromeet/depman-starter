const express = require('express');
const router = express.Router();

const ctrl = require('./sample.ctrl');

router.get('/', ctrl.getUserList);
router.get('/cr', ctrl.createUser);

module.exports = router;