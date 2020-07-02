const mongoose  = require("mongoose");
//下面是生产model的代码：（借助于schema）
const theatersSchema = mongoose.Schema({
    id:String,
    name: String,
    status:Boolean,
<<<<<<< HEAD
    // cinemasId:String,
    cinemasId: {type:mongoose.Schema.Types.ObjectId,ref:"cinemasModel"}
  }, { versionKey: false });
const theatersModel = mongoose.model('theaters', theatersSchema);
  //"users"必须与数据库集合名称一致
  
module.exports = theatersModel;
=======
    cinemasId:String,
    // cinemasId: {type:mongoose.Schema.Types.ObjectId,ref:"cinemas"},
  }, { versionKey: false });
mongoose.model('theatersModel',theatersSchema,'theaters');
  //"users"必须与数据库集合名称一致
  
module.exports = mongoose.model('theatersModel');
>>>>>>> 59d6d57fab16c3402d4cdb99906c94eb0307d6dd
