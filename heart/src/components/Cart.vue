<template>
  <div>
 
  			<div class="CarTop">
	  				<h1>购物车</h1>
	  				<span>编辑</span>
	  	  </div>		
	  	  <div class="CarNav">
	  	  	<div class="CarnavL">
	  	  		<span class="CartnavQX"></span>全选
	  	  	</div>
	  	  	<div class="CartnavR">
	  	  		<div class="CartDel">
	  	  			删除
	  	  		</div>
	  	  	</div>
	  	  </div>
<!--                --------------------     section          -->
	  	<div class="CartSection">
	  		<div class="CartST">
	  			 <p class="CartSTinput"></p>
	  			 <h1 class="CartSTshop">美肤宝专营店 > </h1>
	  		</div>
	  					<!-------------->
	  		<div class="CartSBall">
				  		<div class="CartSC">
					  			<p class="CartSTinput"></p>
					  			<img src="../../static/img/main1.jpg" alt="" class="CartSBimg"/>
				  		</div>
				  					<!-------------->
				  		<div class="CartSB">
					  			<p>美肤宝专营店 防晒套装只要49元一套哈哈哈</p>
					  			<div class="CartSBadd">
					  				<span class="CartSBspan">-</span>
					  				<p class="CartSBcount">1</p>
					  				<span class="CartSBspan">+</span>
				  			</div>
				  		</div>
				  					<!-------------->
				  		<div class="CartSR">
				  				<p>300.00</p>
				  		</div>
	  		</div>
	  		
	  	</div>
 
				
</div>
	 

</template>
<script>
	export default{
		name : "Cart"
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
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
	color: #999;
	align-items: center;
	justify-content: space-between;
	padding: 0 1rem;
}
.CartnavQX{
	display: inline-block;
	width: 1rem;
	height: 1rem;
	border: .1rem solid #ccc;
	border-radius: 50%;
	margin: .5rem 1.5rem 0 0;
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
.CartSection{
	width: 100%;
	background: #F0DDDD;
	padding-left: 1rem;
}
.CartSBall{
	width: 100%;
	display: flex;
}
.CartST{
	width: 100%;
	height:3rem;
	background: #ccc;
	border-bottom: .1rem solid #999;
	display: flex;
	align-items: center;
}
.CartSTinput{
	display: inline-block;
	width: 1rem;
	height: 1rem;
	border: .1rem solid #333;
	border-radius: 50%;
	margin-right: 1.5rem;
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
	background: indianred;
}
.CartSBadd{
	display: flex;
}
</style>

