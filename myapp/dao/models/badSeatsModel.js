const mongoose  = require("mongoose");

//下面是生产model的代码：（借助于schema）
const badSeatsSchema = mongoose.Schema({
    dataId:String,
    theaterId:String
  }, { versionKey: false });
const badSeatsModel = mongoose.model('badseats', badSeatsSchema);
  //"users"必须与数据库集合名称一致
module.exports = badSeatsModel;