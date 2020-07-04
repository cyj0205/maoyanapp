const theatersDao = require("../dao/theatersDao");

const service = {}
//查询
service.gettheaters = async ({ page, limit, condition }) => {
    // return await (theatersDao.findtheaters(data))
    const data = await theatersDao.findtheaters({ page, limit, condition });
    //  return {
    //         "code": res.status, //解析接口状态
    //         "msg": res.message, //解析提示文本
    //         "count": res.total, //解析数据长度
    //         "data": res.rows //解析数据列表
    //       };
    data.total = Math.ceil(data.count / limit);//{count,total,rows}
    data.message = "数据请求成功";//{count,total,rows}
    data.status = 0;//{count,total,rows}
    return data;
}

//查询影院名字
service.getcinemas = async () => {
    const data = await theatersDao.findcinemas();
    return data;
}

//新增
service.addtheater = async (data) => {
    let isExist = await theatersDao.addtheaters(data);
    // if (isExist.length < 1) {
    //     return null;
    // } else {
    return isExist;
    // }
}

//删除
service.deletetheater = async function ({_id}) {
    // return await theatersDao.deletetheaters({ _id});

    const {deletedCount} = await theatersDao.deletetheaters({_id});
    let isDelete = deletedCount>=1?true:false;
    return { isDelete };
}

//修改放映厅
service.updatetheater = async function ({_id,name,status,cinemasId}) {
   const {nModified} =  await theatersDao.updatetheaters({_id,name,status,cinemasId});
    let isUpdate = nModified>=1?true:false;
    return { isUpdate };
}
module.exports = service;