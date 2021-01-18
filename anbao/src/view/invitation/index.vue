<template>
	<div class="view_invitation">
		<div class="h_bg">
			<div class="top">
				<img src="../../assets/img/index/13.png" alt="">
				<img src="../../assets/img/index/5.png" alt="">
				<img src="../../assets/img/index/1.png" alt="">
				<img v-clicked src="../../assets/img/invitation/4.png" alt="">
			</div>
			<div class="main">
				<img class="bg" src="../../assets/img/invitation/3.png" alt="">
				<div class="cc">
					<p class="t">邀请函</p>
					<img class="x" src="" alt="">
					<p class="n">昵称昵称</p>
					<p class="y">邀请你加入</p>
					<p class="q">群组管理</p>
					<img class="f" v-clicked src="../../assets/img/invitation/2.png" alt="">
				</div>
			</div>
			
			<img class="back" v-clicked src="../../assets/img/invitation/6.png" alt="">
		</div>
		
	</div>
</template>

<script>
</script>

<style lang="less" scoped="scoped">
	.view_invitation{
		width: 100%;
		height: 100vh;
		overflow: hidden;
		background: url(../../assets/img/invitation/0.png) no-repeat 0 0;
		background-size: 100% 100%;
		.h_bg{
			height: 100%;
			width: 100%;
			background-color: rgba(0,0,0,0.3);
		}
		.top{
			text-align: center;
			padding: 20px;
			position: relative;
			img{
				display: inline-block;
			}
			img:first-child{
				width: 80px;
			}
			img:nth-child(2){
				width: 80px;
			}
			img:nth-child(3){
				width: 220px;
				display: block;
				margin: auto;
			}
			img:nth-child(4){
				position: absolute;
				right: 20px;
				top: 30px;
				width: 80px;
			}
			
		}
		
		.main{
			padding-top: 15vh;
			position: relative;
			.bg{
				display: inline-block;
				transform: rotate(-90deg);
				height: 80vw;
			}
			.cc{
				position: absolute;
				top: 10.5vh;
				left: 13%;
				width: 74%;
				font-size: 16px;
				text-align: center;
				.t{
					text-align: center;
					font-size: 22px;
				}
				.x{
					display: block;
					margin: auto;
					width: 60px;
					height: 60px;
					background-color: #ccc;
					margin-top: 20px;
				}
				.n{
					color: #71BEF9;
					padding-top: 15px;
				}
				.y{
					color: #634E38;
					padding: 10px 0;
				}
				.q{
					color: red;
				}
				.f{
					display: block;
					width: 60px;
					margin: auto;
					margin-top: 10px;
				}
				
			}
		}
		
		.back{
			position: absolute;
			bottom: 5%;
			left: 50%;
			transform: translateX(-50%);
			width: 130px;
		}
	}
</style>
