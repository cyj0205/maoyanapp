const cinemasDao = require("../dao/cinemasCk");
const service = {};
service.getCinemas= async () => {
    const data = await cinemasDao.findCinemas();
    return data;
}
module.exports = service;