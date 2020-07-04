const usersModel = require("./models/usersModel");
const dao = {}
dao.findUser = async (condition)=>{
    console.log(await usersModel.find(condition),"con");
    
    return await usersModel.find(condition);
}

dao.createUser = async ({ userName,userPassword })=>{
    return await usersModel.create({  userName,userPassword });
}



//增删查改
dao.findusers = async ({page,limit, condition })=>{
    if (condition) {
        for (const key in condition) {
            if (condition.hasOwnProperty(key)) {
                const element = condition[key];
                condition[key] = new RegExp(element);
            }
        }
    }
    const count = await usersModel.countDocuments();
    const users =  await usersModel.find(condition ? condition : {}).populate("users.name").skip((page-1)*limit).limit(limit);
    return {
        count,
        rows:users
    }
}
dao.deleteOneUser = async ({_id})=>{
    return await usersModel.deleteOne({_id});
}
dao.updateOneUser = async ({_id,userName,userPassword,headPic})=>{
    return await usersModel.updateOne({_id},{$set:{userName,userPassword,headPic}});
}
dao.createUser = async ({userName,userPassword,headPic})=>{
    return await usersModel.create({userName,userPassword,headPic});
}
module.exports = dao;