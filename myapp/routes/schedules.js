var express = require("express");
var router = express.Router();

const schedulesService = require("../service/schedules");

router.get('/',async function(req,res,next){
    let {page,limit} = req.query;
    // limit = ~~limit;
    // page = ~~page;
    const data = await schedulesService.renderschedules({page,limit});
    res.send(data);
})

module.exports = router;