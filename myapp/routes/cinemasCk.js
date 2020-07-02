var express = require('express');
var router = express.Router();
const cinemasService = require("../service/cinemasCk");

router.get('/:_id', async function(req, res, next) {
    const data = await cinemasService.getCinemas();
    res.send(data);
  });
  module.exports = router;