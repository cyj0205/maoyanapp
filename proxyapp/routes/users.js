const express = require('express');
const router = express.Router();
const rp = require("request-promise");
const jwt = require('jsonwebtoken');
const {secretKey,md5} = require("../util/salt");
const {targetUrl} = require("../util/baseConfig");


/* GET users listing. */
router.post('/login', async function (req, res, next) {
  let {userName, userPassword } = req.body;
  userPassword = md5(userPassword);
  const options = {
    method: 'POST',
    uri: targetUrl+ '/users/login',
    body: {userName, userPassword },
    json: true // Automatically stringifies the body to JSON
  };
  const { isLogin } = await rp(options);
  const responseData = { isLogin };
  if (isLogin) {
    const token = jwt.sign({userName }, secretKey, {
      expiresIn: 60 * 60*60
    });
    responseData.token = token;
  }
  res.send(responseData);
});
router.post('/reg', async function (req, res, next) {
  let {userName, userPassword } = req.body;
  userPassword = md5(userPassword);
  var options = {
    method: 'POST',
    uri: targetUrl+ '/users/reg',
    body: {userName, userPassword },
    json: true // Automatically stringifies the body to JSON
  };
  const parsedBody = await rp(options);
  res.send(parsedBody);
});

module.exports = router;
