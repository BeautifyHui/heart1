<template>
  <div class="foot">
		<router-link to='./' class="four">
			<i class="iconfont icon-home"></i>
			<span>首页</span>
		</router-link>
		<router-link to='./type' class="four">
			<i class="iconfont icon-all"></i>
			<span>分类</span>
		</router-link>
		<router-link to='./HelloWorld' class="four">
			<img src="./../../static/img/xxx.png" alt="" />
			<span>出售</span>
		</router-link>
		<router-link to='./regeist' class="four">
			<i class="iconfont icon-duanxin"></i>
			<span>消息</span>
		</router-link>
		<router-link to='./regeist' class="four">
			<i class="iconfont icon-dengluyemianyonghuming"></i>
			<span>我的</span>
		</router-link>
		
   
  </div>
</template>

<script>
export default {
  name: 'foot',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src='./../../static/font/iconfont.css'></style>
<style src='./../../static/common.css'></style>
