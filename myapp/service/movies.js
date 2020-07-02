const moviesDao = require("../dao/movies");

const service = {}
// service.getmovies = async () => {
  
//     const data = await moviesDao.findmovies();
//     data.message = "数据返回失败";
//     data.status = 0;
//     return data;
// }
service.find = async ({page,limit,condition}) => {
    const data = await moviesDao.findmovies({page,limit,condition});
    data.total = Math.ceil(data.count/limit);
    data.message = "数据成功返回";
    data.status = 0;
    // console.log(data);
    
    return { data };
}
service.deleteMovies = async ({_id}) => {
    const {deletedCount} = await moviesDao.deleteOneMovies({_id});
    let isDelete = deletedCount>=1?true:false;
    return { isDelete };
}
service.updateMovies = async ({_id,cname,area,ename,type,poster,time,update,score,count,intro,isClassic,director,actor,images}) => {
    const {nModified} = await moviesDao.updateOneMovies({_id,cname,area,ename,type,poster,time,update,score,count,intro,isClassic,director,actor,images});
    let isUpdate = nModified>=1?true:false;
    return { isUpdate };
}
service.addMovies = async ({cname,area,ename,type,poster,time,update,score,count,intro,isClassic,director,actor,images}) => {
    const data = await moviesDao.createMovies({cname,area,ename,type,poster,time,update,score,count,intro,isClassic,director,actor,images});
    let isAdd = data?true:false;
    return { isAdd };
}


module.exports = service;