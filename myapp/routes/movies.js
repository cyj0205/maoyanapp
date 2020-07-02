var express = require('express');
var router = express.Router();
const moviesService = require("../service/movies");

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let {page,limit,condition} = req.query;
  page = ~~page;
  limit = ~~limit;
  if(typeof condition === "string"){
condition = JSON.parse(condition);
  }
const {data} = await moviesService.find({page,limit,condition});
  // const data = await moviesService.getmovies();
  // res.header({
  //   "Access-Control-Allow-Origin":"*"
  // });
  console.log(data);
  
  res.send(data);
  // res.send(`${callback}(${JSON.stringify(data)})`);
});
router.delete('/:_id', async function(req, res, next) {
  const {_id} = req.params;
  const data = await moviesService.deleteMovies({_id});
  res.send(data);
});
router.put('/:_id', async function(req, res, next) {
  // console.log("1111");
  
  const {_id,cname,area,ename,type,poster,time,update,score,count,intro,isClassic,director,actor,images} = req.body;
  const data = await moviesService.updateMovies({_id,cname,area,ename,type,poster,time,update,score,count,intro,isClassic,director,actor,images});
  res.send(data);
});
router.post('/', async function(req, res, next) {
  const {cname,area,ename,type,poster,time,update,score,count,intro,isClassic,director,actor,images} = req.body;
  console.log(cname,area,ename,type,poster,time,update,score,count,intro,isClassic,director,actor,images,"add");
  
  const data = await moviesService.addMovies({cname,area,ename,type,poster,time,update,score,count,intro,isClassic,director,actor,images});
  res.send(data);
});


module.exports = router;