const mongoose  = require("mongoose");

//下面是生产model的代码：（借助于schema）
const badSeatsSchema = mongoose.Schema({
    dataId:String,
    theaterId:String
  }, { versionKey: false });
mongoose.model('badSeatsModel', badSeatsSchema,'badseats');
  //"users"必须与数据库集合名称一致
module.exports = mongoose.model('badSeatsModel');

