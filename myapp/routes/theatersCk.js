var express = require('express');
var router = express.Router();
const theatersService = require("../service/theatersCk");

router.get('/:_id', async function(req, res, next) {
    let id = req.params;
    // console.log(id);
    
    const data = await theatersService.getTheaters(id);
    res.send(data);
  });
  module.exports = router;