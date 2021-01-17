<template>
	<div class="view_mine">
		<diglogx v-model="show" class="mm">
			<template v-slot:content>
				<div class="cc">
					<ul>
						<li @click="itemClick(item)" class="clearfix" v-for="item in lists">
							<img :src="item.img" alt="">
							<span v-html="item.text"></span>
							<van-switch style="float: right;margin-top: 5px;" v-if="item.id==6" active-color="#8DE04A" v-model="checked" />
							<img v-else src="../../assets/img/gr/25.png" alt="">
						</li>
					</ul>
					<div class="os" v-if="checked">
						<span @click="osClick(item)" v-clicked v-for="item in oslist">
							<img :src="item.img" alt="">
							<i v-html="item.text"></i>
						</span>
					</div>
				</div>
			</template>
		</diglogx>
		
		
		<diglogx v-model="fks" >
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
		
		
		<diglogx v-model="sendFk" >
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
							<span>接收者ID</span>
							<input type="number">
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
		
		<diglogx v-model="sfjl" >
			<template v-slot:content>
				<div class="sfjl">
					<div class="btns">
						<van-button type="info">发送</van-button>
						<van-button type="info">收到</van-button>
						<van-button type="info">赠送</van-button>
					</div>
					<ul>
						<li v-for="item in 5">
							<div>
								<i>房卡包</i>
								<i>10张</i>
							</div>
							<div>
								<i>2021-01-17 14;26:22</i>
								<i :class="item == 2 ?'n':''">已领取</i>
							</div>
						</li>
					</ul>
				</div>
			</template>
		</diglogx>
		
		
		<diglogx v-model="smrz" >
			<template v-slot:content>
				<div class="smrz">
					<p>建议您填写防沉迷信息，以便获取更好的网络服务，填写后无法更改，请确认信息正确</p>
					<ul>
						<li>
							<span>姓名</span>
							<input type="text" placeholder="请输入姓名">
						</li>
						<li>
							<span>身份证</span>
							<input type="text" placeholder="请输入身份证号码">
						</li>
					</ul>
					<div class="btns">
						<span v-clicked>发送房卡</span>
					</div>
				</div>
			</template>
		</diglogx>
		
		
		<diglogx v-model="pjjl" >
			<template v-slot:content>
				<div class="pjjl">
					<div class="btns">
						<van-button type="info">我对局的游戏</van-button>
						<van-button type="info">我创建的游戏</van-button>
					</div>
					<div class="lists">
						<ul class="clearfix" :style="{width:35*10+'vw'}">
							<li v-clicked @click="pactive=item" :class="item==pactive?'active':''" v-for="item in 10">
								<img src="../../assets/img/1.png" alt="">
							</li>
						</ul>
					</div>
				
				</div>
			</template>
		</diglogx>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				show:true,
				checked:true,
				fks:false,
				sendFk:false,
				sfjl:false,
				smrz:false,
				pjjl:false,
				pactive:1,
				lists:[
					{
						img:require("_a/img/gr/5.png"),
						text:'<span style="color:red">[进入未完成游戏房间]</span>',
						id:0
					},
					{
						img:require("_a/img/gr/4.png"),
						text:'发送房卡',
						id:1	
					},
					{
						img:require("_a/img/gr/4.png"),
						text:'输入ID送房卡',
						id:2	
					},
					{
						img:require("_a/img/gr/5.png"),
						text:'收发记录',
						id:3
					},
					{
						img:require("_a/img/gr/18.png"),
						text:'实名认证',
						id:4
					},
					{
						img:require("_a/img/gr/12.png"),
						text:'牌局记录',
						id:5
					},
					{
						img:require("_a/img/gr/17.png"),
						text:'群主管理',
						id:6
					},
				],
				oslist:[
					{
						img:require("_a/img/gr/21.png"),
						text:'邀请成员',
						id:0
					},
					{
						img:require("_a/img/gr/3.png"),
						text:'群主成员',
						id:1
					},
					{
						img:require("_a/img/gr/11.png"),
						text:'结束续局',
						id:2
					},
				]
			}
		},
		methods:{
			itemClick(item){
				switch(item.id){
					case 1:
						this.fks = true
					break;
					case 2:
						this.sendFk = true
					break;
					case 3:
						this.sfjl = true
					break;
					case 4:
						this.smrz = true
					break;
					case 5:
						this.pjjl = true
					break;
				}
			},
			osClick(item){
				switch(item.id){
					case 0:
						this.$router.push('/invitation')
					break;
				}
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.view_mine{
		.cc{
			padding: 15px;
			
			ul{
				li{
					padding: 10px;
					margin-bottom: 10px;
					background: url(../../assets/img/gr/19.png) no-repeat 0 0;
					background-size: 100% 100%;
					&>img:first-child{
						display: inline-block;
						height: 40px;
						float: left;
					}
					&>span{
						float: left;
						padding-left: 20px;
						font-size: 22px;
						padding-top: 5px;
					}
					&>img:last-child{
						float: right;
						width: 20px;
						margin-top: 5px;
						margin-left: 10px;
					}
				}
			}
			
			.os{
				background-color: #C7CFF9;
				display: flex;
				border-radius: 10px;
				padding: 5px;
				span{
					flex: 1;
					text-align: center;
					img{
						display: block;
						width: 40px;
						margin: auto;
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
				li:last-child,li:nth-child(3){
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
		
		.sfjl{
			.btns{
				
				border-radius: 20px;
				overflow: hidden;
				margin: 10px 30px;
				display: flex;
				button{
					flex: 1;
				}
				button:nth-child(2){
					margin: 0 5px;
				}
			}
			
			ul{
				border-top: 1px solid #99AFF1;
				padding: 10px 0;
				li{
					background-color: #DFE7FF;
					border-radius: 10px;
					padding: 10px;
					margin: 0 20px;
					margin-bottom: 10px;
					div{
						margin-bottom: 5px;
						font-size: 16px;
						i:last-child{
							float: right;
						}
						.n{
							color: #ECA69A;
						}
					}
				}
			}
		}
		
		.smrz{
			padding-bottom: 5px;
			&>p{
				padding: 20px;
				font-size: 22px;
				padding-bottom: 10px;
				border-bottom: 1px solid #B8C5FA;
			}
			ul{
				padding: 20px 0;
				padding: 20px;
				li{
					margin-bottom: 10px;
					span{
						display: block;
						padding-left: 30px;
						font-size: 22px;
						padding-bottom: 10px;
					}
					input{
						display: block;
						width: 100%;
						padding: 10px;
						background-color: #DFE7FF;
						border-radius: 20px;
						box-sizing: border-box;
						border: none;
						font-size: 20px;
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
		
		.pjjl{
			overflow: hidden;
			padding-bottom: 30px;
			.btns{
				
				border-radius: 20px;
				overflow: hidden;
				margin: 10px 30px;
				display: flex;
				button{
					flex: 1;
				}
				button:nth-child(2){
					margin-left: 5px;
				}
			}
			.lists{
				width: 92%;
				overflow-x: auto;
				padding: 20px 0;
				margin: 0 20px;
				box-sizing: border-box;
				border-top: 1px solid #9099F8;
				border-bottom: 1px solid #9099F8;
				ul{
					li{
						float: left;
						width: 30vw;
						border-radius: 20px;
						border: 5px solid transparent;
						box-sizing: border-box;
						margin-right: 5vw;
						img{
							display: block;
							width: 100%;
						}
					}
					.active{
						border-color: #9099F8;
					}
				}
			}
		}
	}
</style>
<style lang="less">
	.view_mine{
		.mm{
			.d_wrap{
				display: none;
			}
			.main{
				padding-bottom: 20px;
				z-index: 998;
				.tops{
					&>img{
						display: none;
					}
				}
				.content{
					padding-top: 10px;
					max-height: 68vh;
					overflow-y: auto;
					
				}
			}
		}
		.bgs{
			
		}
	}
</style>
