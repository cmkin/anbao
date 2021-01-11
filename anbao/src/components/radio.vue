<template>
	<div class="g_radio">
		<ul class="clearfix">
			<li class="clearfix" @click="change(item)" v-for="item in lists" :class="item.id==value?'active':''">
				<span>
					<img v-clicked src="../assets/img/btns/5.png" alt="">
					<img v-clicked  src="../assets/img/btns/10.png" alt="">
				</span>
				<i v-html="item.text"></i>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"radiox",
		data(){
			return {
				
			}
		},
		props:{
			value:{},
			lists:{}
		},
		methods:{
			change(item){
				this.$emit('input',item.id)
			}
		}
	}
</script>

<style lang="less">
	.g_radio{
		display: inline-block;
		width: 100%;
		ul{
			width: 100%;
			li{
				float: left;
				padding-left: 5px;
				margin-right: 10px;
				margin-bottom: 5px;
				span{
					float: left;
					img{
						display: inline-block;
						width: 22px;
					}
					img:last-child{
						display: none;
					}
				}
				i{
					float: left;
					margin-left: 5px;
					padding-top: 1px;
					font-size: 15px;
				}
			}
			.active{
				span{
					img{
						display: inline-block;
						animation: sc linear 0.3s 1;
					}
					img:first-child{
						display: none;
					}
					img:last-child{
						display: inline-block;
					}
				}		
			}
		}
	}
 @keyframes sc{
	 0%{
		transform: scale(1); 
	 }
	 50%{
		 transform: scale(1.1);
	 }
	 100%{
	 		 transform: scale(1);
	 }
 }
</style>
