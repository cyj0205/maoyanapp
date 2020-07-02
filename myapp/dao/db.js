//连接数据库
const mongoose = require('mongoose');
<<<<<<< HEAD
=======
require('./models/cinemasModel')
require('./models/schedulesModel')
>>>>>>> 3d9c2cb2bf53c440b14f535e099e05d49c78163b
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
