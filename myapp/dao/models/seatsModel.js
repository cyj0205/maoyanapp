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
<<<<<<< HEAD
const seatsModel = mongoose.model('seats', seatsSchema);
  //"users"必须与数据库集合名称一致
module.exports = seatsModel;
=======
 mongoose.model('seatsModel',seatsSchema,'seats');
  //"users"必须与数据库集合名称一致
module.exports = mongoose.model('seatsModel');
>>>>>>> 3d9c2cb2bf53c440b14f535e099e05d49c78163b
