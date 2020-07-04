const schedulesDao = require("../dao/schedules");

const service = {};
service.renderschedules = async ({ limit, page, condition }) => {
    const data = await schedulesDao.findschedules({ limit, page, condition });
    data.total = Math.ceil(data.count / limit);
    data.message = "数据请求失败";
    data.status = 0;
    return data;
}

//搜索
service.searchschedules = async ({ cinemasId, theatersId }) => {
    const data = await schedulesDao.searchchedules({ cinemasId, theatersId });
    data.message = "数据请求失败";
    data.status = 0;
    return { data };
}

//删除
service.deleteschedules = async ({ _id }) => {
    const { deletedCount } = await schedulesDao.deleteschedules({ _id });
    let isDelete = deletedCount >= 1 ? true : false;
    return { isDelete };
}

//新增
service.addschedules = async ({ movieId, cinemasId, theaterId, showTime, price }) => {
    const data = await schedulesDao.createschedules({ movieId, cinemasId, theaterId, showTime, price });
    let isAdd = data ? true : false;
    return { isAdd };
}

//修改
service.updateschedules = async ({ _id, movieId, cinemasId, theaterId, showTime, price }) => {
    const { nModified } = await schedulesDao.updateOneschedules({ _id, movieId, cinemasId, theaterId, showTime, price });
    let isUpdate = nModified >= 1 ? true : false;
    return { isUpdate };
}

module.exports = service;