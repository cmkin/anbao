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
				<!-- <div class="pan">
					<img src="../../assets/img/others/2.png" alt="">
					<img src="../../assets/img/others/6.png" alt="">
					<img src="../../assets/img/others/8.png" alt="">
				</div>
				<div class="zw" v-if="false">
					<div class="top">
						<img src="../../assets/img/others/8.png" alt="">
					</div>
				</div> -->
				<div class="z">
					<img src="../../assets/img/others/12.png" alt="">
					<span>30</span>
				</div>
				<div class="can" id="can">
					<canvas id="game" style=""></canvas>
				</div>
				
				
			</div>
			<div class="res_list"></div>
			
			
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
					<span>0</span>
					<span>停止下注</span>
				</div>
				<span v-for="item,index in cmList">
					<img @click="changeCm($event,index)" v-clicked :class="cmActive==index?'active':''" :src="item" alt="">
				</span>
			</div>
			
			
			<div class="zw_left">
				<span :style="{height:getwh(12,0)}" v-for="item in 12">
					<img src="../../assets/img/others/3.png" alt="" >
				</span>
			</div>
			<div class="zw_left zw_right">
				<span :style="{height:getwh(12,0)}" v-for="item in 12">
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
		
		<img :src="cmList[cmActive]" alt=""  class="animate">
		
	</div>
</template>

<script>
	import {dramImg} from './uitl'
	import {fgList,qyList} from './fg'
	export default {
		data(){
			return{
				bgActive:0,
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
				cmposition:{
					top:"70%",
					left:"20%"
				},
				cmActive:0,
				ctx:null,
				fgOpacty:0.1,
				paths:[]
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
			
		},
		methods:{
			init(){
				
				let canvas = document.getElementById("game")
				let width = document.querySelector("#can").offsetWidth
					canvas.width = width
					canvas.height = width
				let ctx=canvas.getContext("2d");
				this.ctx=ctx
				
			
				dramImg(require("../../assets/img/others/2.png"),(res)=>{
					ctx.drawImage(res,0,0,width,width);
					this.fglist(width)
					this.qyList(0)
					dramImg(require("../../assets/img/others/6.png"),(res2)=>{
						ctx.drawImage(res2,width*0.25,width*0.25,width*0.5,width*0.5);
						dramImg(require("../../assets/img/others/8.png"),(res3)=>{
							ctx.drawImage(res3,width*0.38,width*0.38,width*0.25,width*0.25);
						})
						setTimeout(()=>{
							this.centerOpen()
						},2000)
						
					})
				})
				
				
							
					
			},
			
			fglist(w){
				
				this.fgtc(w)

				document.getElementById("game").addEventListener('click',  (e) =>{
					var bbox = document.getElementById("game").getBoundingClientRect();
						this.paths.forEach((item,index)=>{
							let x =  e.layerX-13//-bbox.left
							let y =  e.layerY-13//-bbox.top
							 if(this.ctx.isPointInPath(item.path,x,y)){
								 console.log(item.id)
								 console.log(e)
								 
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
										 aimg.style.top = e.clientY-13+"px"
										 aimg.style.left = e.clientX-13+"px"
										 
										 setTimeout(()=>{
										 	document.querySelectorAll(".view_play .animate").forEach(tt=>{
												tt.remove()
											})
										 	 dramImg(this.cmList[this.cmActive],(res)=>{
										 	 	this.ctx.drawImage(res,x,y,25,25);
										 	 })
										  },500)
									 }
								 	
								 
								
							 }
						})	
				})
				
				
			},
			fgtc(w){
				let paths = []
				this.ctx.beginPath()
				fgList.forEach(item=>{
						let path = new Path2D();
						item.position.forEach((tt,ti)=>{
							path.lineTo(tt[0]/290*w,tt[1]/290*w);
						}) 
						paths.push({
							path,
							id:item.id
						})
						this.ctx.strokeStyle=item.background?`rgba(${item.background},${this.fgOpacty})`:"transparent"
						this.ctx.fillStyle=item.background?`rgba(${item.background},${this.fgOpacty})`:"transparent"
						this.ctx.fill(path)
						this.ctx.stroke(path)
						this.ctx.closePath()
				})
				this.paths = paths
				if(this.fgOpacty<0.4){
					setTimeout(()=>{
						this.fgOpacty = this.fgOpacty+0.1
						this.fgtc(w)
					},1000)
				}else{
					
				}
				
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
								this.ctx.drawImage(res3,width*0.38,width*0.38,width*0.25,width*0.25);
								this.ctx.clearRect(width*left,width*0.38,width*0.25,width*0.25);
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
				let aimg = document.querySelector(".animate")
					aimg.style.opacity = 0
					aimg.style.top = e.clientY +'px'
					aimg.style.left = e.clientX +'px'
				console.log(e)
			},
			qyList(id){
				let paths = []
				let w = document.querySelector("#can").offsetWidth
				this.ctx.beginPath()
				qyList.filter(item=>item.id==id).forEach(item=>{
						let path = new Path2D();
						item.position.forEach((tt,ti)=>{
							path.lineTo(tt[0]/290*w,tt[1]/290*w);
						}) 
						paths.push({
							path,
							id:item.id
						})
						this.ctx.strokeStyle="#fff"
						this.ctx.fillStyle="red"
						this.ctx.fill(path)
						this.ctx.stroke(path)
						this.ctx.closePath()
				})
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
						display: inline-block;
					}
					i:first-child{
						width: 60px;
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
					canvas{
						display: block;
					}
				}
			}
			.res_list{
				width: 50%;
				left: 25%;
				margin: auto;
				position: fixed;
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
			.cm_list{
				display: flex;
				width: 60%;
				left: 20%;
				margin: auto;
				position: fixed;
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
				top: 30px;
				left: 0;
				padding-left: 3px;
				box-sizing: border-box;
				&>span{
					display: block;
					width: 70%;
					margin: auto;
					img{
						display: block;
						width: 100%;
						height: 45px;
					}
				}
			}
			.zw_right{
				left: auto;
				right: 0;
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
	
</style>
