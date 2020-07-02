const theatersDao = require("../dao/theatersCk");
const service = {};
service.getTheaters= async (id) => {
    const data = await theatersDao.findTheaters(id);
    return data;
}
module.exports = service;