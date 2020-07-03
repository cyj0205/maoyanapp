const mongoose = require("mongoose");
//下面是生产model的代码：（借助于schema）
const cinemasSchema = mongoose.Schema({
    id: String, // mongodb自动生成id
    name: String, //影院名称
    address: String, //影院地址
    phone: String, //影院联系方式
    // status: Boolean //影院是否营业
    status: String //影院是否营业
}, { versionKey: false });

mongoose.model('cinemasModel', cinemasSchema, 'cinemas');
module.exports = mongoose.model('cinemasModel')


