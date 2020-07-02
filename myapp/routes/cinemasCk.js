var express = require('express');
var router = express.Router();
const cinemasService = require("../service/cinemasCk");
router.get('/', async function(req, res, next) {
  console.log(11111,"router");
  
    const data = await cinemasService.getCinemas();
    res.send(data);
  });
  module.exports = router;