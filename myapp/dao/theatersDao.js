const  theatersModel = require("./models/theatersModel");
// require("./models/cinemasModel");
const cinemasModel = require("./models/cinemasModel");
const dao = {};
//查询
dao.findtheaters = async ({ page, limit, condition })=>{
    // let i = await theatersModel.find(data);
    // console.log(222);
    // return i;
    if (condition) {
        for (const key in condition) {
            if (condition.hasOwnProperty(key)) {
                const element = condition[key];
                condition[key] = new RegExp(element);
            }
        }
    }
    const count = await theatersModel.countDocuments();
    const students = await theatersModel
        .find(condition ? condition : {})
        .populate("cinemasId")//关联数据库找数据
        .skip((page - 1) * limit)
        .limit(limit);
    // console.log(students);
    // students.forEach(stu=>{
    //     stu.name = stu.name+"#"
    // });
    console.log(students,"查询放映厅");

    return {
        count,
        rows: students
    }
}

//查询影院
dao.findcinemas = async ()=>{
 
    const rows = await cinemasModel.find();
    console.log("查询影院",rows);
    
    return {rows}
}
//新增
dao.addtheaters = async function ({name,status,cinemasId}) {
    let  a =await theatersModel.create({name:name,status:status,cinemasId:cinemasId});
     console.log(333,a);
     
    return a
}


//删除放映厅
dao.deletetheaters = async function ({_id}) {
    //    console.log(data);
    console.log("删除");

  
    return await theatersModel.deleteOne({_id});
    
}
//修改放映厅
dao.updatetheaters = async function ({_id,name,status,cinemasId}) {
      console.log("修改");
      
    return await theatersModel.updateOne({ _id }, { $set: {name,status,cinemasId} });
}

module.exports = dao;