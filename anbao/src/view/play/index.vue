<template>
	<div class="view_play">
		<img class="bg" :class="bgActive>1?'tra':''" :src="bgList[bgActive]" alt="">
		<div class="main">
			<div class="tops">
				<span>固定庄家</span>
				<div>
					<i>0/12局</i>
					<i>上限:1000</i>
				</div>
				<span></span>
			</div>
			<div class="play">
				<div class="z">
					<img src="../../assets/img/others/12.png" alt="">
					<span>30</span>
				</div>
				
				<div class="can" id="can">
					<canvas id="game" v-show="playflag"></canvas>
					<img  v-show="playflag" src="../../assets/img/others/6.png" alt="">
					<canvas id="zgame" v-show="!playflag"></canvas>
				</div>
				
				
			</div>
			
			<div v-if="playflag">
			<div class="res_list">
				<div class="clearfix">
					<img v-for="item in 5" src="../../assets/img/others/l.png" alt="">
				</div>
				<div class="clearfix">
					<img v-for="item in 5" src="../../assets/img/others/hu.png" alt="">
				</div>
			</div>
			
			<div class="cm_list">
				<div class="btns">
					<span v-clicked>0</span>
					<span v-clicked @click="playflag = !playflag">停止下注</span>
				</div>
				<span v-for="item,index in cmList">
					<img @click="changeCm($event,index)" v-clicked :class="cmActive==index?'active':''" :src="item" alt="">
				</span>
			</div>
			</div>
			<div v-else>
				<div class="zj_action">
					<div class="btns">
						<span v-clicked>确定</span>
						<span v-clicked @click="random"></span>
					</div>
				</div>
			</div>
			
			<div class="zw_left clearfix">
				<span :style="{height:getwh(12,0)}" v-for="item in 24">
					<img src="../../assets/img/others/3.png" alt="" >
				</span>
			</div>
			<div class="zw_left zw_right clearfix">
				<span :style="{height:getwh(12,0)}" v-for="item in 24">
					<img src="../../assets/img/others/3.png" alt="" >
				</span>
			</div>
			<div class="zw_top">
				<span :style="{height:getwh(6,1)}" v-for="item in 6">
					<img src="../../assets/img/others/3.png" alt="" >
				</span>
			</div>
			<div class="zw_top zw_bottom">
				<span :style="{height:getwh(6,1)}" v-for="item in 6">
					<img src="../../assets/img/others/3.png" alt="" >
				</span>
			</div>
			
		</div>
		
		<div class="fonter">
			<span :class="index==5?'zb':''" @click="changeMeun(index)" v-for="item,index in fontList">
				<img :src="item" alt="">
			</span>
		</div>
		
		
		<img v-if="resFlag" :src="resList[resActive]" alt="" class="res_animate">
		
	</div>
</template>

<script>
	import {dramImg} from './uitl'
	import {fgList,qyList,fourBlock} from './fg'
	export default {
		data(){
			return{
				playflag:true,
				randomFlag:true,
				bgActive:0,
				canvasWidth:0,
				bgList:[
					require("_a/img/others/00.png"),
					require("_a/img/others/0.png"),
					require("_a/img/others/11.png"),
					require("_a/img/others/33.png")
				],
				cmList:[
					require("_a/img/others/v.png"),
					require("_a/img/others/bb-vb.png"),
					require("_a/img/others/njhjj.png"),
					require("_a/img/others/gbggcvcv.png"),
					require("_a/img/others/nbb.png")
				],
				fontList:[
					require("_a/img/others/45.png"),
					require("_a/img/others/35.png"),
					require("_a/img/others/41.png"),
					require("_a/img/others/48.png"),
					require("_a/img/others/25.png"),
					require("_a/img/18.png"),
					require("_a/img/others/40.png"),
				],
				resList:[
					require("_a/img/others/h.png"),
					require("_a/img/others/x.png"),
					require("_a/img/others/zc.png")
				],
				resActive:0,
				resFlag:false,
				cmposition:{
					top:"70%",
					left:"20%"
				},
				cmActive:0,
				//wj
				ctx:null,
				fgOpacty:0.1,
				paths:[],
				//zj
				zCtx:null,
				zpaths:[],
				
			}
		},
		
		computed:{
			getwh(){
				return function(num,type){
					if(type==0){
						return (screen.height - 80 ) / num + 'px'
					}
					
				}
			}
		},
		
		mounted() {
			this.init()
			this.zinit(this.fourBlock)
			setTimeout(()=>{
				//this.resFlag = true
			},2000)
		},
		methods:{
			//wj
			init(){
				
				let canvas = document.getElementById("game")
				let width = document.querySelector("#can").offsetWidth
					canvas.width = width
					canvas.height = width
				let ctx=canvas.getContext("2d");
				this.ctx=ctx
				this.canvasWidth = width
				
				
				
				dramImg(require("../../assets/img/others/8.png"),(res3)=>{
					ctx.drawImage(res3,width*0.38,width*0.38,width*0.25,width*0.25);
					
					this.fglist()
					
					setTimeout(()=>{
						this.centerOpen()
						//this.activeFg(1)
					},2000)
				})
			
					
			},
			
			fglist(){
				let w = document.querySelector("#can").offsetWidth
				
				let paths = []
				this.ctx.beginPath()
				fgList.forEach(item=>{
						let path = new Path2D();
						item.position.forEach((tt,ti)=>{
							path.lineTo(tt[0]/290*w,tt[1]/290*w);
						}) 
						paths.push({
							path,
							id:item.id,
							position:item.position,
							imgPosition:item.imgPosition
						})
						this.ctx.strokeStyle="transparent"
						this.ctx.fillStyle="transparent"
						this.ctx.fill(path)
						this.ctx.stroke(path)
						this.ctx.closePath()
						
				})
				this.paths = paths
				this.activeFg()
				document.getElementById("game").addEventListener('click',  (e) =>{
					var bbox = document.getElementById("game").getBoundingClientRect();
						
						this.paths.forEach((item,index)=>{
							let x =  e.layerX//-bbox.left
							let y =  e.layerY//-bbox.top
								
								
							 if(this.ctx.isPointInPath(item.path,x,y)){
								 //console.log(item.id)
								 //console.log(e)
								 //console.log(x)
								 
								 var getbl = (value)=>{
									 return value/290*w
								 }
								 if(item.id<30){
									 if(x<getbl(item.imgPosition.x.min)){
									 	x =getbl(item.imgPosition.x.min) 
									 }
									 if(x>getbl(item.imgPosition.x.max)){
									 	x = getbl(item.imgPosition.x.max)
									 }
									 if(y<getbl(item.imgPosition.y.min)){
									 	y =getbl(item.imgPosition.y.min) 
									 }
									 if(y>getbl(item.imgPosition.y.max)){
									 	y = getbl(item.imgPosition.y.max)
									 }
								 }else{
									 console.log(y,item.id)
									let obj = item.imgPosition.filter(item=>{
										return y>=item.y[0] &&  y<=item.y[1]
									})[0]
									console.log(obj)
									y = obj.y[0]+5
									
									if(x<getbl(obj.x[0])){
										x = getbl(obj.x[0])
									}
									if(x>getbl(obj.x[1])){
										x = getbl(obj.x[1])
									}	
								 }
								 
								 let aimg = new Image() //document.querySelector(".animate")
								 let id  = "id"+index
									 aimg.src = this.cmList[this.cmActive]
									 aimg.id = id
									 aimg.className="animate"
									 aimg.style.top = this.cmposition.top
									 aimg.style.left = this.cmposition.left
									 document.querySelector(".view_play").appendChild(aimg)
									
									 aimg.onload=()=>{
										 aimg.style.opacity = 1
										 aimg.style.transition = "all 0.5s"
										 aimg.style.top = e.clientY+"px"
										 aimg.style.left = e.clientX+"px"
										 
										 setTimeout(()=>{
											 let allimg = document.querySelectorAll(".view_play .animate")
										 	allimg.forEach((tt,ti)=>{
													tt.remove()
											})
										 	 dramImg(this.cmList[this.cmActive],(res)=>{
										 	 	this.ctx.drawImage(res,x,y,getbl(25),getbl(25));
										 	 })
										  },500)
									 }
								 	
								 
								
							 }
						})	
				})
				
				
			},
			
			//选中动画
			activeFg(type=0){
				//type 0 选中  ， 1 清除
				let w = document.querySelector("#can").offsetWidth
				//let active = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,30,31,32,33]
				let active = [0,1,3]
				this.paths.forEach(item=>{
					if(active.includes(item.id)){
						//item.position
						if(type==1){
							this.ctx.clearShape(item.position,w);
							return
						}
						let opacity = 0.1
					
						var animation = ()=>{
							requestAnimationFrame(()=>{
									opacity +=0.01
									this.ctx.clearShape(item.position,w);
									this.ctx.fillStyle=`rgba(247, 190, 183,${opacity})`
									//this.ctx.strokeStyle=`rgba(247, 190, 183,${opacity})`
									this.ctx.fill(item.path)
									this.ctx.stroke(item.path)
							    if(opacity<=0.7){
									animation();
								}
							});
						}
						animation()
					}
					
				})
			},
			
			//中间的动画
			centerOpen(){
			
				let width = document.querySelector("#can").offsetWidth
				let left = 0.38
				let img = new Image()
					img.src = require("../../assets/img/others/8.png")
					img.onload = () =>{
						let s = setInterval(()=>{
							if(left>=0.6){
								clearInterval(s)
							}
							
							dramImg(require("../../assets/img/others/23.png"),(res3)=>{
								this.ctx.clearRect(width*left,width*0.385,width*0.24,width*0.24);
								this.ctx.drawImage(res3,width*0.38,width*0.38,width*0.25,width*0.25);
								left +=0.003
								this.ctx.drawImage(img,width*left,width*0.38,width*0.25,width*0.25);
									
								
							})
							
						},10)
					}
				
				
			},
			
			changeCm(e,index){
				this.cmActive = index
				this.cmposition={
					top:e.clientY+'px',
					left:e.clientX+'px'
				}
				
				console.log(e)
			},
			
			
			changeMeun(index){
				switch(index){
					case 0:
						this.$router.push("/index")
					break;
					case 1:
						this.bgActive ++
						if(this.bgActive>3){
							this.bgActive =0
						}
					break;
				}
			},
			
			
			//zj
			zinit(callback){
				
				let canvas = document.getElementById("zgame")
				let width = document.querySelector("#can").offsetWidth
					canvas.width = width
					canvas.height = width
				let ctx=canvas.getContext("2d");
				this.zCtx=ctx
				callback?callback():''
				 /* dramImg(require("../../assets/img/others/23.png"),(res3)=>{
					ctx.drawImage(res3,width*0.4,width*0.4,width*0.2,width*0.2);
					 callback?callback():''
				}) 	 */		
				/* dramImg(require("../../assets/img/others/j.png"),(res)=>{
					ctx.drawImage(res,0,0,width,width);
					
				}) */
			},
			//四个区域
			fourBlock(){
				let w = document.querySelector("#can").offsetWidth
				let paths = []
				this.zCtx.beginPath()
				fourBlock.forEach(item=>{
						let path = new Path2D();
						item.position.forEach((tt,ti)=>{
							path.lineTo(tt[0]/290*w,tt[1]/290*w);
						}) 
						paths.push({
							path,
							id:item.id,
							position:item.position
						})
						this.zCtx.strokeStyle="transparent"
						this.zCtx.fillStyle="transparent"
						this.zCtx.fill(path)
						this.zCtx.stroke(path)
						this.zCtx.closePath()
				})
				this.zpaths = paths
				
				
				document.getElementById("zgame").addEventListener('click',  (e) =>{
					var bbox = document.getElementById("zgame").getBoundingClientRect();
						this.zpaths.forEach((item,index)=>{
							let x =  e.layerX//-bbox.left
							let y =  e.layerY//-bbox.top
							
							this.zCtx.clearShape(item.position,w);
							
							 if(this.ctx.isPointInPath(item.path,x,y)){
								//填充
								let opacity = 0.1
								
								var animation = ()=>{
									requestAnimationFrame(()=>{
									    opacity +=0.02
									    this.zCtx.clearShape(item.position,w);
									    this.zCtx.fillStyle=`rgba(247, 190, 183,${opacity})`
									    this.zCtx.fill(item.path)
									    if(opacity<=0.5){
											animation();
										}
									});
								}
								animation()
								
								console.log(item.id)
								
								
							 }
						})	
				})
				
				
			},
			
			//random
			random(){
				if(!this.randomFlag){
					return
				}
				this.randomFlag = false
				setTimeout(()=>{
					this.randomFlag = true
				},1000)
				let id = fourBlock.map(item=>item.id)[Math.floor(Math.random()*fourBlock.length)]
				let w = document.querySelector("#can").offsetWidth
					this.zpaths.forEach((item,index)=>{
					
						this.zCtx.clearShape(item.position,w);
					
						 if(item.id == id){
							//填充
							let opacity = 0.1
							
							var animation = ()=>{
								requestAnimationFrame(()=>{
								    opacity +=0.02
								    this.zCtx.clearShape(item.position,w);
								    this.zCtx.fillStyle=`rgba(247, 190, 183,${opacity})`
								    this.zCtx.fill(item.path)
								    if(opacity<=0.5){
										animation();
									}
								});
							}
							animation()
							
							
						 }
					})	
					
			},
			centerRotate(){
				return
				let width = document.querySelector("#can").offsetWidth
				this.zCtx.clearRect(width*0.4,width*0.4,width*0.2,width*0.2);
				this.zCtx.rotate(90*Math.PI/180);
				 dramImg(require("../../assets/img/others/23.png"),(res3)=>{
					ctx.drawImage(res3,width*0.4,width*0.4,width*0.2,width*0.2);
					 callback?callback():''
				}) 
			}
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
		.tra{
			transform: rotate(180deg);
		}
		
		.main{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			.tops{
				background: url(../../assets/img/others/t.png) no-repeat 0 0;
				background-size: 100% 100%;
				width: 90%;
				margin: auto;
				padding: 14px 40px;
				box-sizing: border-box;
				color: rgba(255,255,255,0.7);
				span{
					display: inline-block;
				}
				div{
					display: inline-block;
					i{
						font-size: 12px;
						display: inline-block;
						text-align: left;
					}
					i:first-child{
						width: 50px;
					}
				}
				span:first-child{
					width: 80px;
				}
				span:last-child{
					width: 60px;
					height: 28px;
					position: relative;
					top: -4px;
					background: url(../../assets/img/others/g.png) no-repeat 0 0;
					background-size: 100% 100%;
					float: right;
				}
			}
			.play{
				position: relative;
				padding-top: 40px;
				.z{
					position: absolute;
					left: 50%;
					top: 0;
					transform: translate(-50%,-25%);
					img{
						display: block;
						width: 50px;
					}
					span{
						position: absolute;
						color: red;
						left: 50%;
						top: 50%;
						transform: translate(-50%,-30%);
						font-weight: bold;
						font-size: 20px;
					}
				}
				.can{
					text-align: center;
					width: 70%;
					margin: auto;
					position: relative;
					#zgame{
						background: url(../../assets/img/others/j.png) no-repeat 0 0;
						background-size: 100% 100%;
					}
					#game{
						background: url(../../assets/img/others/2.png) no-repeat 0 0;
						background-size: 100% 100%;
						position: relative;
						z-index: 10;
					}
					&>img{
						position: absolute;
						z-index: 1;
						width: 50%;
						height: 50%;
						left: 25%;
						top: 25%;
					}
				}
			}
			.res_list{
				width: 50%;
				left: 25%;
				margin: auto;
				position: absolute;
				bottom: 14%;
				div{
					background-color: rgba(0,0,0,0.5);
					margin-bottom: 5px;
					border-radius: 5px;
					padding: 5px;
					img{
						float: left;
						width: 19%;
						margin-left: 1%;
					}
				}
			}
			.zj_action{
				display: flex;
				width: 60%;
				left: 20%;
				margin: auto;
				position: absolute;
				bottom: 14%;
				.btns{
					position: absolute;
					bottom: 14%;
					left: 0;
					width: 100%;

					display: flex;
					span{
						flex: 1;
						height: 40px;
					}
					span{
						text-align: center;
						line-height: 40px;
						color: #fff;
						font-size: 18px;
						font-weight: bold;
						background: url(../../assets/img/others/14.png) no-repeat 0 0;
						background-size: 100% 100%;
					}
					span:last-child{
						margin-left: 20px;
						background: url(../../assets/img/others/kkg.png) no-repeat 0 0;
						background-size: 100% 100%;
					}
					
				}
			}
			.cm_list{
				display: flex;
				width: 60%;
				left: 20%;
				margin: auto;
				position: absolute;
				bottom: 14%;
				.btns{
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					transform: translateY(-150%);
					display: flex;
					span{
						flex: 1;
						height: 40px;
					}
					span{
						text-align: center;
						line-height: 40px;
						color: #fff;
						font-size: 18px;
						font-weight: bold;
						background: url(../../assets/img/others/14.png) no-repeat 0 0;
						background-size: 100% 100%;
					}
					span:last-child{
						margin-left: 20px;
					}
					
				}
				&>span{
					flex: 1;
					padding: 0 3px;
					text-align: center;
					position: relative;
					img{
						width: 100%;
					}
					&>img{
						display: inline-block;
						position: relative;
						z-index: 10;
					}
					.active{
						position: relative;
						top: -6px;
					}
				}
			}
			
			.zw_left{
				position: absolute;
				width: 15%;
				height: 85%;
				top: 45px;
				left: 0;
				padding-left: 3px;
				box-sizing: border-box;
				&>span{
					display: block;
					width: 40%;
					float: left;
					img{
						display: block;
						width: 100%;
						height: 35px;
					}
				}
				&>span:nth-child(2n){
					margin-left: 20%;
				}
			}
			.zw_right{
				left: auto;
				right: 2px;
			}
			.zw_top{
				position: absolute;
				top: 45px;
				width: 70%;
				left: 15%;
				display: flex;
				span{
					flex: 1;
					display: inline-block;
					height: 40px;
				}
				img{
					display: block;
					height: 100%;
					width: 90%;
					margin: auto;
				}
				span:nth-child(4){
					margin-left: 60px;
				}
			}
			
			.zw_bottom{
				top: calc( 50px + 51.5vh);
			}
		}
		.fonter{
			width: 100%;
			position: fixed;
			bottom: 0;
			left: 0;
			z-index: 1000;
			padding: 13px 10px;
			box-sizing: border-box;
			display: flex;
			background: url(../../assets/img/others/font.png) no-repeat 0 0;
			background-size: 100% 100%;
			span{
				flex: 1;
				img{
					display: block;
					width: 45px;
					margin: auto;
				}
			}
			.zb{
				img{
					width: 35px;
				}
			}
		}
	}
	
</style>
<style lang="less">
	.animate{
		position: fixed;
		top: 70%;
		left: 20%;
		opacity: 0;
		z-index: 100;
		transition: all 0.5s;
		width:25px;
	}
	.res_animate{
		position: fixed;
		bottom: 30%;
		width: 50%;
		left: 25%;
		z-index: 100;
		animation: resAni 2s linear 1;
	}
	@keyframes resAni{
		0%{
			opacity:0;
			transform: scale(1);
		}
		30%{
			opacity:0.3;
			transform: scale(1.03);
		}
		50%{
			opacity:0.5;
			transform: scale(1.05);
		}
		80%{
			opacity:0.8;
			transform: scale(1.08);
		}
		100%{
			opacity:1;
			transform: scale(1);
		}
	}
</style>
