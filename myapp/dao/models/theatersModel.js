const mongoose  = require("mongoose");
//下面是生产model的代码：（借助于schema）
const theatersSchema = mongoose.Schema({
    id:String,
    name: String,
    status:Boolean,
    cinemasId:String,
    // cinemasId: {type:mongoose.Schema.Types.ObjectId,ref:"cinemas"},
  }, { versionKey: false });
mongoose.model('theatersModel',theatersSchema,'theaters');
  //"users"必须与数据库集合名称一致
  
module.exports = mongoose.model('theatersModel');