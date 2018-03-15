import Vue from 'vue'

export default {
		name: "Carousel" ,
		data (){
			return {
				banners : ['../../static/img/main1.jpg' , '../../static/img/main2.jpg']
			}
		},
		mounted() {
			 var swiper = new Swiper('.swiper-container', {
		      loop: true,
		      autoplay: true,
		    
		    });

		}
}

	