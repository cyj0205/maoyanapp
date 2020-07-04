const mongoose = require("mongoose");
//下面是生产model的代码：（借助于schema）
const usersSchema = mongoose.Schema({
  userName: String,
  userPassword: String
}, { versionKey: false });

mongoose.model('usersModel',usersSchema,'users');
//"users"必须与数据库集合名称一致
module.exports =mongoose.model('usersModel');

