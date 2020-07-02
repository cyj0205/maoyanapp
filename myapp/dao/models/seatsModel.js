const mongoose  = require("mongoose");
require("./theatersModel");
//下面是生产model的代码：（借助于schema）
const seatsSchema = mongoose.Schema({
    row:Number,
    col: {type:Number},
    theaterId:String,
    rowMax:String,
    colMax:String,
  }, { versionKey: false });

  //"users"必须与数据库集合名称一致


 mongoose.model('seatsModel',seatsSchema,'seats');
  //"users"必须与数据库集合名称一致
module.exports = mongoose.model('seatsModel');

