<template>
	<view class="content">
		<view class="major-meun">
			<view class="major-name" @click="openCoures">
				<span>020229物流管理</span>
				<u-icon :name="c_icon"></u-icon>
			</view>
		</view>
		<view class="major-course" v-show='show'>
			<view class="course-name">
				<span>020229物流管理</span>
				<span>3学分</span>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				c_icon: 'arrow-right',
				show: false
			}
		},
		onLoad() {
			// this.openCoures()
		},
		methods:{
			openCoures(){
				if(this.show == false){
					this.c_icon = 'arrow-down';
					this.show = true;
				}else{
					this.c_icon = 'arrow-right';
					this.show = false;
				}
			}
		},
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
	.content{
		display: flex;
		justify-content: space-between;
		.major-meun{
			height: 100vh;
			width: 40%;
			background-color: #EEEEEE;
			overflow-y: auto;
			.major-name{
				width: 90%;
				margin: auto;
				font-size: 0.8rem;
				height: 2rem;
				line-height: 2rem;
				display: flex;
				justify-content: space-between;
				border-bottom: 1rpx solid #E5E5E5;
			}
		}
		.major-course{
			width: 60%;
			height: 100vh;
			overflow-y: auto;
			.course-name{
				width: 90%;
				margin: auto;
				font-size: 0.8rem;
				height: 2rem;
				line-height: 2rem;
				display: flex;
				justify-content: space-between;
				border-bottom: 1rpx solid #E5E5E5;
			}
		}
	}
</style>