<template>
  <div class="hello">
	  			<div class="section">								<!-------------------头部加载下载-->
	  			<div id="top" :class = "{topnone : flag}">
	  				<div class="topL">
	  					<img @click="topnone()"src="http://static.91xinshang.com/activity/images/login_close2.png "/>
	  				</div>
	  			</div>
	  			       <!-------------------搜索-->
	  			<div class="seach">
	  					<a href="javascript:;">
	  						<span class="Seachspan">
	  							<img src="http://static.91xinshang.com/mobile/images/indext/4.png"/>
	  							<input type="text"id="" placeholder="输入品牌或关键词" />
	  						</span>
	  					</a>
	  			</div>
	  			 <Carousel/>
	  			 <Listop/>
	  			 <List/>
	  			 
	  </div>			<!-------------------轮播图-->
	  <foot></foot>
	  	 
  </div>


</template>
<script>
import Carousel from './Carousel.vue'
import Listop from './Listtop.vue'
import List from './List.vue'
import foot from './foot.vue'
export default {
  name: 'HelloWorld',
	data : function(){
		return{
			flag : false
		}
	},
  components : {
  	Carousel,
  	Listop,
  	List,
  	foot
  },
  methods : {
  	 topnone:function(){
				this.flag = !this.flag
  	 }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./../../static/common.css"></style>
<style src="../../static/css/page.css"></style>
