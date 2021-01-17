<template>
	<div class="view_zx">
		<diglogx v-model="show">
			<template v-slot:content>
				<div class="cc">
					<p>咨询代理，游戏问题，请添加以下官方客服</p>
					<div class="code">
						<img src="" alt="">
						<img src="" alt="">
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
				show:true
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.view_zx{
		.cc{
			padding: 15px;
			&>p{
				color: red;
				font-size: 18px;
			}
			.code{
				padding-bottom: 20px;
				img{
					display: block;
					width: 50vw;
					height: 50vw;
					background: #ccc;
					margin: auto;
					margin-top: 20px;
				}
			}
		}
	}
</style>
<style lang="less">
	.view_zx{
		.d_wrap{
			display: none;
		}
		.main{
			.tops{
				&>img{
					display: none;
				}
			}
		}
	}
</style>
