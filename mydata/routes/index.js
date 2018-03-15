var express = require('express');
var router = express.Router();
var user = require('../module/user')
/* GET home page. */
router.get('/', function(req, res, next) {
	//检查是否注册
	var result={
			status:1,
			msg:"注册成功"
	};
	var tel = req.query.tel
	user.find({tel:tel},function(err,doc){
		if(!err && doc.length > 0) {
			result.status =0;
			result.msg = "手机号码已经注册，请登录";
			res.send(result);
			return;
		}
		//执行注册功能
		var u = new user();
		u.tel = req.query.tel;
		u.pwd = req.query.pwd;
		u.save(function(err){
			if(err){
				console.log(err);
			}else{
				console.log("注册成功")
			}
		})
		res.send(result)
	})

});

router.get('/login',function(req,res,next){
	var tel = req.query.tel;
	var pwd = req.query.pwd;
	var result = {
		status:1,
		msg:"登录成功！"
	};
	user.find({tel:tel,pwd:pwd},function(err,doc){
		if(err || doc.length == 0){
			result.status = 0;
			result.msg="用户名或密码错误"
		}
		res.send(result)
	})
})
module.exports = router;
