var express = require('express');
var router = express.Router();
const seatsService = require("../service/seats");
//获取数据库数据>>>>========================================================================================
router.get('/:_id', async function(req, res, next) {
  let {_id} = req.params;
  const data = await seatsService.getSeats(_id);
  res.send(data);
});
//更新数据库数据>>>>=======================================================================================
router.put('/', async function(req, res, next) {
  const {row,col,theaterId} = req.body;
  const data = await seatsService.updateSeats({row,col,theaterId});
  res.send(data);
});

//暴露>>>>=====================================================================================================
module.exports = router;