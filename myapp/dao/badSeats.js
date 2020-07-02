const  badSeatsModel = require("./models/badSeatsModel");
const dao = {}
dao.findBadSeats = async (theatersSeatsId)=>{
    const data = await badSeatsModel.find({theaterId:theatersSeatsId}); 
    return data;
}
dao.addBadSeat = async ({dataId,theatersSeatsId})=>{
    const data = await badSeatsModel.create({dataId:dataId,theaterId:theatersSeatsId}); 
    return data;
}
dao.deleteBadSeat = async (dataId,theatersSeatsId)=>{
    const data = await badSeatsModel.deleteOne({dataId:dataId,theaterId:theatersSeatsId}); 
    return data;
}
module.exports = dao;