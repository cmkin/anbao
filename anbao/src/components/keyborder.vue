<template>
	<div class="g_keyboder">
		<div class="num">
			{{num}}
		</div>
		<ul class="ls clearfix">
			<li :class="item.id==12?'i':''" v-clicked @click="change(item)" v-for="item in datas" v-html="item.text">
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'keyborder',
		data(){
			return{
				num:'',
				datas:[]
			}
		},
		mounted() {
			let datas = []
			for(let i = 0 ; i<9;i++){
				datas.push({
					id:i+1,
					text:i+1
				})
			}
			datas.push({
				id:10,
				text:"重输"
			})
			datas.push({
				id:11,
				text:0
			})
			let img = require('../assets/img/fdb/1.png')
			datas.push({
				id:12,
				text:`<img  src="${img}" />`
			})
			
			this.datas = datas
		},
		methods:{
			change(item){
				if((item.id<=9 || item.id==11) && this.num.length<6){
					this.num += item.text
					return
				}
				if(item.id==10){
					this.num=''
				}
				if(item.id==12){
					this.num = this.num.substring(0,this.num.length-1)
				}
				
				if( this.num.length==6){
					this.$emit('ok',this.num)
					return
				}
				
			}
		}
	}
</script>

<style lang="less">
	.g_keyboder{
		padding: 10px;
		box-sizing: border-box;
		.num{
			border-bottom: 1px solid #99AFF1;
			padding: 10px 30px;
			font-size: 36px;
			text-align: center;
			font-weight: bold;
			width: 100%;
			min-height: 70px;
			box-sizing: border-box;
			letter-spacing: 20px;
		}
		.ls{
			margin-top: 30px;
			border-radius: 10px;
			overflow: hidden;
			border-top: 1px solid #BBA285;
			border-left: 1px solid #BBA285;
			li{
				background-color: #E9D2AD;
				width: 33%;
				text-align: center;
				float: left;
				padding: 10px 0;
				font-size: 30px;
				color: #857573;
				height: 60px;
				box-sizing: border-box;
				border-right: 1px solid #BBA285;
				border-bottom: 1px solid #BBA285;
				img{
					display: block;
					width: 100%;
					height: 100%;
				}
			}
			.i{
				padding: 0;
			}
		}
	}
</style>
