const cinemasModel = require("./models/cinemasModel");
const dao = {};

//查询影院
dao.findcinemas = async ()=>{
 
    const rows = await cinemasModel.find();
    console.log("查询影院",rows);
    
    return {rows}
}


module.exports = dao;