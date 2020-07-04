const express = require('express');
const router = express.Router();
const theatersServer = require("../service/theatersService");


/* GET users listing. */
//获取放映厅
router.get('/', async function (req, res, next) {
    let { page, limit, condition } = req.query;
    page = ~~page;
    limit = ~~limit;
    if (typeof condition === "string") {
        condition = JSON.parse(condition);
    }
    res.send(await theatersServer.gettheaters({ page, limit, condition }));
    
});

//获取影院
router.get('/', async function (req, res, next) {
    const data = await theatersServer.getcinemas();
    res.send(data);
});

//添加放映厅
router.post('/', async function (req, res, next) {
    let data = await theatersServer.addtheater(req.body);


    res.send(data);
    console.log("添加功能", data)
});

//删除放映厅
router.delete("/:_id", async function (req, res, next) {
    // console.log("删除1111",req.body);
    // console.log(req.body);

    const { _id } = req.params;
    const data = await theatersServer.deletetheater({ _id });
    res.send(data);
});

//修改放映厅
router.put("/:_id", async function (req, res, next) {
    // console.log("删除1111",req.body);
    const { _id, name, status, cinemasId } = req.body;

    const a = await theatersServer.updatetheater({ _id, name, status, cinemasId });
    console.log(11, a);

    res.send(a);
});





module.exports = router;