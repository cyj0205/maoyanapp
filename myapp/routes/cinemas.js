const express = require('express');
const router = express.Router();

const cinemasService = require("../service/cinemas");


/* GET users listing. */
//渲染
router.get('/', async function (req, res, next) {
  let {page,limit,condition} = req.query;
  page = ~~page;
  limit = ~~limit;
  if(typeof condition === "string"){
    condition = JSON.parse(condition);
  }
  const data = await cinemasService.getCinemas({page,limit,condition});
  res.send(data);
});

//修改
router.put('/:_id', async function(req, res, next) {
  // const _id=req.params;
  const {_id,name,address,phone,status} = req.body;
  console.log(_id,name,address,phone,status);
  
  const data = await cinemasService.updateCinemas({_id,name,address,phone,status});
  res.send(data);
});

//新加
router.post('/', async function(req, res, next) {
  const {name,address,phone,status} = req.body;
  const data = await cinemasService.addCinemas({name,address,phone,status});

  res.send(data);
});

//删除
router.delete('/:_id', async function(req, res, next) {
  const {_id} = req.params;
  const data = await cinemasService.deleteCinemas({_id});
  res.send(data);
});



module.exports = router;