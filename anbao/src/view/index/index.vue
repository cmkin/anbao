<template>
	<div class="view_index">
		<div class="header clearfix">
			<img src="" alt="">
			<ul class="info">
				<li>
					<span>ID:</span>
					<p>21202</p>
				</li>
				<li>
					<span>昵称:</span>
					<p>昵称昵称</p>
				</li>
				<li>
					<span>等级:</span>
					<p>1</p>
				</li>
			</ul>
			<div class="fk clearfix">
				<span></span>
				<span>0</span>
			</div>
			<div class="r">
				<span></span>
				<span></span>
			</div>
		</div>
		<div style="height: 80px;"></div>
		<ul class="main clearfix">
			<li v-for="item in 9">
				<div></div>
			</li>
		</ul>
		
		<div>
			
		</div>
		
	</div>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
		mounted() {
			
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped="scoped">
	.view_index{
		background: url(../../assets/img/module/client/clientRes/Newtex/home/xinaiwai/bg1.1d8b8.png) no-repeat 0 0;
		background-size: 100% 100%;
		width: 100vw;
		overflow-y: scroll;
		height: 100vh;
		.header{
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			background-image: url(../../assets/img/module/client/clientRes/Newtex/AutoAtlas-3.fc0e4.png);
			background-position: -9rem 0;
			background-size: 32rem auto;
			background-color: #5F86BC;
			color: #fff;
			height: 3rem;
			box-sizing: border-box;
			padding: 5px;
			&>img{
				float: left;
				width: 50px;
				height: 50px;
				background-color: #333333;
			}
			.info{
				float: left;
				font-size: 12px;
				padding-left: 5px;
				p{
					display: inline-block;
					padding-left: 8px;
				}
			}
			.fk{
				float: left;
				padding-left: 20px;
				padding-top: 8px;
				span{
					float: left;
				}
				span:first-child{
					display: inline-block;
					background: url(../../assets/img/module/client/clientRes/Newtex/AutoAtlas-3.fc0e4.png) no-repeat 0 0;
					background-position: 0 -30rem;
					background-size: 32rem auto;
					width:2.25rem;
					height: 1.85rem;
				}
				span:last-child{
					padding-top: 6px;
					font-size: 16px;
					padding-left: 5px;
				}
				
			}
			.r{
				float: right;
				span{
					display: inline-block;
					background: url(../../assets/img/module/client/clientRes/Newtex/AutoAtlas-3.fc0e4.png) no-repeat 0 0;
					background-position: -4.5rem -27rem;
					background-size: 29rem auto;
					width:2.25rem;
					height: 1.85rem;
				}
				span:first-child{
					transform: rotate(-90deg);
					width: 3rem;
					background-position: -4.2rem -27rem;
				}
				span:last-child{
					height: 2.25rem;
					background-position: -4.9rem -20.5rem;
					position: relative;
					top: 0.5rem;
					right: 0.1rem;
				}
			}
		}
		
		.main{
			padding: 0 8%;
			li{
				float: left;
				height: 120px;
				background-color: red;
				margin-bottom: 1rem;
				width: 46%;
				border-radius: 15px;
			}
			li:nth-child(2n){
				margin-left: 8%;
			}
			li{
				background: url(../../assets/img/module/client/clientRes/Newtex/AutoAtlas-2.92bbc.png) no-repeat 0 0;
				background-position: -16rem -12.2rem;
				background-size: 26rem auto;
			}
			li:nth-child(1){
				background-position: -8rem -0.2rem;
			}
			li:nth-child(2){
				background-position: -16rem -12.2rem;
			}
			li:nth-child(3){
				background-position: -16.2rem -6.2rem;
			}
			li:nth-child(4){
				background-position: -8.2rem -6.2rem;
			
			}
			li:nth-child(5){
				background-position: -0.2rem -0.2rem;
			}
			li:nth-child(6){
				background-position: -0.2rem -6.2rem;
			}
			li:nth-child(7){
				background-position: -16.2rem -0.2rem;
			}
			li:nth-child(8){
				background-position: -0.2rem -12.2rem;
			}
			li:nth-child(9){
				div{
				  width: 120px;
				  height: 40vw;
				  transform: rotate(-90deg);
				  background-position: -0.8rem -19.2rem;
				}
				
			}
			
		}
		
	}
</style>
