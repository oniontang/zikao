<template>
	<view class="content">
		<view class="card-list">
			<view class="card" @click="toDetails">
				<view class="text">
					<view class="contant">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</view>
					<view class="item">
						<span>{{subTitle}}</span>
						<span>来源：{{title}}</span>
					</view>
				</view>
				<image class="a-img" src="../../static/logo.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '标题',
				subTitle: '2020-05-15'
			}
		},
		onLoad() {
		
		},
		methods:{
			toDetails(){
				uni.navigateTo({
					url: '../information/details/details'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.card-list{
		width: 90%;
		margin: auto;
		margin-top: 1rem;
		.card{
			height: 5rem;
			width: 100%;
			border: 1rpx solid #EEEEEE;
			box-shadow: 2rpx 2rpx #EEEEEE;
			border-radius: 10rpx;
			background-color: #FFFFFF;
			margin-bottom: 10rpx;
			display: flex;
			.text{
				width: 80%;
				display: inline-block;
				.contant{
					margin: 10rpx 20rpx;
					word-break: break-all;
					height: 3rem;
				}
				.item{
					margin: 0rpx 20rpx;
					display: flex;
					justify-content: space-between;
					font-size: 0.7rem;
					color: #999999;
				}
			}
			.a-img{
				display: inline-block;
				width: 4rem;
				height: 4rem;
				border-radius: 8rpx;
				margin: 15rpx;
			}
		}
	}
</style>