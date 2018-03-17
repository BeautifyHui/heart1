<template>
	<div class="all">
	<div class="top">
		<a href="./HelloWorld">
			<i class="iconfont icon-error"></i>
		</a>
		<div class="box">
			<i class="iconfont icon-49"></i>
			<input type="text" />
		</div>
		<i class="iconfont icon-home"></i>
	</div>
	<div class="t2">
		<select name="">
			<option value="">默认</option>
			<option value="">最新</option>
			<option value="">人气</option>
			<option value="">价格从高到低</option>
			<option value="">价格从低到高</option>
		</select>
		<select name="">
			<option value="">品牌</option>
			<option value="">最新</option>
			<option value="">人气</option>
			<option value="">价格从高到低</option>
			<option value="">价格从低到高</option>
		</select>
		<select name="">
			<option value="">分类</option>
			<option value="">最新</option>
			<option value="">人气</option>
			<option value="">价格从高到低</option>
			<option value="">价格从低到高</option>
		</select>
		<select name="">
			<option value="">筛选</option>
			<option value="">最新</option>
			<option value="">人气</option>
			<option value="">价格从高到低</option>
			<option value="">价格从低到高</option>
		</select>
	</div>
	<div class="min">
		<span class="member" v-for="good in arr" @click="jump(good.goodsId)">
			<img :src=good.goodsThumb alt="" />
			<p>{{good.goodsName}}</p>
			<p>￥{{good.salePrice}}</p>
			<span class="s">实名认证</span>
		</span>
		
	</div>
	</div>
</template>
<script>
import axios from'axios'
export default({
	name:"all",
	data(){
		return {
			arr:[]	
		}
	},
	mounted(){
		axios.get('/index/v2?pageIndex=1&typeId=1')
		.then((response)=>{
    	this.arr = JSON.parse(response.request.response).data.goodsList
 	 })
	},
	methods:{
		jump:function(num){
			location.href="http://localhost:8080/#/xiangqing?id="+num
		}
	}
})


</script>
<style src='./../../static/common.css'></style>
<style src='./../../static/font/iconfont.css'></style>
<style scoped>
.all{
	width:100%;height:100%;display:flex;flex-direction: column;
}
.top,.t2{
	height:4.2rem;width:100%;display:flex;justify-content: space-around;align-items: center;border-bottom: 1px solid #c1c1c1;font-size: 1.5rem;
}
.box{
	width:22rem;height:2.5rem;line-height:2.5rem;background:#e6e6e8;border-radius: 1.67rem;padding-left:0.65rem;
}
.box input{
	background:none;border:none;outline: none;
}
.top>i{
	font-size:1.8rem
}
.t2 select{
	width:25%;border:none;border-right: 1px solid #C1C1C1;height:4.2rem;background:none;text-align: center;outline: none;
}
.min{
	display:flex;flex:1;flex-wrap: wrap;width:100%;justify-content: space-around;overflow:scroll
}
.min .member{
	width:43%;height:22.91rem;margin-top:1rem;display:flex;flex-direction: column;
}
.min img{
	width:100%
}
.min p:nth-of-type(1){
	line-height: 1.5rem;font-size: 0.75rem;
}
.min p:nth-of-type(2){
	font-size: 1.4rem;line-height: 2.75rem;
}
.s{
	background:#ffc343;color:#fff;line-height:1.25rem;font-size: 0.9rem;border-radius: 0.33rem;padding:0 0.4rem;width:4.6rem
}
</style>