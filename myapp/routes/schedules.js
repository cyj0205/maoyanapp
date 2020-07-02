var express = require("express");
var router = express.Router();
const schedulesService = require("../service/schedules");

router.get('/', async function (req, res, next) {
  let { limit, page, condition } = req.query;
  limit = ~~limit;
  page = ~~page;
  if (typeof condition === "string") {
    condition = JSON.parse(condition);
    console.log(condition, "222");
  }
  const data = await schedulesService.renderschedules({ page, limit, condition });
  res.send(data);
})

//搜索
router.get('/searchStudents', async function (req, res, next) {
  const { cinemasId, theatersId } = req.query;
  const { data } = await schedulesService.searchschedules({ cinemasId, theatersId });
  res.send(data);
})


//删除
router.delete("/:_id", async function (req, res, next) {
  const { _id } = req.params;
  const data = await schedulesService.deleteschedules({ _id });
  res.send(data);
})

//新增
router.post('/', async function (req, res, next) {
  const { movieId, cinemasId, theaterId, showTime, price } = req.body;  //
  // console.log(movieId, cinemasId, theaterId, showTime, price);

  const data = await schedulesService.addschedules({ movieId, cinemasId, theaterId, showTime, price });
  res.send(data);
});

//修改
router.put('/:_id', async function (req, res, next) {
  const { _id } = req.params;
  const { movieId, cinemasId, theaterId, showTime, price } = req.body;
  const data = await schedulesService.updateschedules({ _id, movieId, cinemasId, theaterId, showTime, price });
  res.send(data);
});


module.exports = router;