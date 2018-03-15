<template>
  <div>
	  			<!-------------------轮播图-->
	  			<div class="mainw swiper-container">
	  			
	  				<div class="main swiper-wrapper">
	  					<div  class="swiper-slide" v-for="banner in banners">
	  						<a href="javascript:;"><img class="mainImg" :src="banner"/></a>
	  					</div>
	  				</div>
	  			</div>
	  			
	  			<div class="swiper-pagination"></div>
 
				
	 </div>
	 

</template>
<script src="../../static/js/Carousel.js">

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../../static/css/page.css"></style>

