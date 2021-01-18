<template>
	<div class="view_group">
		<div class="serach clearfix">
			<img @click="$router.go(-1)" v-clicked src="../../assets/img/invitation/back.png" alt="">
			<input type="text">
			<span v-clicked>搜索</span>
		</div>
		<div class="cy">
			群组成员(0人)
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
		mounted() {
			
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped="scoped">
	.view_group{
		width: 100%;
		height: 100vh;
		background-color: #283258;
		.serach{
			padding: 10px;
			box-sizing: border-box;
			width: 100%;
			img{
				float: left;
				width: 40px;
			}
			input{
				float: left;
				background-color: #DFE7FF;
				border: none;
				padding: 10px;
				border-radius: 20px;
				width: calc(90% - 150px);
				color: #283258;
				margin-left: 15px;
			}
			span{
				float: right;
				width: 100px;
				height: 36px;
				line-height: 36px;
				color: #fff;
				background: url(../../assets/img/gr/btnl.png) no-repeat 0 0;
				background-size: 100% 100%;
				text-align: center;
			}
		}
		
		.cy{
			background-color: #D1D1F7;
			padding: 10px;
			color: #fff;
			font-size: 16px;
		}
	}
</style>
