<template>
	<view>
		<view class="tab">
			<view class="tab-card" @click="showTime">
				考试时间
				<u-icon :name="timeicon"></u-icon>
			</view>
			<view class="tab-card" @click="showType">
				考试专业
				<u-icon :name="typeicon"></u-icon>
			</view>
			<view class="tab-card" @click="showSchool">
				主考院校
				<u-icon :name="schoolicon"></u-icon>
			</view>
		</view>
		<view class="coures">
			<view class="academy">
				<view class="msg-box">
					<span>主考院校</span>
					<span>郑州大学</span>
				</view>
				<u-line class="line" color="#E5E5E5"/>
				<view class="msg-box">
					<span>主考专业</span>
					<span>020229-物流管理</span>
				</view>
			</view>
			<view class="academy">
				<view class="msg-time">
					<view class="item-tag"></view>
					<span>10月17日 上午09:00-11:30</span>
				</view>
				<view class="msg-box">
					<span>00009-政治经济学(财经类)</span>
				</view>
				<view class="msg-box">
					<span>00015-英语(二)</span>
				</view>
			</view>
		</view>
		<u-picker mode="selector" v-model="showtime" @cancel="outtime" @confirm="gettime" :range="datatime"></u-picker>
		<u-picker mode="selector" v-model="showtype" @cancel="outtype" @confirm="gettype" :range="datatype"></u-picker>
		<u-picker mode="selector" v-model="showschool" @cancel="outschool" @confirm="getschool" :range="dataschool"></u-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				params: {
					year: true,
					month: true,
				},
				datatime: [
					'2020下半年',
					'2020上半年',
					'2019下半年',
					'2019上半年'
				],
				datatype: [
					'080709计算机网络',
					'080711计算机软件',
					'080713信息技术教育',
					'080720软件工程'
				],
				dataschool: [
					'郑州大学',
					'河南大学',
					'河南教育学院',
					'解放军信息工程大学'
				],
				showtime: false,
				showtype: false,
				showschool: false,
				timeicon: 'arrow-down',
				typeicon: 'arrow-down',
				schoolicon: 'arrow-down'
			}
		},
		methods: {
			showTime(){
				this.showtime = true;
				this.timeicon = 'arrow-up';
			},
			showType(){
				this.showtype = true;
				this.typeicon = 'arrow-up';
			},
			showSchool(){
				this.showschool = true;
				this.schoolicon = 'arrow-up';
			},
			outtime(e){
				this.timeicon = 'arrow-down';
			},
			outtype(e){
				this.typeicon = 'arrow-down';
			},
			outschool(e){
				this.schoolicon = 'arrow-down';
			},
			gettime(e){
				this.timeicon = 'arrow-down';
			},
			gettype(e){
				this.typeicon = 'arrow-down';
			},
			getschool(e){
				this.schoolicon = 'arrow-down';
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tab{
		display: flex;
		width: 100%;
		height: 3rem;
		.tab-card{
			width: 33.333%;
			text-align: center;
			line-height: 2rem;
		}
	}
	.coures{
		width: 90%;
		margin: auto;
		.academy{
			width: 100%;
			border: 1rpx solid #E5E5E5;
			border-radius: 8rpx;
			margin-bottom: 1rem;
			.msg-time{
				padding: 0.5rem 1rem;
				font-size: 0.9rem;
				display: flex;
				.item-tag{
					width: 0.5rem;
					height: 0.9rem;
					background-color: #168B71;
					border-radius: 10rpx;
					display: inline-block;
					margin-right: 10rpx;
					border: none;
					margin-top: 0.15rem;
				}
			}
			.msg-box{
				display: flex;
				justify-content: space-between;
				font-size: 0.8rem;
				line-height: 1.5rem;
				padding: 0.5rem 1rem;
			}
		}
	}
</style>