<template>
  <div>
			<div class="swiper-container">
			    <div class="swiper-wrapper">
			        <div class="swiper-slide" v-for="banner in banners">
			        	<a href="javascript:;"><img :src="banner"/></a>
			        </div>
			        
			    </div>
			    <!-- 如果需要分页器 -->
			    <div class="swiper-pagination"></div>
			    
			    <!-- 如果需要导航按钮 -->
			    <div class="swiper-button-prev"></div>
			    <div class="swiper-button-next"></div>
			    
			    <!-- 如果需要滚动条 -->
			    <div class="swiper-scrollbar"></div>
			</div> 		
	</div>
	 

</template>
<script>
export default{
	name : "open"
//	data (){
//			return {
//				banners : ['../../static/img/main1.jpg' , '../../static/img/main2.jpg'],
//			}
//	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	h1{
		height: 300px;
		background: red;
	}
</style>

