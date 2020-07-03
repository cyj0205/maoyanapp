const usersDao = require("../dao/users");
const service = {}
service.login = async ({ userName,userPassword  }) => {
    const data = await usersDao.findUser({ userName,userPassword  });
    console.log(data,"ll");
    let isLogin = false;
    if (data.length >= 1) {
        isLogin = true;
    }
    return { isLogin };
}
//注册   
service.reg = async ({ userName,userPassword  }) => {
    const resArr = await usersDao.findUser({ userName });
    let isReg = false;
    if (resArr.length < 1) {
        const data = await usersDao.createUser({ userName,userPassword  });
        isReg = true;/*  */
    }
    return { isReg };
}

//增删查改，
service.find = async ({ page, limit, condition }) => {
    const data = await usersDao.findusers({ page, limit, condition });
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
service.deleteUser = async ({ _id }) => {
    const { deletedCount } = await usersDao.deleteOneUser({ _id });
    let isDelete = deletedCount >= 1 ? true : false;
    return { isDelete };
}
service.updateUser = async ({_id,userName,userPassword,headPic }) => {
    const { nModified } = await usersDao.updateOneUser({_id,userName,userPassword,headPic });
    let isUpdate = nModified >= 1 ? true : false;
    return { isUpdate };
}
service.addUser = async ({ userName,userPassword,headPic }) => {
    const data = await usersDao.createUser({ userName,userPassword,headPic });
    let isAdd = data ? true : false;
    return { isAdd };
}
module.exports = service;