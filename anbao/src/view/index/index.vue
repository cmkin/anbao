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
			<div class="r" v-if="pageType==0">
				<img @click="grinfo=true" v-clicked src="../../assets/img/index/18.png" alt="">
				<img @click="fks=true" v-clicked src="../../assets/img/index/7.png" alt="">
			</div>
		</div>
		
		<div v-if="pageType==0">
			
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
				<img @click="keyborder = true" v-clicked  src="../../assets/img/index/36.png" alt="">
			</div>
			
		</div>
		
		
		<div v-if="pageType==1">
			<zx></zx>
		</div>
		<div v-if="pageType==2">
			<mine></mine>
		</div>
		
		
		<div class="fonter">
			<span @click="pageType=0">
				<img v-clicked src="../../assets/img/11.png" alt="" >
			</span>
			<span @click="pageType=1">
				<img v-clicked src="../../assets/img/12.png" alt="" >
			</span>
			<span @click="pageType=2">
				<img v-clicked src="../../assets/img/10.png" alt="" >
			</span>
		</div>


		<diglogx v-model="flag.lb">
			<template v-slot:content>
				<div class="a_changel">
					<div class="m_W">
					<div class="top">
						<van-button type="info" v-clicked>固定庄家</van-button>
					</div>
					<div class="list_wrap">
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
							<li style="font-size: 15px;margin-bottom:5px;">赔率设置</li>
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
						<ul class="list">
							<li class="clearfix">
								<span>人数</span>
								<div>
									<radiox :lists="radioL.rs" v-model="flag.rs"></radiox>
								</div>
							</li>
							<li class="clearfix">
								<span>房卡</span>
								<div>
									<radiox :lists="radioL.fk" v-model="flag.fk"></radiox>
								</div>
							</li>
						</ul>
					</div>
					<div class="nos">
						创建房间游戏未进行，不消耗房卡
					</div>
					</div>
					<div class="btn">
						<img  @click="goplay" v-clicked src="../../assets/img/others/19.png" alt="">
					</div>
				</div>
			</template>
		</diglogx>
		
		
		<fdb v-model="fdb"  class="bgs"></fdb>
		
		
		<diglogx v-model="keyborder"  class="bgs">
			<template v-slot:content>
				<keyborder @ok=""></keyborder>
			</template>
		</diglogx>
		
		<diglogx v-model="grinfo" class="bgs">
			<template v-slot:content>
				<div class="grinfo">
					<p class="z">
						致广大玩家:
						</br>
					 <i style="padding-left: 40px;"></i> 打开游戏后， 如果发现游戏界面和之前玩的界面不一样，就肯定是山寨平台及外挂平台，请认准游戏界面，防伪签名，等级和ID，谨防被骗，海陆玩提示。
					</p>
					<p class="r">(我们的界面永远不会变)</p>
					<div class="f">
						<span>防作弊签名:</span>
						前面大
					</div>
					<div class="o">
						<span v-clicked>刷新头像</span>
						<div class="r">
							<img src="" alt="">
							<div class="b">
								<p>
									<i>昵称昵称</i>
									<i>ID:229741</i>
								</p>
								<div>
									<i>1级</i>
									<span><i></i></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</template>
		</diglogx>
		
		<diglogx v-model="fks" class="bgs">
			<template v-slot:content>
				<div class="fks">
					<ul>
						<li>
							<span>您的房卡:</span>
							<i>190</i>张
						</li>
						<li>
							<span>0</span>
							张
						</li>
						<li>
							<span>放入房卡</span>
							<input type="number">
							张
						</li>
					</ul>
					<div class="btns">
						<span v-clicked>制作房卡</span>
					</div>
					
				</div>
			</template>
		</diglogx>
		
	</div>
</template>

<script>
	import zx from './zx'
	import mine from './mine'
	export default {
		data(){
			return{
				fdb:false,
				keyborder:false,
				grinfo:false,
				fks:false,
				pageType:0,
				flag:{
					lb:false,
					cm:0,
					sx:0,
					zwf:0,
					lh:0,
					tz:0,
					jc:0,
					rs:0,
					fk:0
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
					rs:[
						{
							id:0,
							text:'10'
						},
						{
							id:1,
							text:'13'
						},
						{
							id:2,
							text:'16'
						},
						{
							id:3,
							text:'18'
						},
						{
							id:4,
							text:'20'
						},
						{
							id:5,
							text:'26'
						},
						{
							id:6,
							text:'32'
						},
						{
							id:7,
							text:'<span style="color:red;">38</span>'
						},
					],
					fk:[
						{
							id:0,
							text:'<span style="font-size:12px;">20人以下x5张房卡，26人以上x10张房卡</span>'
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
		components:{
			zx,mine
		},
		methods:{
			goplay(){
				this.flag.lb = false
				this.$router.push("/play")
			}
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
			left: 0%;
			width: 100%;
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
			padding:5px;
			width: 100%;
			box-sizing: border-box;
			.m_W{
				padding: 20px;
				overflow: auto;
				max-height: 70vh;
			}
			.top{
				text-align: center;
				padding-bottom: 8px;
				border-bottom: 1px solid @blue1;
				margin-bottom: 5px;
			}
			.list_wrap{
				background-color: @blue1;
			}
			.list{
				padding:5px 10px;
				li{
				
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
				margin: 5px;
				margin-top: 0;
				border-radius: 5px;
			}
			.nos{
				text-align: center;
				color: @blue;
				padding: 5px 0;
			}
			.btn{
				background-color: @blue1;
				text-align: center;
				padding: 10px 0;
				img{
					display: inline-block;
					width: 100px;
				}
			}
		}
		
		
		.grinfo{
			padding: 20px;
			.z{
				color: #BF28FF;
				font-size: 20px;
			}
			&>.r{
				color: red;
				font-size: 20px;
				padding-top: 10px;
				text-align: center;
			}
			.f{
				padding-left: 30px;
				font-size: 20px;
				color: #E88185;
				padding: 10px 0;
				border-bottom: 1px solid #99AFF1;
				span{
					color: #904E12;
				}
			}
			
			.o{
				padding-top: 10px;
				&>span{
					text-align: center;
					line-height: 35px;
					display: inline-block;
					width: 100px;
					height: 35px;
					color: #fff;
					background: url(../../assets/img/gr/btn.png) no-repeat 0 0;
					background-size: 100% 100%;
				}
				.r{
					padding-top: 10px;
					display: flex;
					&>img{
						width: 80px;
						height: 80px;
						background-color: #ccc;
					}
					.b{
						flex: 1;
						width: 100%;
						padding-left: 10px;
						p{
							color: #A57143;
							display: flex;
							margin-bottom: 10px;
							font-size: 20px;
							i{
								overflow: hidden;
								flex: 1;
							}
						}
						div{
							padding-top: 10px;
							display: flex;
							&>i{
								width: 40px;
								color: red;
								font-size: 20px;
							}
							span{
								margin-top: 5px;
								flex: 1;
								margin-left: 40px;
								width: 100%;
								overflow: hidden;
								height: 16px;
								border-radius: 20px;
								background-color: #D8B99A;
								i{
									display: block;
									width: 33%;
									height: 100%;
									background-color: #8FF352;
								}
							}
						}
					}
				}
			}
		}
		
		.fks{
			padding-bottom: 5px;
			ul{
				padding: 20px;
				padding-bottom: 0;
				text-align: center;
				font-size: 18px;
				box-sizing: border-box;
				li{
					
					box-sizing: border-box;
					border-bottom: 1px solid #B8C5FA;
				}
				li:first-child{
					padding-bottom: 5px;
					font-size: 20px;
					i{
						display: inline-block;
						width: 100px;
						color: red;
					}
				}
				li:nth-child(2){
					padding: 5px 0;
					font-size: 30px;
					span{
						display: inline-block;
						width: 100px;
						color: red;
					}
				}
				li:last-child{
					padding: 10px;
					box-sizing: border-box;
					background-color: #DFE7FF;
					border-radius: 30px;
					margin: 20px 0;
					input{
						display: inline-block;
						width: 100px;
						border: none;
						background: none;
						padding: 5px;
						color: red;
						font-size: 18px;
					}
				}
			}
			.btns{
				background-color: #C7D4FE;
				width: 97%;
				padding: 10px 0;
				margin: auto;
				&>span{
					text-align: center;
					line-height: 55px;
					display: block;
					width: 160px;
					font-size: 18px;
					height: 60px;
					color: #fff;
					background: url(../../assets/img/gr/btn.png) no-repeat 0 0;
					background-size: 100% 100%;
					margin: auto;
				}
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
				background-size: 100% 100%;
			}
		}
		.bgs{
			.main{
				top: 20%;
				background-size: 100% 100%;
			}
		}
	}
	
</style>
