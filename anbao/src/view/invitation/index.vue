<template>
	<div class="view_invitation">
		<div class="top">
			<img src="../../assets/img/index/13.png" alt="">
			<img src="../../assets/img/index/5.png" alt="">
			<img src="../../assets/img/index/1.png" alt="">
			<img v-clicked src="../../assets/img/invitation/4.png" alt="">
		</div>
		<div class="main">
			<img class="bg" src="../../assets/img/invitation/3.png" alt="">
			<div class="cc">
				<p>邀请函</p>
				<img src="" alt="">
				<p>昵称昵称</p>
				<p>邀请你加入</p>
				<p>群组管理</p>
				<img src="../../assets/img/invitation/2.png" alt="">
			</div>
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
				&>p{
					text-align: center;
					font-size: 22px;
				}
			}
		}
		
	}
</style>
