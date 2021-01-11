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
				<img src="../../assets/img/index/20.png" alt="">
				<span>0</span>
			</div>
			<div class="r">
				<img v-clicked src="../../assets/img/index/18.png" alt="">
				<img v-clicked src="../../assets/img/index/7.png" alt="">
			</div>
		</div>
		<scrolltop>
		<div class="main_wrap">	
			
			<ul class="main clearfix">
				
					<li @click="flag.lb = true" v-clicked v-for="(item,index) in lists" :key="index">
						<img :src="item.img" alt="">
					</li>
				
			</ul>
		
		</div>
		</scrolltop>
		<div>
			
		</div>


		<div class="tips">
			<img src="../../assets/img/16.png" alt="">
			<div>
				<van-notice-bar scrollable text="通知通知通知通知通知通知通知通知通知通知通知通知通知通知通知通通知通知通知通知通知通知通知通知通知通知通知通知通知通知通知" />
			</div>
		</div>
		
		<div class="bx">
			<img v-clicked  src="../../assets/img/index/36.png" alt="">
		</div>
		
		
		
		<div class="fonter">
			<span>
				<img src="../../assets/img/11.png" alt="" >
			</span>
			<span>
				<img src="../../assets/img/12.png" alt="" >
			</span>
			<span>
				<img src="../../assets/img/10.png" alt="" >
			</span>
		</div>


		<diglogx v-model="flag.lb">
			<template v-slot:content>
				<div class="a_changel">
					<div class="top">
						<van-button type="info" v-clicked>固定庄家</van-button>
					</div>
					<ul class="list">
						<li class="clearfix">
							<span>
								筹码
							</span>
							<div>
								<radiox :lists="radioL.cm" v-model="flag.cm"></radiox>
							</div>
						</li>
						<li class="clearfix">
							<span>上限</span>
							<div>
								<radiox :lists="radioL.sx" v-model="flag.sx"></radiox>
							</div>
						</li>
						<li class="clearfix">
							<span>
								座位分
							</span>
							<div>
								<radiox :lists="radioL.zwf" v-model="flag.zwf"></radiox>
							</div>
						</li>
					</ul>
					<ul class="list ls">
						<li style="font-size: 16px;">赔率设置</li>
						<li class="clearfix">
							<span>龙,虎,</br>出,入</span>
							<div>
								<radiox :lists="radioL.lh" v-model="flag.lh"></radiox>
							</div>
						</li>
						<li class="clearfix">
							<span>同,粘</span>
							<div>
								<radiox :lists="radioL.tz" v-model="flag.tz"></radiox>
							</div>
						</li>
						<li class="clearfix">
							<span>角,串</span>
							<div>
								<radiox :lists="radioL.jc" v-model="flag.jc"></radiox>
							</div>
						</li>
					</ul>
				</div>
			</template>
		</diglogx>

		
	</div>
</template>

<script>
	export default {
		data(){
			return{
				flag:{
					lb:true,
					cm:0,
					sx:0,
					zwf:0,
					lh:0,
					tz:0,
					jc:0
				},
				radioL:{
					cm:[
						{
							id:0,
							text:'10,20,30,50,100'
						},
					],
					sx:[
						{
							id:0,
							text:'1000'
						},
					],
					zwf:[
						{
							id:0,
							text:'20'
						},
						{
							id:1,
							text:'30'
						},
						{
							id:2,
							text:'50'
						},
						{
							id:3,
							text:'100'
						},
					],
					lh:[
						{
							id:0,
							text:'1:3'
						},
						{
							id:1,
							text:'1:2.9'
						},
						{
							id:2,
							text:'1:2.8'
						},
						{
							id:3,
							text:'1:2.7'
						},
					],
					tz:[
						{
							id:0,
							text:'1:2'
						},
						{
							id:1,
							text:'1:1.9'
						},
						{
							id:2,
							text:'1:1.8'
						}
					],
					jc:[
						{
							id:0,
							text:'1:1'
						},
						{
							id:1,
							text:'1:0.9'
						},
						{
							id:2,
							text:'1:0.98'
						},
						{
							id:3,
							text:'1:0.95'
						},
					],
				},
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
			z-index: 100;
			background: url(../../assets/img/index/3.png) no-repeat 0 0;
			background-size: 100% 100%;
			background-color: #5F86BC;
			color: #fff;
			height: 60px;
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
				padding-top: 18px;
				span,img{
					float: left;
				}
				img:first-child{
					display: inline-block;
					width:30px;
					height: 22px;
				}
				span:last-child{
					font-size: 16px;
					padding-left: 5px;
				}
				
			}
			.r{
				float: right;
				padding-right: 10px;
				padding-top: 10px;
				img{
					display: inline-block;
				}
				img:first-child{
					transform: rotate(-90deg);
					width: 35px;
					height: 30px;
				}
				img:last-child{
					margin-left: 10px;
					width: 35px;
					height: 35px;
					position: relative;
					top: 1px;
				}
			}
		}
		
		.main_wrap{
		
			box-sizing: border-box;
			
			padding-top: 80px;
		}
		.main{
			display: flex;
			padding: 0 8%;
			
			flex-wrap: wrap;
			&>li{
				
				margin-bottom: 15px;
				width: 46%;
				border-radius: 15px;
				img{
					display: block;
					width: 100%;
				}
			}
			&>li:nth-child(2n){
				margin-left: 8%;
			}
			
			
		}

		.tips{
			position: fixed;
			top: 16%;
			width: 98%;
			left: 1%;
			background: rgba(0, 0, 0, 0.5);
			box-sizing: border-box;
			padding: 3px;
			border-radius: 5px;
			&>img{
				display: inline-block;
				width: 20px;
				height: 20px;
				position: relative;
				top: 2px;
				left: 3px;
			}
			&>div{
				display: inline-block;
				padding: 0 10px;
				box-sizing: border-box;
				width: calc(100% - 20px);
			}
		}
		
		.bx{
			position: fixed;
			z-index: 1000;
			right: 10px;
			bottom: 100px;
			img{
				width: 70px;
			}
		}
	
		.fonter{
			position: fixed;
			bottom: 0px;
			left: 5%;
			width: 90%;
			z-index: 100;
			display: flex;
			padding: 10px 0;
			background: rgba(67, 89, 166,0.6);
			span{
				flex: 1;
				text-align: center;
			}
			img{
				display: inline-block;
				width: 80px;
			}
		}
		
		.a_changel{
			padding: 20px;
			.top{
				text-align: center;
				padding-bottom: 8px;
				border-bottom: 1px solid @blue1;
				margin-bottom: 5px;
			}
			.list{
				padding: 5px;
				background-color: @blue1;
				li{
					margin-bottom: 10px;
					&>span{
						float: left;
						width: 50px;
						text-align: center;
					}
					&>div{
						float: left;
						width: calc(100% - 50px);
					}
				}
			}
			.ls{
				background-color: @blue2;
			}
		}
		
	}

	
</style>
<style lang="less">
	.view_index{
		.van-notice-bar{
			background: none;
			color: #fff;
			padding: 0;
			height: 15px;
			line-height: 100%;
		}
		.g_diglog{
			.main{
				top: 10%;
			}
		}
	}
	
</style>
