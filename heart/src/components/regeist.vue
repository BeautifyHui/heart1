<template>
	<div class="regeist">
		<div class="top">
			<a href="javascript:history.go(-1)">
				<i class="iconfont icon-error"></i>
			</a>
			<p>注册</p>
		</div>
		<div class="con">
			<p id="worn"></p>
			<input type="number" placeholder="输入手机号" id="tel"/>
			<div class="check">
				<input type="password" placeholder="请输入密码" id="pwd"/>
				<!--<span>密码</span>-->
			</div>
			<div class="chose">
				<input type="checkbox" checked="checked"/>我已经阅读并同意
				<span>&nbsp;&nbsp;用户注册协议</span>
 			</div>
			<button @click="cl">注册</button>
			<router-link to="#">
				<img src="./../../static/img/contact.png" alt="" />
			</router-link>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
	export default({
		name:"regeist",
		components:{

		},
		methods:{
			cl:function(){
				var tel = document.getElementById("tel").value;
				var pwd = document.getElementById("pwd").value;
				if(tel){
					if(pwd){
						
						axios.get('/api', {
   					 		params: {
      							tel: tel,
      							pwd:pwd
    						}
						})
						.then(function (response) {
							if(response.data.status == 1){
    							alert(response.data.msg);
    							window.location.href = "http://localhost:8080/#/login"
							}else{
								alert(response.data.msg);
    							window.location.href = "http://localhost:8080/#/login"
							}
						})
						.catch(function (error) {
    						alert("对不起，数据库开小差了，注册失败")
						});
  						
					}else{
						document.getElementById("worn").innerHTML = "<i class='iconfont icon-jian'></i>请输入密码"
					}
				}else{
					document.getElementById("worn").innerHTML = "<i class='iconfont icon-jian'></i>亲，请填写手机号码"
				}
			}
		}
		
	})
</script>
<style src='./../../static/font/iconfont.css'></style>
<style src='./../../static/common.css'></style>
<style scoped>
.regeist{
	width:100%;height:100%;display: flex;flex-direction: column;
}
.top{
	display:flex;width:100%;height:4.2rem;border-bottom: 1px solid #c1c1c1;line-height: 4.2rem;font-size:1.2rem;padding-left:1rem;
}
.top p{
	width:90%;text-align: center;font-size:1.7rem;
}	
.con{
	flex:1;display:flex;flex-direction: column;align-items: center;
}
#worn{
	width:70%;text-align: center;height:4.16rem;line-height: 4rem;color:red
}
.con>input:nth-of-type(1),input:nth-of-type(2),.check{
	width:75%;height:3.4rem;line-height: 3.4rem;padding-left:1.3rem;border:1px solid #cfcfcf;font-size: 1.25rem;margin-bottom: 0.83rem;outline:none;color:#565656
}
.check>input{
	border:none;outline:none;background: none;width:70%;
}
.check>span{
	background: #999;border-radius: 1rem;font-size:1rem;color:#fff;line-height:2.4rem;width:30%;padding:0.5rem 0.6rem;
}
.chose{
	display:flex;align-items:center;height:1rem;text-align: left;width:75%;font-size:0.83rem;
}
.chose span{
	color:red
}
button{
	width:65%;height:3rem;background:#fc655e;color:#fff;border: none;border-radius: 2rem;margin:4rem 0 2rem
}
img{
	width:20rem;height:7.6rem
}
</style>