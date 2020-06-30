<<<<<<< HEAD
// const mongoose  = require("mongoose");
// //下面是生产model的代码：（借助于schema）
// const usersSchema = mongoose.Schema({
//     username: String,
//     password: String
//   }, { versionKey: false });
// const usersModel = mongoose.model('users', usersSchema);
//   //"users"必须与数据库集合名称一致

  
// module.exports = usersModel;
=======
const mongoose = require("mongoose");
//下面是生产model的代码：（借助于schema）
const usersSchema = mongoose.Schema({
  id: String,
  userName: String,
  userPassword: String
}, { versionKey: false });
const usersModel = mongoose.model('users', usersSchema);
//"users"必须与数据库集合名称一致


module.exports = usersModel;
>>>>>>> ccc2b440d42137fbff7895207a94c74bade393ec
