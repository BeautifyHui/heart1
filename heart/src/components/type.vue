<template>
  <div class="hello">
   <div class="top">
		<router-link to="/">
			<i class="iconfont icon-error"></i>
		</router-link>
		<li> 
			<router-link to="/type" active-class="redb" exact>
				品类
				</router-link>
		</li>
		<li>
			<router-link to="/conti" active-class="redb">
				品牌
			</router-link>
		</li>
	</div>
		<router-view />
   <foot></foot>
  </div>
</template>
<script>
import foot from './foot.vue'
import cont from './cont.vue'
import conti from './conti.vue'
export default {
  name: 'HelloWorld',
  components:{
  	foot,
  	cont,
  	conti
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
    font-size: 1.6rem; 
    }
.top li {
    width: 40%;
    text-align: center;
    height: 100%; }
.top li a {
        color: #333;line-height: 5rem;display: inline-block}
.top li .redb {
      border-bottom: 2px solid red;height:100% }
iframe{
	border:none;flex:1
}
</style>
