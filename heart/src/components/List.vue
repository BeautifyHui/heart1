<template>
  <div>
			<div class="List" @click="chanName" :class="{ListP:flag}">
					<ul class="ListUl">
						<li v-for = "(item , index) in list" @click="change(item.id , index)" :class="{changename : index == cont}" >{{item.name}}</li>
					</ul>
			</div>  	
			<!---->
				<div class="recommend" :class="{chanTop:flag}">
					<ul class="RecUl">
						<li class="RecLi" v-for = "count in items" @click="jump(count.goodsId)">
								<img :src="count.goodsThumb"/>
								<h2>
									<p>【{{count.usageStateName}}】</p>
									{{count.goodsName}}
								</h2>
								<h2>{{count.salePrice}}<span class="Respan">{{count.purchasePrice}}</span></h2>
								<h3>{{count.brushDesc}}</h3>
						</li>
					</ul>
			</div>
	</div>
	 
</template>
<script>
import axios from 'axios';
		export default{
			name : "List",
			data (){
				return {
					flag : false,
					cont : 0,
					items : [],
					 list : [
					  		{name : "推荐" , id : "/index/v2?pageIndex=1&typeId=1" },
					  		{name : "猜你喜欢" , id : "/index/v2?pageIndex=1&typeId=1000"},
					  		{name : "寄卖" , id : "/index/v2?pageIndex=1&typeId=3"},
					  		{name : "轻奢" , id : "/index/v2?pageIndex=1&typeId=4"},
					  		{name : "经典" , id : "/index/v2?pageIndex=1&typeId=5"}
					 ]
				}
			},
			methods : {
				change (urlid , index){
					this.cont = index;
					var scrollTop = 0;
							axios.get(urlid)
							.then( (res)=>{				
									this.items = res.data.data.goodsList;
							})
							return;
					} ,
					jump(num){
						window.parent.location.href="http://localhost:8080/#/xiangqing?id="+num;
					},
					chanName(){
						window.addEventListener('scroll', this.chanName)
						this.flag = !this.flag;
						var scrollTop = window.pageYOffset || document.documentElement.scrollTop || 						document.body.scrollTop
						if(scrollTop < "426" ){
							 this.flag = false;
						}else{
							this.flag = true;
						}
					}
			},
			mounted (){
					axios.get("/index/v2?pageIndex=1&typeId=1")
							.then( (res)=>{
									this.items = res.data.data.goodsList;
							})
			}
		}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.List{
		overflow: hidden;
    width: 100%;
    height: 4.35rem;
    background: #FFF;
    border-bottom: .05rem solid #C4C9CA;
		overflow: hidden;
}
.ListP{

	position: fixed;
	top: 0;
	z-index: 4;
}


.ListUl{
		width: 100%;
		padding: 1.2rem 0;
		display: flex;
		color: #020202;
		font-size: 1.1rem;
		
}

.ListUl li{
	 	width: 7.5rem;
		height: 3.1rem;
	  font-size: 1.3rem;
    line-height: 1.9rem;
    text-align: center;
    color: #666;
}
.changename{
	  color: #fc655e;
    border-bottom: 0.2rem solid #fc655e;
}


/**/

.recommend {
		width: 100%;
		height: 100%;
    /*margin-top: 7.825rem;*/
   background: #fff;
    padding: 2.083rem 0.625rem 0;
}
.RecUl{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
}
.RecLi{
		padding: 0 1.4rem 2.416rem;
    width: 50%;
    float: left;
    height: 24.68rem;
    overflow: hidden;
}
.RecLi img{
		width: 13.6rem;
		height: 13.6rem;
}
.RecLi h2{
		font-weight: bold;
		font-size: 1.1rem;
		padding-top: 0.6rem;
		white-space: normal;
    text-overflow: ellipsis;
}
.RecLi p{
		display: inline-block;
}
.RecLi h3{
	text-align: right;
		font-size: 1rem;
		color:#999 ;
	  padding-left: 1.5rem;
		background: url('../../static/img/time.png') no-repeat 10rem center;
		background-size: 8%;
}
.Respan{
		font-weight: 100;
		text-decoration: line-through;
		color: #666;
		font-size: .8rem;
		margin-left: .3rem;
}

</style>

