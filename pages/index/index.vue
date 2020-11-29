<template>
	<view class="content">
		<view class="top-box"></view>
		<view class="top">
			<span class="user-img">
				<image src="../../static/logo.png" mode=""></image>
			</span>
			<span class="user-name">XXXX</span>
		</view>
		<view class="search">
			<u-search placeholder="请输入需要搜索的内容" v-model="searchText" @custom="search" @search="search"></u-search>
		</view>
		<view class="nav">
			<navigator class="nav-item" url="../school/school">
				<image class="icon" src="../../static/icon/school.png" mode=""></image>
				<view class="grid-text">院校专业</view>
			</navigator>
			<navigator class="nav-item" url="../schedule/schedule">
				<image class="icon" src="../../static/icon/schedule.png" mode=""></image>
				<view class="grid-text">考试日程</view>
			</navigator>
			<navigator class="nav-item" url="../information/information">
				<image class="icon" src="../../static/icon/information.png" mode=""></image>
				<view class="grid-text">考试资讯</view>
			</navigator>
		</view>
		<view class="card-list">
			<navigator url="../information/details/details">
				<view class="card" :data="article" v-for="item in article" :key="item">
					<view class="text">
						<view class="contant">{{item.content}}</view>
						<view class="item">
							<span>{{item.a_time}}</span>
							<span>来源：{{item.title}}</span>
						</view>
					</view>
					<image class="a-img" :src='item.a_img' mode=""></image>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchText: '',
				article: {
					artList: {
						title:'auther',
						a_time: '2020-09-28 14:00:00',
						content: 'XXXXXXXXXXXXX',
						a_img: '../../static/logo.png'
					}
				}
			}
		},
		onLoad() {

		},
		methods: {
			search() {
				console.log(this.searchText)
			}
		},
		components: {},
		onShareAppMessage() {
			return {
				title: '查询自考专业，浏览自考资讯',
				path: './index/index'
			}
		}
	}
</script>

<style lang="scss" scoped>
	.top-box {
		background-color: #168B71;
		position: absolute;
		top: 0;
		z-index: -1;
		height: 130rpx;
		width: 100%;
	}

	.top {
		width: 100%;
		height: 260rpx;
		border-radius: 50%;
		background-color: #168B71;
		position: relative;
		text-align: center;

		.user-img {
			width: 100%;
			display: block;
			padding-top: 2rem;
		}

		.user-img image {
			width: 100rpx;
			height: 100rpx;
			border-radius: 10rpx;
		}

		.user-name {
			color: #FFFFFF;
			font-size: 1rem;
		}
	}

	.search {
		width: 90%;
		margin: auto;
	}

	.nav {
		margin-top: 20rpx;
		margin-bottom: 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.nav-item {
			width: calc(100% / 3);
			text-align: center;
		}

		.icon {
			width: 60rpx;
			height: 60rpx;
		}
	}

	.card-list {
		width: 90%;
		margin: auto;
		margin-top: 1rem;

		.card {
			height: 5rem;
			width: 100%;
			border: 1rpx solid #EEEEEE;
			box-shadow: 2rpx 2rpx #EEEEEE;
			border-radius: 10rpx;
			background-color: #FFFFFF;
			margin-bottom: 10rpx;
			display: flex;

			.text {
				width: 80%;
				display: inline-block;

				.contant {
					margin: 10rpx 20rpx;
					word-break: break-all;
					height: 3rem;
				}

				.item {
					margin: 0rpx 20rpx;
					display: flex;
					justify-content: space-between;
					font-size: 0.7rem;
					color: #999999;
				}
			}

			.a-img {
				display: inline-block;
				width: 4rem;
				height: 4rem;
				border-radius: 8rpx;
				margin: 15rpx;
			}
		}
	}
</style>
