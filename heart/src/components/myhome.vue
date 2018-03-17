<template>
	<div class="myhome">
		<div class="min">
			<div class="m1">
				<h1>{{uname}}</h1>
				<p>小女子善解人意，温柔可爱，，，</p>
				<img src="./../../static/img/head.jpg" alt="" />
			</div>
			<div class="m2">
				<img src="./../../static/img/my1.jpg" alt="" />
			</div>
			<div class="m3">
				<router-link to="#">
					<i class="iconfont icon-bags"></i>
					<p>我买到的</p>
				</router-link>
				<router-link to="./Cart">
					<i class="iconfont icon-gouwucheman"></i>
					<p>购物车</p>
				</router-link>
			</div>
			<div class="m4">
				<img src="./../../static/img/my2.jpg" alt="" />
			</div>
			<div class="m5">
				<img src="./../../static/img/my3.jpg" alt="" />
			</div>
		</div>
		<foot></foot>
	</div>
</template>
<script>
import foot from "./foot"
	export default({
		name:"myhome",
		components:{
			foot,
		},
		data(){
			return {
				uname:""	
			}
		},
		mounted(){
			this.uname = sessionStorage.getItem("certificate")
		}
	})
</script>
<style src="./../../static/font/iconfont.css"></style>
<style src="./../../static/common.css"></style>
<style scoped="scoped">
.myhome{
	width:100%;height:100%;display: flex;flex-direction: column;background:#f2f2f2;
}
.min{
	display:flex;flex:1;width:100%;flex-direction: column;
}
.min .m1{
	height:13.7rem;width:100%;background:#000;background: url(./../../static/img/dog.jpg) no-repeat;background-size: 100%;
}
.min .m1 h1{
	margin-top:4rem;margin-left:2.2rem;width:50%;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;font-size:2.5rem;color:#fff;line-height:4.2rem;
}
.min .m1 p{
	font-size:1.7rem;width:50%;margin-left: 2.2rem;color:#fff;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;
}
.m1 img{
	width:6.5rem;height:6.5rem;border-radius: 50%;position: absolute;right:3rem;top:4rem
}
.min .m2{
	height:6.5rem;margin-bottom: 1rem;background:#fff;display:flex;justify-content: center;
}
.min .m3{
	height:8rem;background:#fff;display:flex;align-items: center;
}
.min .m3 a i{
	font-size:3rem
}
.min .m3 a{
	color:#666;width:33%;text-align: center;
}
.min .m3 p{
	font-size:1.3rem;font-weight: 900;color:#333
}
.min .m4{
	height:15rem;margin-top:1rem;background:#fff;display:flex;justify-content: center;
}
.min .m5{
	margin-top:1rem;display:flex;justify-content: center;
}
</style>