const adminsModel = require("./models/adminsModel");
const dao = {}
dao.findadmins= async ({ page, limit, condition }) => {
    if (condition) {
        for (const key in condition) {
            if (condition.hasOwnProperty(key)) {
                const element = condition[key];
                condition[key] = new RegExp(element);
            }
        }
    }
    const count = await adminsModel.countDocuments();
    const admins = await adminsModel
        .find(condition ? condition : {})
        .populate("admins.name")
        .skip((page - 1) * limit)
        .limit(limit);
    return {
        count,
        rows: admins
    }
}
dao.deleteOneAdmin = async ({ _id }) => {
    return await adminsModel.deleteOne({ _id });
}
dao.updateOneAdmin = async ({ _id, adminName, adminPassword, headPic }) => {
    return await adminsModel.updateOne({ _id }, { $set: { adminName, adminPassword, headPic } });
}
dao.createAdmin = async ({ adminName, adminPassword, headPic }) => {
    return await adminsModel.create({ adminName, adminPassword, headPic });
}
module.exports = dao;