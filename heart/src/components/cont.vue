<template>
	<div class="cont">
		<ul>
			<li v-for="(item,$index) in items" @click="toggle($index)">
				<span :class="{shadow:active==$index}">
					<span></span>
					<i>{{item.i}}</i>
				</span>
			</li>
		</ul>
		<div class="all">
				<section>
					<h2>———— 全部分类 ————</h2>
					<div class="goods" >
						<a href="javascript:;" @click="jump()"  v-for="ba in items[active].bags">
							<img :src=ba.src  alt="" />
							<span>{{ba.type}}</span>
						</a>
					</div>
				</section>
			
			
		</div>
		
	</div>
</template>

<script>

export default{
	name:'cont',
	components: {},
	data:function(){
		return{
			active:0,
			items:[
				{i:"箱包",
					bags:[
						{src:"./../../static/img/83.png",type:"全部箱包"},
						{src:"./../../static/img/1.png",type:"手提包"},
						{src:"./../../static/img/2.png",type:"双肩包"},
						{src:"./../../static/img/3.png",type:"单肩包"},
						{src:"./../../static/img/4.png",type:"公文包"},
						{src:"./../../static/img/5.png",type:"化妆包"},
						{src:"./../../static/img/1.png",type:"Ipad套/手机套"},
						{src:"./../../static/img/2.png",type:"腰包/胸包"},
						{src:"./../../static/img/3.png",type:"卡套/证件套"},
						{src:"./../../static/img/4.png",type:"手包/手拿包"},
						{src:"./../../static/img/5.png",type:"旅行箱/行李箱"},
						{src:"./../../static/img/1.png",type:"钱包/卡包/钥匙包"},
					]
				},
				{i:"配饰",
					bags:[
						{src:"./../../static/img/84.png",type:"全部配饰"},
						{src:"./../../static/img/12.png",type:"腰带/腰链"},
						{src:"./../../static/img/17.png",type:"帽子"},
						{src:"./../../static/img/4.png",type:"手套"},
						{src:"./../../static/img/5.png",type:"袖扣/领扣"},
						{src:"./../../static/img/1.png",type:"钥匙扣/挂件"},
						{src:"./../../static/img/30.png",type:"领带/领结"},
						{src:"./../../static/img/4.png",type:"太阳镜/眼镜"},
						{src:"./../../static/img/5.png",type:"丝巾/围巾/方巾"},
						{src:"./../../static/img/1.png",type:"丝巾扣/领结扣"},
						{src:"./../../static/img/75.png",type:"耳套/耳罩"},
					]
				},
				{i:"鞋靴",
					bags:[
						{src:"./../../static/img/85.png",type:"全部鞋靴"},
						{src:"./../../static/img/5.png",type:"凉鞋"},
						{src:"./../../static/img/2.png",type:"高跟鞋"},
						{src:"./../../static/img/85.png",type:"运动鞋"},
						{src:"./../../static/img/5.png",type:"平底鞋"},
						{src:"./../../static/img/85.png",type:"跑鞋"},
						{src:"./../../static/img/4.png",type:"拖鞋"},
						{src:"./../../static/img/85.png",type:"长筒靴"},
						{src:"./../../static/img/85.png",type:"切尔靴"},
						{src:"./../../static/img/85.png",type:"跑鞋"},
					]
				},
				{i:"服装",
					bags:[
						{src:"./../../static/img/86.png",type:"全部服装"},
						{src:"./../../static/img/1.png",type:"女装"},
						{src:"./../../static/img/86.png",type:"男装"},
						{src:"./../../static/img/4.png",type:"童装"},
						{src:"./../../static/img/86.png",type:"钥匙扣/挂件"},
						{src:"./../../static/img/85.png",type:"领带/领结"},
						{src:"./../../static/img/33.png",type:"太阳镜/眼镜"},
						{src:"./../../static/img/86.png",type:"丝巾/围巾/方巾"},
						{src:"./../../static/img/86.png",type:"丝巾扣/领结扣"},
						{src:"./../../static/img/33.png",type:"耳套/耳罩"},
						{src:"./../../static/img/2.png",type:"帽子"},
						{src:"./../../static/img/86.png",type:"手套"},
						{src:"./../../static/img/4.png",type:"袖扣/领扣"},
						{src:"./../../static/img/85.png",type:"钥匙扣/挂件"},
						{src:"./../../static/img/3.png",type:"领带/领结"},
						{src:"./../../static/img/3.png",type:"太阳镜/眼镜"},
						{src:"./../../static/img/5.png",type:"丝巾/围巾/方巾"},
						{src:"./../../static/img/86.png",type:"丝巾扣/领结扣"},
						{src:"./../../static/img/1.png",type:"耳套/耳罩"},
					]
			},
				{i:"首饰",
					bags:[
						{src:"./../../static/img/33.png",type:"全部首饰"},
						{src:"./../../static/img/33.png",type:"手链"},
						{src:"./../../static/img/86.png",type:"戒指"},
						{src:"./../../static/img/33.png",type:"耳钉"},
						{src:"./../../static/img/33.png",type:"挂坠"},
						{src:"./../../static/img/33.png",type:"领带/领结"},
						
					]
				},
				{i:"手表",
					bags:[
						{src:"./../../static/img/88.png",type:"全部手表"},
						{src:"./../../static/img/23.png",type:"机械表"},
						{src:"./../../static/img/33.png",type:"石英表"}
					]
				},
				{i:"配件",
					bags:[
						{src:"./../../static/img/89.png",type:"全部配件"},
						{src:"./../../static/img/23.png",type:"钢笔"},
						{src:"./../../static/img/89.png",type:"圆珠笔"},
						{src:"./../../static/img/86.png",type:"签字笔"},
						{src:"./../../static/img/1.png",type:"笔记本/笔袋"},
						{src:"./../../static/img/3.png",type:"眼镜盒"},
					]
				}
			]
		}
	},
	methods:{
		toggle(index){
			this.active=index;
		},
		jump:function(){
			window.parent.location.href="http://localhost:8080/#/all";
		}
		
	}
}
</script>
<style src='./../../static/common.css'></style>
<style>
.cont{
	flex:1;background:#fff;display:flex;
}
ul{
	width:22.6%;border-right:1px solid #e0e0e0;height:100%;
}
li{
	height:5rem;line-height: 5rem;font-size: 1.5rem;text-align: center;
}
.shadow{
	display:block;width:102%;background:#fff;border-top:1px solid #e0e0e0;border-bottom: 1px solid #e0e0e0;
}
.shadow>span{
	border-left:0.4rem solid #fc665e;margin-right: 1.4rem;
}
i{
	margin-right: 2.4rem;font-style: normal;
}
li>i{
	font-weight: 500;
}
.shadow>i{
	font-size:2.0rem;
}
.all{
	width:77.4%;height:auto;font-size: 1.3rem;color:#474747;padding-top:3rem;overflow: scroll;
}
.all h2{text-align: center;font-weight: 400;margin-bottom: 1.8rem;font-size: 1.3rem;}
.goods{
	width:100%;display:flex;flex-wrap: wrap;
}
.goods a{
	display:flex;flex-direction: column;align-items: center;height:11rem;width:33.33%;color:#333;text-align:center
}
.goods a img{width:5.5rem;margin-bottom: 0.5rem;}
</style>