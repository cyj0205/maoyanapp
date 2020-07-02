const badSeatsDao = require("../dao/badSeats");
const service = {};
service.getBadSeats= async (theatersSeatsId) => {
    const data = await badSeatsDao.findBadSeats(theatersSeatsId);
    return data;
}
service.addBadSeats= async (dataId,theatersSeatsId) => {
    const data = await badSeatsDao.addBadSeat(dataId,theatersSeatsId);
    let isChange;
    if (data.length>=1) {
        isChange=true
    }else if (data.length<1) {
        isChange=false
    }
    return isChange;
}
service.deleteBadSeats= async (dataId,theatersSeatsId) => {
    const isDelete = await badSeatsDao.deleteBadSeat(dataId,theatersSeatsId);  
    return isDelete;
}
module.exports = service;