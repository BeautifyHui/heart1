<template>
	<div class="conti">
	        <div class="swiper-slide" >
	        	<h2>7</h2>
	        	<div class="brand" v-for="de in detil7" @click="jump">
	        		<div class="con1">
		        		<img :src=de.src alt="" />
	        		</div>
	        		<p>{{de.namep}}&nbsp;{{de.namel}}</p>
	        	</div>
	        </div>
	        <div class="swiper-slide" >
	        	<h2>A</h2>
	        	<div class="brand" v-for="de in detila" @click="jump">
	        		<div class="con1">
		        		<img :src=de.src alt="" />
	        		</div>
	        		<p>{{de.namep}}&nbsp;{{de.namel}}</p>
	        	</div>
	        </div>
	</div>
</template>
<script>
export default{
	name:'conti',
	methods:{
		jump:function(){
			window.parent.location.href="http:/8080/#/all"
		}
	},
	data(){
		return{
			detil7:[
				{src:'./../../static/img/1a.jpg',namep:"亚历山大·王",namel:"Alexander Wang"},
			],
			detila:[
				{src:'./../../static/img/2a.png',namep:"亚历山大·麦昆",namel:"Alexander Mayqueen"},
				{src:'./../../static/img/3a.png',namep:"阿玛尼",namel:"ARMANI"},
				{src:'./../../static/img/4a.jpg',namep:"安迪佩玛",namel:"ANTEPEIMA"},
				{src:'./../../static/img/5a.jpg',namep:"爱彼",namel:"Aeropostale"},
				{src:'./../../static/img/7a.jpg',namep:"喜登路",namel:"Aeropostale"},
				{src:'./../../static/img/2a.png',namep:"亚历山大·麦昆",namel:"Alexander Mayqueen"},
				{src:'./../../static/img/3a.png',namep:"阿玛尼",namel:"ARMANI"},
				{src:'./../../static/img/4a.jpg',namep:"安迪佩玛",namel:"ANTEPEIMA"},
				{src:'./../../static/img/5a.jpg',namep:"爱彼",namel:"Aeropostale"},
				{src:'./../../static/img/7a.jpg',namep:"喜登路",namel:"Aeropostale"},
				{src:'./../../static/img/2a.png',namep:"亚历山大·麦昆",namel:"Alexander Mayqueen"},
				{src:'./../../static/img/3a.png',namep:"阿玛尼",namel:"ARMANI"},
				{src:'./../../static/img/4a.jpg',namep:"安迪佩玛",namel:"ANTEPEIMA"},
				{src:'./../../static/img/5a.jpg',namep:"爱彼",namel:"Aeropostale"},
				{src:'./../../static/img/7a.jpg',namep:"喜登路",namel:"Aeropostale"},
			],
		}
	}
}
</script>
<style src='./../../static/common.css'></style>
<style scoped="scoped">
.conti{
	width:100%;display:flex;flex-direction: column;color:#474747;
}

h2{
	text-align:center;font-weight:bold;background:#F7F7F7;color:#333;line-height: 2.4rem;
}
.brand{
	width:100%;height:5.5rem;line-height:5.5rem;display:flex;align-items: center;
}
.con1{
	width:19.2%;text-align: center;
}
img{
	width:3.7rem;vertical-align: middle;
}
p{
	height:5.5rem;border-bottom: 1px solid #E0E0E0;font-size:1.3rem;width:80%;
}
</style>
