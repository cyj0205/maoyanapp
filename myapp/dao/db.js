//连接数据库
const mongoose = require('mongoose');
<<<<<<< HEAD

require('./models/cinemasModel')
require('./models/schedulesModel')
require('./models/moviesModel')
// require('./models/cinemasModel')
// require('./models/schedulesModel')
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
require('./models/cinemasModel')
require('./models/schedulesModel')
>>>>>>> 3d9c2cb2bf53c440b14f535e099e05d49c78163b
>>>>>>> 40b14582022bfa0bfbe300fd1a47676f90df4757
>>>>>>> 59d6d57fab16c3402d4cdb99906c94eb0307d6dd
>>>>>>> 57a6baf23a07d4691d65f10435f87658596df05a
const dbname = "maoyan";
mongoose.connect(
  'mongodb://localhost/' + dbname,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
<<<<<<< HEAD
  // we're connected!
  console.log("欢迎进入 " + dbname);
=======
  console.log("we're connected to " + dbname);
>>>>>>> 59d6d57fab16c3402d4cdb99906c94eb0307d6dd
});
