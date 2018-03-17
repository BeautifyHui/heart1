<template>
  <div>
  			<div class="CarTop">
  				<i class="iconfont icon-error" onclick="javascript:history.go(-1)"></i>
	  				<h1>购物车</h1>
	  				<span @click="CarN()" >{{msg}}</span>
	  	  </div>		
	  	  <div class="CarNav"  :class="{CarN:flag}">
	  	  	<div class="CarnavL">
	  	  		<span class="CartnavQX" @click = "QXinpt()"><span v-show = "qxinpt">√</span></span>全选
	  	  	</div>
	  	  	<div class="CartnavR">
	  	  		<div class="CartDel" @click = "Cardel()">
	  	  			删除
	  	  		</div>
	  	  	</div>
	  	  </div>
<!--                --------------------     section          -->
	  	<div class="CartSection">
	  		<div class="CartST">
	  			 <p class="CartSTinput" @click="Changeinpt" ><span class="InptSpan" v-show ="inpt">√</span></p>
	  			 <h1 class="CartSTshop">{{shopName}}</h1>
	  		</div>
	  					<!-------------->
	  		<div class="CartSBall">
	  				<div class="CartBlist">
	  						<div class="CartSC">
					  			<p class="CartSTinput" @click="Changeinpt" ><span class="InptSpan" v-show ="inpt">√</span></p>
					  			<img :src="rid.goodsThumb" alt="" class="CartSBimg"/>
				  		</div>
				  					<!-------------->
				  		<div class="CartSB">
					  			<p class="CartSBp">{{goodName}}</p>
					  			<div class="CartSBadd">
					  				<span class="CartSBspan" @click="sumadd()">-</span>
					  				<p class="CartSBcount">{{count}}</p>
					  				<span class="CartSBspan" @click="sumdel()">+</span>
				  			</div>
				  		</div>
				  					<!-------------->
				  		<div class="CartSR">
				  				<p>{{shopPrice}}</p>
				  		</div>
	  				</div>
	  		</div>	  		
	  	</div>
	  	<!------------------------------结算-->
	  	<div class="ShopAll">
	  		
	  			<div class="ShopAl">已选中 <span v-show ="inpt">{{count}}</span> 件商品</div>
	  			<div class="ShopAR">总计 ：<span v-show ="inpt">{{count*shopPrice}}</span>元</div>			
	  			<div class="Allmoney">不能结算</div>
	  		
	  	</div>
</div>
	 

</template>
<script>
import axios from 'axios'
	export default{
		name : "Cart",
		data (){
			return {
					flag : true	,
					inpt : false,
					cont : false,
					qxinpt : false,
					msg : "编辑",
					shopName : "",
					shopPrice : "",
					goodName : "",
					arr: [],
					rid: [],
					shoparr : [],
					count : "",
//					id:parseInt(location.href.split("?")[1].split("=")[1])
			}
		},
			mounted(){
				axios.get('/index/v2?typeId=1000')
				.then((response)=>{
					if(!location.href.split("?")[1]){
						alert("购物车空空哒");
						window.location.href = "http://localhost:8080/#/"
						return;
					}
					this.arr = response.data.data.goodsList;		
					for(var i = 0,a = this.arr.length; i < a;i++){
						if(this.arr[i].goodsId == this.id){
							this.rid = this.arr[i];
							this.shoparr =(localStorage.getItem("shop") ).split(",");
							this.shopName = (this.shoparr)[1]
							this.shopPrice = (this.shoparr)[3]
							this.goodName = (this.shoparr)[0]
							this.count = (this.shoparr)[2]						
							return;
						}
					}
				})
		},
		methods : {
			CarN(){
				this.flag = !this.flag
				if(this.flag){
					 this.msg = "编辑"
				}else{
					this.msg = "完成"
				}
			},
			sumadd (){
				if(this.count < 2){
					 return;
				}
				this.count--
			},
			sumdel (){
				this.count++
			},
			Changeinpt(){
//				alert()
				this.inpt = !this.inpt
			},
			QXinpt(){
				 if( this.inpt && !this.qxinpt){
				 		this.inpt = true;
				 		this.qxinpt = true;
				 }else{
				 		this.inpt = !this.inpt
				 		this.qxinpt = !this.qxinpt;
				 }
			},
			Cardel(){
					if(this.inpt){
							localStorage.removeItem("shoparr")
					}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./../../static/font/iconfont.css"></style>
<style scoped >
body{
	background: #fff;
}
.CarTop{
		width: 100%;
		height: 4rem;
		background: #EBECF0;
		border-bottom: .1rem solid #999;
		display: flex;
		align-items: center;
		/*justify-content: center;*/
	}
.CarTop h1{
		font-size: 1.5rem;
		color: #666;
		text-align: center;
		line-height: 4rem;
		/*margin-right: 3rem;*/
		margin: 0 auto;
	}
.CarTop .iconfont{
	margin-left: 1rem;
}
.CarTop span{
		margin-right: 2rem;
		font-size: 1rem;
		color: #666;
}
.CarNav{
	width: 100%;
	height: 4rem;
	background: #fff;
	border-bottom: .1rem solid #ccc;
	display: flex;
	font-size: 1.1rem;
	color: #666;
	align-items: center;
	justify-content: space-between;
	padding: 0 .5rem;

}
.CarN{
		display: none;
}

.CartnavQX{
	display: inline-block;
	width: 1.5rem;
	height: 1.5rem;
	border: .1rem solid #666;
	border-radius: 50%;
	margin: .5rem 1.5rem 0 0;
	color: #333;
}
.CartnavQX span{
		color: #333;
		font-size: 1rem;
		display: flex;
    justify-content: center;
}
.CartDel{
	width: 4rem;
	height: 1.5rem;
	border: .1rem solid #F00000;
	border-radius: 35%;
	text-align: center;
	margin-top: .5rem;
	/*line-height:2rem*/
	
}
.inpt{
		display: none;
}
.CartSection{
	width: 100%;
	background: #ccc;
	/*padding-left: 1rem;*/
	padding-bottom: .5rem;
	/*flex: 1;*/
	overflow: scroll;
}
.CartSBall{
	width: 100%;
	background: #ccc;
}
.CartBlist{
	height: 9rem;
	width: 100%;
	display: flex;
}
.CartST{
	width: 100%;
	height:3rem;
	background: #fff;
	border-bottom: .1rem solid #ccc;
	display: flex;
	align-items: center;
}
.CartSTinput{
	display: inline-block;
	width: 1.5rem;
	height: 1.5rem;
	border: .1rem solid #333;
	border-radius: 50%;
	margin-right: 1.5rem;
	margin-left: .5rem;

}
.InptSpan{
		color: #333;
		font-size: 1rem;
		display: flex;
    justify-content: center;
}
.CartSTshop{
	font-size: 1.1rem;
	color: #666;
}
.CartSC{
	width: 30%;
	height: 9rem;
	background: #fff;
	display: flex;
	align-items: center;
}
.CartSC img{
	width: 7rem;
	height: 7rem;
}
.CartSB{
	width: 45%;
	/*background: indianred;*/
	border-bottom: .1rem solid #ccc;
	background: #fff;
	height: 9rem;
	
}
.CartSBp{
	font-size: 1.1rem;
	color: #999;
	height: 3rem;
	margin: 1rem 0;
}
.CartSBadd{
	display: flex;
	padding-left: 2rem;
}
.CartSBspan{
	width: 1.5rem;
	height: 1.5rem;
	border: .1rem solid #ccc;
	color: #666;
	text-align: center;
	line-height: 1rem;
}
.CartSBcount{
	width: 3rem;
	height: 1.5rem;
	border: .1rem solid #ccc;
	margin: 0 .5rem;
	text-align: center;
	color:#666;
}
.CartSR{
	width: 25%;
	height: 9rem;
	font-size: 1.1rem;
	color: red;
	text-align: center;
	padding-top: 5rem;
	/*background: #22C2D6;*/
	border-bottom: .1rem solid #ccc;
	background: #fff;
}
.ShopAll{
	width: 100%;
	height: 4rem;
	background: #fff;
	padding: 0 0 0 1rem;
	position: fixed;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color:#666;
	font-size: 1.1rem;
}
.ShopAl span{
	color: red;
	font-size: 1.2rem;
}
.ShopAR span{
	color: red;
	font-size: 1.2rem;
}
.Allmoney{
	height: 100%;
	width: 7rem;
	background: red;
	font-size: 1.3rem;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>

