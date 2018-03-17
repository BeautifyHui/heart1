<template>
  <div class="foot">
		<router-link to='./' active-class="four" exact>
			<i class="iconfont icon-home"></i>
			<span>首页</span>
		</router-link>
		<router-link to='./type' active-class="four">
			<i class="iconfont icon-all"></i>
			<span>分类</span>
		</router-link>
		<router-link to='./HelloWorld' active-class="four">
			<img src="./../../static/img/xxx.png" alt="" />
			<span>出售</span>
		</router-link>
		<router-link to='#' active-class="four">
			<i class="iconfont icon-duanxin"></i>
			<span>消息</span>
		</router-link>
		<router-link :to=position active-class="four" >
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
     	position:""
    }
  },
  mounted(){
  	if(sessionStorage.getItem("certificate")){
  		this.position = "./myhome"
  	}else{
  		this.position = "./regeist"
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src='./../../static/font/iconfont.css'></style>
<style src='./../../static/common.css'></style>
