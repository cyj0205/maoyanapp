const  theatersModel = require("./models/theatersModel");

const dao = {}
dao.findTheaters = async (id)=>{
    const data = await theatersModel.find({cinemasId:id}); 
    // console.log(data);
    
    return data;
}
module.exports = dao;