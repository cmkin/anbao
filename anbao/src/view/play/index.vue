<template>
	<div class="view_play">
		<img class="bg" :src="bgList[bgActive]" alt="">
		<div class="main">
			<div class="tops"></div>
			<div class="play">
				<div class="pan">
					<img src="../../assets/img/others/2.png" alt="">
					<img src="../../assets/img/others/6.png" alt="">
					<img src="../../assets/img/others/8.png" alt="">
				</div>
				<div class="zw" v-if="false">
					<div class="top">
						<img src="../../assets/img/others/8.png" alt="">
					</div>
				</div>
			</div>
		</div>
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
		}	
		.main{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			.pan{
				position: relative;
				padding: 20px 60px;
				img:first-child{
					display: block;
					width: 100%;
				}
			}
		}
	}
</style>
