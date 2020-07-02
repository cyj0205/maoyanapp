var express = require('express');
var router = express.Router();
const badSeatsService = require("../service/badSeats");

router.get('/:theatersSeatsId', async function(req, res, next) {
    let {theatersSeatsId} = req.params;
    console.log(theatersSeatsId);
    const data = await badSeatsService.getBadSeats(theatersSeatsId);
    res.send(data);
  });
router.post('/', async function(req, res, next) {
    let {dataId,theatersSeatsId} = req.body;
    const isChange = await badSeatsService.addBadSeats({dataId,theatersSeatsId});
    res.send(isChange);
  });


router.delete('/:dataId', async function(req, res, next) {
    let {dataId} = req.params;
    let {theatersSeatsId} = req.body; 
    const isDelete = await badSeatsService.deleteBadSeats(dataId,theatersSeatsId);
    res.send(isDelete);
  });
  module.exports = router;