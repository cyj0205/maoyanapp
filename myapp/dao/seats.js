const  seatsModel = require("./models/seatsModel");
const dao = {}
//获取数据>>>>=====================================================================
dao.findSeats = async (_id)=>{
    const data = await seatsModel.find({theaterId:_id}); 
    return data;
}
//更新数据>>>>=================================================================
dao.updateOneSeats = async ({row,col,theaterId})=>{
    return await seatsModel.updateOne({theaterId},{$set:{row,col}});
}
module.exports = dao;