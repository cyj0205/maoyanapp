const mongoose  = require("mongoose");
<<<<<<< HEAD

=======
>>>>>>> 3d9c2cb2bf53c440b14f535e099e05d49c78163b
//下面是生产model的代码：（借助于schema）
const badSeatsSchema = mongoose.Schema({
    dataId:String,
    theaterId:String
  }, { versionKey: false });
<<<<<<< HEAD
const badSeatsModel = mongoose.model('badseats', badSeatsSchema);
  //"users"必须与数据库集合名称一致
module.exports = badSeatsModel;
=======
 mongoose.model('badSeatsModel', badSeatsSchema,'badseats');
  //"users"必须与数据库集合名称一致
module.exports = mongoose.model('badSeatsModel');
>>>>>>> 3d9c2cb2bf53c440b14f535e099e05d49c78163b
