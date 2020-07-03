const adminsDao = require("../dao/admins");
const service = {}
service.find = async ({ page, limit, condition  }) => {
    const data = await adminsDao.findadmins({ page, limit, condition  });
    // return{
    //     "code":res.status,//解析接口状态
    //     "msg":res.massage,//解析提示文本
    //     "count":res.total,//解析数据长度
    //     "data":res.students//解析数据列表
    // };
    data.total = Math.ceil(data.count / limit);
    data.message = "数据请求失败";
    data.status = 0;
    return data;
}
service.deleteAdmin = async ({ _id }) => {
    const { deletedCount } = await adminsDao.deleteOneAdmin({ _id });
    let isDelete = deletedCount >= 1 ? true : false;
    return { isDelete };
}
service.updateAdmin = async ({_id,adminName,adminPassword,headPic }) => {
    const { nModified } = await adminsDao.updateOneAdmin({_id,adminName,adminPassword,headPic });
    let isUpdate = nModified >= 1 ? true : false;
    return { isUpdate };
}
service.addAdmin = async ({ adminName,adminPassword,headPic }) => {
    const data = await adminsDao.createAdmin({ adminName,adminPassword,headPic });
    let isAdd = data ? true : false;
    return { isAdd };
}
module.exports = service;