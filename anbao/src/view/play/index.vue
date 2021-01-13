<template>
	<div class="view_play">
		<img class="bg" :src="bgList[bgActive]" alt="">
		<div class="main">
			<div class="tops"></div>
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
				
				<div class="can" id="can">
					<canvas id="game" style=""></canvas>
				</div>
				
				
			</div>
			<div class="res_list"></div>
			
			<div class="cm_list">
				<span v-for="item,index in cmList">
					<img @click="changeCm($event,index)" v-clicked :class="cmActive==index?'active':''" :src="item" alt="">
				</span>
			</div>
			
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
					require("_a/img/others/00.png")
				],
				cmList:[
					require("_a/img/others/v.png"),
					require("_a/img/others/bb-vb.png"),
					require("_a/img/others/njhjj.png"),
					require("_a/img/others/nbb.png")
				],
				cmposition:{
					top:"70%",
					left:"20%"
				},
				cmActive:0,
				ctx:null
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
						dramImg(require("../../assets/img/others/23.png"),(res3)=>{
							ctx.drawImage(res3,width*0.38,width*0.38,width*0.25,width*0.25);
						})
					})
				})
				
				
							
					
			},
			fglist(w){
				
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
						this.ctx.strokeStyle="transparent"
						this.ctx.fillStyle="transparent"
						this.ctx.fill(path)
						this.ctx.stroke(path)
						this.ctx.closePath()
				})

				document.getElementById("game").addEventListener('click',  (e) =>{
					var bbox = document.getElementById("game").getBoundingClientRect();
						paths.forEach(item=>{
							let x =  e.layerX-bbox.left
							let y =  e.layerY-bbox.top
							 if(this.ctx.isPointInPath(item.path,x,y)){
								 console.log(item.id)
								 console.log(e)
								 let aimg = document.querySelector(".animate")
								 	aimg.style.opacity = 1
								 	aimg.style.top = e.clientY+"px"
								 	aimg.style.left = e.clientX+"px"
								 
								 setTimeout(()=>{
									 aimg.style.opacity = 0
									 dramImg(this.cmList[this.cmActive],(res)=>{
									 	this.ctx.drawImage(res,x,y,25,25);
									 })
									 setTimeout(()=>{
										 aimg.style.top = this.cmposition.top
										 aimg.style.left = this.cmposition.left
									 },500)
								 },500)
							 }
						})	
				})
				
				
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
		.animate{
			position: fixed;
			top: 70%;
			left: 20%;
			opacity: 0;
			z-index: 100;
			transition: all 0.5s;
			width:25px;
		}
		.main{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			.play{
				position: relative;
				
				.can{
					text-align: center;
					width: 70%;
					margin: auto;
					canvas{
						display: block;
					}
				}
			}
			
			.cm_list{
				display: flex;
				width: 60%;
				margin: auto;
				padding-top: 40px;
				span{
					flex: 1;
					text-align: center;
					position: relative;
					img{
						width: 35px;
					}
					&>img{
						display: inline-block;
						position: relative;
						z-index: 10;
					}
					.active{
						position: relative;
						top: -1px;
						width: 40px;
					}
				}
			}
			
		}
	}
	
</style>
