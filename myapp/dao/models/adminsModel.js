const mongoose = require("mongoose");
//下面是生产model的代码：（借助于schema）
const adminSchema = mongoose.Schema({
  // id: String,
  adminName: String,
  adminPassword: String
}, { versionKey: false });
mongoose.model('adminModel',adminSchema,'admins');
//"admin"必须与数据库集合名称一致
module.exports = mongoose.model('adminModel');