const express = require('express');
const router = express.Router();
const usersService = require("../service/users");
router.post('/login', async function (req, res, next) {
  const { userName,userPassword  } = req.body;
  const data = await usersService.login({userName,userPassword  });
  res.send(data);
});
router.post('/reg', async function (req, res, next) {
  const {userName,userPassword  } = req.body;
  const data = await usersService.reg({userName,userPassword  });
  res.send(data);
});

//增删查改，页面渲染
router.get('/', async function (req, res, next) {
  let { page, limit,condition } = req.query;
  page = ~~page;
  limit = ~~limit;
  if(typeof condition === "string" ){
    condition = JSON.parse(condition);
  }
  const data = await usersService.find({ page, limit,condition });
  res.send(data);
});
router.delete('/:_id', async function (req, res, next) {
  const { _id } = req.params;
  const data = await usersService.deleteUser({ _id });
  res.send(data);
});
router.put('/:_id', async function (req, res, next) {
  const { _id, userName, userPassword, headPic } = req.body;
  const data = await usersService.updateUser({ _id, userName, userPassword, headPic });
  res.send(data);
});
router.post('/', async function (req, res, next) {
  const { userName, userPassword, headPic } = req.body;
  const data = await usersService.addUser({ userName, userPassword, headPic });
  res.send(data);
});
module.exports = router;