<template>
  <div class="hello">
   <div class="top">
		<a href="javascript:history.go(-1)">
			<i class="iconfont icon-shanchu"></i>
		</a>
		<li> 
			<span @click="cl(1)" :class="{redb:statu==1}">
				<a href="#/cont" target="mincon">品类</a>
			</span>
		</li>
		<li>
			<span @click="cl(2)" :class="{redb:statu==2}">
				<a href="#/conti" target="mincon">品牌</a>
			</span>
		</li>
	</div>
   <iframe src="#/cont" width="" height="" name = "mincon">
   	
   </iframe>

   <foot></foot>
  </div>
</template>

<script>
import foot from './foot.vue'

export default {
  name: 'HelloWorld',
  components:{
  	foot,
  },
  data(){
		return{
			statu:1
		}
	},
	methods:{
		cl(evt){
			this.statu = evt;

		}
	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.foot{z-index:999}
.top {
  width: 100%;
  height: 5rem;
  background: #fff;
  display: flex;
  font-size: 1.3rem;
  align-items: center;
  border-bottom: 1px solid #c1c1c1;
  font-weight: 900; }
.top i {
    margin-left: 1.8rem;
    color: #333;
    font-size: 1.6rem; }
.top li {
    width: 40%;
    text-align: center; }
.top li span {
      display: inline-block;
      line-height: 5rem; }
.top li span a {
        color: #333; }
.top li .redb {
      border-bottom: 2px solid red; }
iframe{
	border:none;flex:1
}
</style>
