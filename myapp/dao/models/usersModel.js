const mongoose = require("mongoose");
//下面是生产model的代码：（借助于schema）
const usersSchema = mongoose.Schema({
  userName: String,
  userPassword: String
}, { versionKey: false });
const usersModel = mongoose.model('user', usersSchema);
//"users"必须与数据库集合名称一致
<<<<<<< HEAD
module.exports = usersModel;
=======

module.exports = usersModel;
>>>>>>> 1bc0d791fe28a596ebfd8ce87c4debf5f874daee
