const  cinemasModel = require("./models/cinemasModel");

// console.log(cinemasModel.find,'aa');

const dao = {}

//查找渲染
dao.findcinemas = async ({page,limit,condition})=>{
     if (condition) {
        for (const key in condition) {
            if (condition.hasOwnProperty(key)) {
                const element = condition[key];
                condition[key] = new RegExp(element);
            }
        }
    }
    const count = await cinemasModel.countDocuments();
    // console.log(condition,'qqq')
    const cinemas = await cinemasModel
        .find(condition ? condition : {})
        // .populate("cinemas.address","cinemas.name")//这里使用，其中参数代表了哪一个字段是外键,数组中的字段名是需要关联过来的字段
        .skip((page - 1) * limit)
        .limit(limit);
    // console.log(cinemas,"cinemas");
    
    return {
        count,
        rows: cinemas
    }
}

//修改
dao.updateOneCinemas = async ({_id,name,address,phone,status})=>{
    return await cinemasModel.updateOne({_id},{$set:{name,address,phone,status}});
}

//新加
dao.createCinemas = async ({name,address,phone,status})=>{
    // console.log('jie')
    // console.log(await cinemasModel.create({name,address,phone,status}));
    
    return await cinemasModel.create({name,address,phone,status});

}

//删除
dao.deleteOneCinemas = async ({_id})=>{
    return await cinemasModel.deleteOne({_id});
}

module.exports = dao;