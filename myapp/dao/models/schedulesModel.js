//排片
const mongoose = require("mongoose");
require("./cinemasModel");
require("./moviesModel");
require("./theatersModel")
//下面是生产model的代码：（借助于schema）
const schedulesSchema = mongoose.Schema({
  id: String, //    
  movieId: {type:mongoose.Schema.Types.ObjectId,ref:"moviesModel"}, // 电影id
  cinemasId : {type:mongoose.Schema.Types.ObjectId,ref:"cinemasModel"},//关联影院id
  theaterId: {type:mongoose.Schema.Types.ObjectId,ref:"theatersModel"}, // 放映厅id
  showTime: String, // 
  price: Number, // 
}, { versionKey: false });
mongoose.model('schedulesModel', schedulesSchema,'schedules');
//"users"必须与数据库集合名称一致
module.exports =  mongoose.model('schedulesModel');