const schedulesDao = require("../dao/schedules");

const service = {};
service.renderschedules = async({page,limit})=>{
    const data = await schedulesDao.findschedules({page,limit});
    return data;
}







module.exports = service;