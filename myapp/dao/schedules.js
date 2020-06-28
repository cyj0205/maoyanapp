const schedulesModel = require("../dao/models/schedulesModel");

const dao = {};

dao.findschedules = async ({ page, limit }) => {
    // const count = await schedulesModel.countDocuments;
    const rows = await schedulesModel.find();
    return rows
    // count,


}





module.exports = dao;