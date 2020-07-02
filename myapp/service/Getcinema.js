const cinemasDao = require("../dao/theatersDao");

const service = {}
//查询影院名字
service.getcinemas = async () => {
    const data = await cinemasDao.findcinemas();
    return data;
}

module.exports = service;
