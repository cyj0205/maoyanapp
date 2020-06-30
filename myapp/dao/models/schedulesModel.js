//排片
const mongoose = require("mongoose");
//下面是生产model的代码：（借助于schema）
const schedulesSchema = mongoose.Schema({
  id: String, //    
  movieId: String, // 
  cinemasId : {type:mongoose.Schema.Types.ObjectId,ref:"cinemas"},//影院id
  theaterId: String, // 
  showTime: String, // 
  price: Number, // 
}, { versionKey: false });
const schedulesModel = mongoose.model('schedules', schedulesSchema);
//"users"必须与数据库集合名称一致


module.exports = schedulesModel;