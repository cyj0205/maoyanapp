//排片
const mongoose  = require("mongoose");
//下面是生产model的代码：（借助于schema）
const schedulesSchema = mongoose.Schema({
    username: String,
    password: String
  }, { versionKey: false });
const schedulesModel = mongoose.model('schedules', schedulesSchema);
  //"users"必须与数据库集合名称一致

  
module.exports = schedulesModel;