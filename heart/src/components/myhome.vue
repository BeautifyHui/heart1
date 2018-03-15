<template>
	<div class="myhome">
		<div class="min">
			<div class="m1">
				<h1>name</h1>
				<p>编辑资料</p>
				<img src="./../../static/img/1a.jpg" alt="" />
			</div>
			<div class="m2">
				<img src="./../../static/img/my1.jpg" alt="" />
			</div>
			<div class="m3">
				
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
			foot
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
	font-size:1.7rem;width:50%;margin-left: 2.2rem;color:#fff;
}
.m1 img{
	width:6.5rem;height:6.5rem;border-radius: 50%;position: absolute;right:3rem;top:4rem
}
.min .m2{
	height:6.5rem;margin-bottom: 1rem;background:#fff;
}
.min .m3{
	height:8rem;background:#fff;
}
.min .m4{
	height:15rem;margin-top:1rem;background:#fff;
}

</style>