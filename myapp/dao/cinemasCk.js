const  cinemasModel = require("./models/cinemasModel");

const dao = {}
dao.findCinemas = async ()=>{
    const data = await cinemasModel.find(); 
    return data;
}
module.exports = dao;