//连接数据库
const mongoose = require('mongoose');

require('./models/cinemasModel')
require('./models/schedulesModel')
require('./models/moviesModel')
// require('./models/cinemasModel')
// require('./models/schedulesModel')
const dbname = "maoyan";
mongoose.connect(
  'mongodb://localhost/' + dbname,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("we're connected to " + dbname);
});
