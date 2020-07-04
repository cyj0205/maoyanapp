const seatsDao = require("../dao/seats");
const service = {}
//获取数据库数据>>>>=============================================================
service.getSeats = async (_id) => {
    const data = await seatsDao.findSeats(_id);
    return data;
}
//更新数据库数据>>>>============================================================================
service.updateSeats = async ({row,col,theaterId}) => {
    const {nModified} = await seatsDao.updateOneSeats({row,col,theaterId});
    let isUpdate = nModified>=1?true:false;
    return { isUpdate };
}

module.exports = service;