const express = require('express');
const router = express.Router();
const cinemasServer = require("../service/Getcinema");

//获取影院
router.get('/', async function (req, res, next) {
    const data = await cinemasServer.getcinemas();
    res.send(data);
});


module.exports =router;