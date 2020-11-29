<template>
	<view class="content">
		<view class="search">
			<uni-search-bar placeholder="请输入需要搜索的院校" cancelButton="none" @confirm="search" radius="30" clearButton="auto" bgColor="#EFEFEF"></uni-search-bar>
		</view>
		<view class="card-list">
			<view class="school" @click="toMajor">
				<image class="s-img" src="../../static/logo.png" mode=""></image>
				<view class="s-msg">
					<span class="s-name">郑州大学</span>
					<span class="s-item">郑州大学是河南省唯一一所211院校，XXXXXX</span>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	export default {
		components:{
			uniSearchBar
		},
		methods: {
			toMajor(){
				uni.navigateTo({
					url: './major/major'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.search{
		width: 90%;
		margin: auto;
	}
	.card-list{
		width: 90%;
		margin: auto;
		margin-top: 1rem;
		.school{
			height: 4rem;
			width: 100%;
			border: 1rpx solid #EEEEEE;
			box-shadow: 2rpx 2rpx #EEEEEE;
			border-radius: 10rpx;
			background-color: #FFFFFF;
			margin-bottom: 10rpx;
			display: flex;
			.s-img{
				display: inline-block;
				width: 3rem;
				height: 3rem;
				border-radius: 8rpx;
				margin: 15rpx;
			}
			.s-msg{
				width: 80%;
				margin-top: 15rpx;
				margin-left: 10rpx;
				.s-name{
					display: block;
				}
				.s-item{
					font-size: 0.8rem;
					line-height: 1rem;
					color: #CCCCCC;
				}
			}
		}
	}
</style>