<template>
	<view class="content">
		<view class="hearder">
			<view class="title">XXXXXXXXXXXXXXXXXXX</view>
			<view class="auther">
				<span>2020-09-10 10:25</span>
				<span>来源：省自考办公室</span>
			</view>
		</view>
		<view class="section">
			<image class="img" src="../../../static/section.jpg" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods:{},
		onShareAppMessage() {
			return{
				title: '郑州大学自考专业列表',
				path: './index/index',
				imageUrl: '../../../static/section.jpg'
			}
		}
	}
</script>

<style lang="scss" scoped>
	.hearder{
		width: 90%;
		margin: auto;
		padding: 1rem 0rem;
		display: flex;
		flex-flow: column;
		justify-content: space-between;
		.title{
			font-size: 1.2rem;
			color: #303133;
			word-wrap: normal;
		}
		.auther{
			color: #909399;
			font-size: 0.8rem;
			display: flex;
			justify-content: space-between;
			margin-top: 0.5rem;
		}
	}
	.section{
		width: 90%;
		margin: auto;
		margin-bottom: 1rem;
		.img{
			width: 100%;
			border-radius: 10rpx;
		}
	}
</style>