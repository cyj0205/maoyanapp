const crypto = require('crypto');
const data = {
    MD5_SUFFIX: 'Mr-right_salt', 
    md5: (pwd) => {
        let md5 = crypto.createHash('md5');
        return md5.update(pwd+data.MD5_SUFFIX).digest('hex');
    },
    secretKey: 'Mr-right_key'
};

module.exports = data;