const cinemasDao = require("../dao/cinemas");

const service = {}
//渲染
service.getCinemas = async ({page,limit,condition}) => {
    const data = await cinemasDao.findcinemas({page,limit,condition});
    data.total = Math.ceil(data.count/limit); //{count，total,rows}
    data.message = "数据请求失败";
    data.status = 0;
    return data;
}

//修改
service.updateCinemas = async ({_id,name,address,phone,status}) => {
    const {nModified} = await cinemasDao.updateOneCinemas({_id,name,address,phone,status});
    let isUpdate = nModified>=1?true:false;
    return { isUpdate };
}

//新加
service.addCinemas = async ({name,address,phone,status}) => {
    const data = await cinemasDao.createCinemas({name,address,phone,status});
    let isAdd = data?true:false;
    return { isAdd };
}

//删除
service.deleteCinemas = async ({_id}) => {
    const {deletedCount} = await cinemasDao.deleteOneCinemas({_id});
    let isDelete = deletedCount>=1?true:false;
    return { isDelete };
}

module.exports = service;