const express = require('express');
var path = require("path");
const rp = require("request-promise");
const {targetUrl} = require("../util/baseConfig");
const router = express.Router();
var multer = require('multer');
var fs = require('fs');
var { rootPath } = require("../util/baseInfo");
var upload = multer({
  dest: path.join(rootPath, "/public/images/upload")
});
router.post('/upload', upload.single("file"), async function (req, res, next) {
  //其中'file'是文件上传的key
  const originalname = req.file.path;
  const newname = originalname + path.extname(req.file.originalname);
  fs.rename(originalname, newname, error => {
    if (error) throw error;
    const responsename = newname.replace(rootPath + `${path.sep}public${path.sep}`, "");//
    res.send({
      "code": 0
      , "msg": ""
      , "data": {
        responsename
      }
    });
  })
});
// 文件删除接口
router.post('/deletePic', async function (req, res, next) {//** 
  const { file } = req.body;
  fs.unlink(path.join(rootPath, "public", file), function (err) {
    if (err) res.send(false);
    else res.send(true);
  })
});

module.exports = router;