const schedulesModel = require("./models/schedulesModel");

const dao = {};

dao.findschedules = async ({ limit,page,condition }) => {
    if (condition) {
        for (const key in condition) {
            if (condition.hasOwnProperty(key)) {
                const element = condition[key];
                condition[key] = new RegExp(element);
            }
        }
    }
    
    const count = await schedulesModel.countDocuments();
    const students = await schedulesModel
    .find(condition ? condition : {})
    .populate("cinemasId")
    .skip((page-1)*limit)
    .limit(limit);
    
    return {
        count,
        rows:students
    }
    
}

//删除
dao.deleteschedules = async ({_id})=>{
    return await schedulesModel.deleteOne({_id});
}

//新增
dao.createschedules = async ({movieId,cinemasId,theaterId,showTime,price})=>{
    return await schedulesModel.create({movieId,cinemasId,theaterId,showTime,price});
}

//修改
dao.updateOneschedules= async ({_id,movieId,cinemasId,theaterId,showTime,price})=>{
   
    return await schedulesModel.updateOne({_id},{$set:{movieId,cinemasId,theaterId,showTime,price}});
}

module.exports = dao;