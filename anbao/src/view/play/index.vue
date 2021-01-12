<template>
	<div class="view_play">
		<img class="bg" :src="bgList[bgActive]" alt="">
		<div class="main"></div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				bgActive:0,
				bgList:[
					require("_a/img/others/00.png")
				]
			}
		},
		mounted() {
			
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped="scoped">
	.view_play{
		.bg{
			display: block;
			width: 100%;
			height: 100%;
			.main{
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
		}	
	}
</style>
