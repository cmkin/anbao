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
		
		<div class="main_wrap">
			<ul class="main clearfix">
				<li v-for="item in lists">
					<img :src="item.img" alt="">
				</li>
			</ul>
		</div>
		
		<div>
			
		</div>
		
	</div>
</template>

<script>
	export default {
		data(){
			return{
				lists:[
					{
					  img:require("_a/img/2.png"),
					  type:0
					},
					{
					  img:require("_a/img/8.png"),
					  type:1
					},
					{
					  img:require("_a/img/6.png"),
					  type:2
					},
					{
					  img:require("_a/img/5.png"),
					  type:3
					},
					{
					  img:require("_a/img/1.png"),
					  type:4
					},
					{
					  img:require("_a/img/4.png"),
					  type:5
					},
					{
					  img:require("_a/img/3.png"),
					  type:6
					},
					{
					  img:require("_a/img/7.png"),
					  type:7
					},
					{
					  img:require("_a/img/9.png"),
					  type:8
					},
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
	.view_index{
		background: url(../../assets/img/bg1.png) no-repeat 0 0;
		background-size: 100% 100%;
		width: 100%;
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
		
		.main_wrap{
			height: 100vh;
			box-sizing: border-box;
			overflow-y: auto;
			padding-top: 80px;
		}
		.main{
			display: flex;
			padding: 0 8%;
			
			flex-wrap: wrap;
			li{
				
				margin-bottom: 15px;
				width: 46%;
				border-radius: 15px;
				img{
					display: block;
					width: 100%;
				}
			}
			li:nth-child(2n){
				margin-left: 8%;
			}
			
			
		}
		
	}
</style>
