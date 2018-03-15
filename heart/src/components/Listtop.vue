<template>
  <div>
	  	<div class="listTop">
	  		<div class="listTD">
	  			<a v-for = "banner in banners" href="javascript:;"><img :src="banner"/></a>
	  		</div>
	  	</div>
	  	
	</div>
	 

</template>
<script>
	export default{
		name : "Listtop",
	
	data (){
		 return {
		 		banners : [
		 				"http://static.91xinshang.com/mobile/images/lease/list/buy.jpg",
		 				"http://static.91xinshang.com/mobile/images/lease/list/sell.jpg",
		 				"http://static.91xinshang.com/mobile/images/lease/list/lease.jpg"
		 		]
		 }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="scoped">

	.listTop{
		  margin: 1.2rem 0;
    	width: 100%;
    	background: #fff;
	}
	.listTD{
		  width: 100%;
	    padding: 1rem 0;
	    background: #FFFFFF;
	    overflow: hidden;
	    margin-bottom: 1rem;
	    display: flex;
	    justify-content: space-around;
	}
	.listTD a {
		margin: 0 .5rem;
	}
	.listTD img{
		width: 10.3rem;
		height: 10.3rem;
	}
</style>

