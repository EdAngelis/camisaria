'use strict'
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

module.exports = {
    mongodb_LocalConection: 'mongodb://localhost:27017/camisaria',
    secretKey: 'SecretKey',
    salt,

}