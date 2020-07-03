var express = require('express');
var router = express.Router();
const adminsService = require("../service/admins");


router.get('/', async function (req, res, next) {
  let { page, limit, condition  } = req.query;
  page = ~~page;
  limit = ~~limit;
  if(typeof condition === "string" ){
    condition = JSON.parse(condition);
  }
  const data = await adminsService.find({ page, limit ,condition});
  res.send(data);
});
router.delete('/:_id', async function (req, res, next) {
  const { _id } = req.params;
  const data = await adminsService.deleteAdmin({ _id });
  res.send(data);
});
router.put('/:_id', async function (req, res, next) {
  const { _id, adminName, adminPassword, headPic } = req.body;
  const data = await adminsService.updateAdmin({ _id, adminName, adminPassword, headPic });
  res.send(data);
});
router.post('/', async function (req, res, next) {
  const { adminName, adminPassword, headPic } = req.body;
  const data = await adminsService.addAdmin({ adminName, adminPassword, headPic });
  res.send(data);
});


module.exports = router;