// const express = require('express');
// var path = require("path");
// const router = express.Router();
// var multer = require('multer');
// var {rootPath} = require("../util/baseInfo.js");
// const fs = require("fs");//操做文件
// var upload = multer({dest:path.join(rootPath,"/public/images/upload")});

// router.post('/upload',upload.single("file"), async function (req, res, next) { 
//     //其中'file'是文件上传的key
//   const originalname = req.file.path;//拿到原始名字（路径）
//   const newname = originalname + path.extname(req.file.originalname);//拼接拿到带后缀的名字
//   fs.rename(originalname, newname, error => {//操做文件修改名字
//     if (error) throw error;
//     const responsename = newname.replace(rootPath + `${path.sep}public${path.sep}`, "");//拿到相对路径
//     res.send({
//         "code": 0
//         ,"msg": ""
//         ,"data": {
//             responsename
//         }
//       });
//   })
//   });
// //文件删除
//   router.post('/deletePic', async function (req, res, next) {//** 
//     const { file } = req.body;
//     fs.unlink(path.join(rootPath, "public", file), function (err) {
//       if (err) res.send(false);
//       else res.send(true);
//     })
//   });
  
//   module.exports = router;