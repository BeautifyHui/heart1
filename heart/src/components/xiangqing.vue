<template>
	<div class="xiangqing">
		<div class="b">
			<div class="big">
				<a href="./#/all"><i class="iconfont icon-error" ></i></a>
				<i class="iconfont icon-home"></i>
				<div class="swip">
					<img :src=rid.goodsThumb alt="" />
				</div>
				<div class="min">
					<h2><span>{{rid.usageStateName}}</span>{{rid.goodsName}}</h2>
					<p>${{rid.salePrice}}</p>
					<span class="say">不议价</span>
					<div class="imgbox">
						<img src="./../../static/img/2b.jpg" alt="" />
						<img src="./../../static/img/3b.jpg" alt="" />
						<img src="./../../static/img/4b.jpg" alt="" />
						<img src="./../../static/img/5b.jpg" alt="" />
					</div>
				</div>
			</div>
			<div class="big1">
				<img src="./../../static/img/0n.jpg" alt="" />
			</div>
			<div class="big2">
			<h2>————商品详情————</h2>
			<h3>品牌：<span>{{rid.brandName}}</span></h3>
			<h3>品类：<span>单肩包</span></h3>
			<h3>尺寸：<span>20cm</span></h3>
			<h3>颜色：<span>如图</span></h3>
			<h3>款式：<span>女士</span></h3>
			<h3>产地：<span>法国</span></h3>
			<h3>成色：<span>{{rid.usageStateName}}</span></h3>
			<h3>商品	ID：<span>{{rid.goodsId}}</span></h3>
			<h4>展开商品图<i class="iconfont icon-moreunfold"></i></h4>
			<img src="./../../static/img/1n.jpg" alt="" />
		</div>
			<div class="big3">
				<h3>————交易流程————</h3>
				<img src="./../../static/img/2n.png" alt="" />
			</div>
			<div class="big4">
				<h3>————猜你喜欢————</h3>
				<div v-for="go in arr">
					<img :src=go.goodsThumb alt="" />
					<p>{{go.goodsName}}</p>
					<p>${{go.salePrice}}</p>
				</div>
			</div>
		</div>
		<div class="bot">
			<span>
				<i class="iconfont icon-duanxin"></i>
				<span>联系卖家</span>
			</span>
			<span>
				<i class="iconfont icon-zan1"></i>
				<span>收藏</span>
			</span>
			<span>
				<i class="iconfont icon-bags"></i>
				<span @click="Cartadd()">加入购物车</span>
			</span>
			<span>
				<button>立即购买</button>
			</span>
		</div>
	</div>
</template>
<script>
import axios from "axios"
export default({
	name:"xiangqing",
	data(){
		return{
			arr:[],
			rid:[],
			list : [],
			num : 1,
			id:parseInt(location.href.split("?")[1].split("=")[1])
		};
	},
	mounted(){
		axios.get('/index/v2?typeId=1000')
		.then((response)=>{
			this.arr = response.data.data.goodsList;
			for(var i = 0,a = this.arr.length; i < a;i++){
				if(this.arr[i].goodsId == this.id){
					this.rid = this.arr[i];
					this.list =(this.arr[i].goodsName + "," +this.arr[i].brandName +"," + this.num+","  + this.arr[i].salePrice)
					localStorage.setItem("shop" , this.list)
					return;
				}
			}
		})
	},
	methods : {
		Cartadd(){
			location.href ="http://localhost:8080/#/Cart?id="+this.id
		}
	}
})
</script>
<style src="./../../static/common.css"></style>
<style src="./../../static/font/iconfont.css"></style>
<style scoped="scoped">
.xiangqing{
	width:100%;height:100%;display:flex;flex-direction: column;background:#f4f4f4;
}
.b{
	flex:1;background:#f4f4f4;overflow: scroll;
}
.big{
	display:flex;flex-direction: column;overflow: scroll;align-items: center;background: #fff;
}
.big .iconfont{
	font-size:3.2rem;line-height: 4.6rem;position: absolute;margin-top:0.85rem;width:4.6rem;z-index: 999;top:0.75rem;background:rgba(200,200,200,0.6);color:#666;border-radius:2.3rem ;height:4.6rem;text-align: center;
}
.icon-error{
	left:1rem
}
.icon-home{
	right:1rem
}
.swip img{
	width:100%
}
.min{
	display:flex;flex-direction: column;width:90%;padding-top:2rem
}
.min h2{
	font-size:1.6rem;line-height:1.7rem;font-weight: 400;
}
.min h2 span{
	font-size: 1.2rem;border:1px solid #000;width:4rem;height:1.7rem;margin-right: 0.6rem;
}
.min p{
	margin-top:2.25rem;color:#fc655e;font-size:3rem;
}
.min .say{
	display:inline-block;line-height: 1.8rem;color:#999;margin-right: 0.8rem;border-radius: 0.2rem;margin-bottom: 3.25rem;border:1px solid #999;font-size: 1.2rem;width:4rem
}
.imgbox{
	border-top:1px solid #ccc;height:9.4rem;width:100%;display: flex;justify-content: space-around;align-items: center;
}
.imgbox img{
	width:17%;
}
.big1 img{
	width:100%;margin:2rem 0;
}
.big2{
	background:#fff;width:100%;display:flex;flex-direction: column;align-items: center;
}
.big2 h2{
	width:100%;text-align: center;color:#666;padding-top:2.5rem;margin-bottom: 3rem;font-size:1.4rem;font-weight: 400;
}
.big2 h3{
	font-size:1.3rem;margin-bottom: 1.8rem;font-weight: 400;padding-left: 0.2rem;width:90%;
}
.big2 h4{
	width:16rem;height:3.5rem;line-height:3.5rem;text-align: center;color:#fc655e;border:1px solid #FC655E;margin:2.4rem 0
}
.big2>img{
	width:80%;margin-bottom: 2.25rem;
}
.big3{
	background:#fff;margin-top:2rem;width:100%;display: flex;justify-content: center;flex-direction: column;align-items: center;
}
.big3 h3{
	margin:2rem 0;font-size:1.4rem;color:#666;font-weight: 400;
}
.big3 img{
	width:90%;margin-bottom: 4rem;
}
.big4{
	margin-top:2rem;width:100%;display:flex;flex-wrap: wrap;justify-content: space-around;background:#fff;
}
.big4 h3{
	width:100%;text-align: center;margin:2rem 0;font-size:1.4rem;color:#666;font-weight: 400;height:5.4rem;line-height:5.4rem
}
.big4 div{
	width:29%;display:flex;align-items: center;flex-direction: column;height:16.5rem
}
.big4 div img{
	width:100%;
}
.big4 div p{
	width:100%;white-space: nowrap;overflow: hidden;text-overflow:ellipsis;text-align: center;
}
.big4 div p:nth-of-type(1){
	font-size:1.2rem;color:#767676
}
.big4 div p:nth-of-type(2){
	font-size:1.3rem;color:#767676;font-weight: 900;
}
.bot{
	width: 100%;
	height:4.4rem;
	background: #fff;
	display:flex;
	justify-content: space-around;
	position: fixed;
	bottom: 0;
}
.bot>span{
	width:24%;display: flex;flex-direction: column;align-items: center;justify-content: center;font-size:1rem;color:#fc655e
}
.bot>span i{
	font-size:2rem
}
.bot>span button{
	background:#fc655e;border:none;width:100%;height:100%;color:#fff
}
</style>