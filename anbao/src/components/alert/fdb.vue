<template>
	<transition name="sc" mode="out-in">
		<div v-if="value" class="g_fdb" @click="$emit('input',false)">
		<div class="main" @click.stop>

			<div class="cc">
				<img src="../../assets/img/fdb/0.png" alt="" class="b">
				<img class="a" src="../../assets/img/fdb/11.png" alt="">
				<p class="ts">请注意您的等级和防作弊的内容是否一致！！！！！</p>
				<b class="close" @click="$emit('input',false)">关闭</b>
				<ul class="nr">
					<li>
						<span>当前等级</span>
						<p>1级</p>
					</li>
					<li>
						<span>防作弊内容</span>
						<p>的哈哈的</p>
					</li>
				</ul>
			</div>

			<div class="lj">
				<div>
					<p>新海路玩永久链接</p>
					<p>http://web.ig2ozhv.cn/</p>
				</div>
				<span @click="copy" class="tag-read"></span>
			</div>

		</div>
	</div>
	</transition>
</template>

<script>
	export default {
		name: 'fdb',
		data() {
			return {

			}
		},
		props:{
		    value:{
		        default:false,
		        type:Boolean
		    }
		},
		methods: {
			copy() {
				var clipboard =new this.$copy('.tag-read', {
					text: () =>{
						return '1312313'
					}
				})
				clipboard.on('success', e => {
					
					// 释放内存  
					clipboard.destroy()
				})
				clipboard.on('error', e => {
					// 不支持复制  
					console.log('该浏览器不支持自动复制')
					// 释放内存  
					clipboard.destroy()
				})
			},
		}
	}
</script>

<style lang="less">
	.g_fdb {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 1000;
		background-color: rgba(0, 0, 0, 0.5);

		.main {
			position: absolute;
			top: 50%;
			left: 10%;
			width: 80%;
			color: #fff;
			transform: translateY(-50%);

			.cc {
				background: url(../../assets/img/fdb/38.png) 0 0 no-repeat;
				background-size: 100% 100%;
				position: relative;
				padding-bottom: 30px;

				&>.a {
					display: block;
					width: 90%;
					margin: auto;
					transform: translateY(-40px);
				}

				&>.b {
					position: absolute;
					top: -40px;
					left: 50%;
					width: 100px;
					transform: translateX(-50%) translateY(-100%);
					z-index: 10;
				}

				&>.ts {
					position: absolute;
					bottom: 13px;
					left: 10%;
					width: 80%;
					color: #fff;
					font-size: 20px;
				}

				&>.close {
					position: absolute;
					right: 15px;
					top: 15px;
					font-size: 20px;
				}

				.nr {
					position: absolute;
					top: 12%;
					left: 50%;
					width: 40%;
					text-align: center;
					font-size: 18px;
					transform: translateX(-50%);

					li {
						margin-bottom: 10px;

						p {
							margin-top: 10px;
							background-color: #000;
							border-radius: 5px;
							text-align: center;
							padding: 5px 0;
						}
					}
				}
			}

			.lj {
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				border-radius: 10px;
				padding: 15px;
				transform: translate(0, 110%);
				background: url(../../assets/img/fdb/44.png) 0 0 no-repeat;
				background-size: 100% 100%;
				display: flex;

				&>div {
					display: inline-block;
					width: 70%;

					p:first-child {
						color: #FFEE92;
						font-size: 24px;
						text-align: center;
						margin-bottom: 5px;
					}

					p:last-child {
						background: url(../../assets/img/fdb/44.png) 0 0 no-repeat;
						background-size: 100% 100%;
						font-size: 20px;
						padding: 10px;
					}
				}

				&>span {
					flex: 1;
					background: url(../../assets/img/fdb/34.png) no-repeat 0 0;
					background-size: 100% 100%;
					margin: 5px 10px;
				}
			}
		}
	}
</style>
