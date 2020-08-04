<template>
	<view>
		<!--
		<view class="status_bar">
		</view>
		-->
		<view class="main">
			<view class="map-container">
				<map id="map" class="map" show-location=true :markers="markers"></map>
			</view>
			<view class="input">
				<input class="message" type="text" maxlength="128" v-model="message"/>
				<button type="primary" class="send-btn" size="mini" @click="send">
					send
				</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				message: '',
				mapcontext: null,
				markers: []
			}
		},
		methods: {
			send() {
				var self = this;
				self.reoladPosition(function() {
					if (!self.message) {
						return;
					}
					this.markers = [{
						id: 1,
						latitude: self.latitude,
						longitude: self.longitude,
						iconPath: '/static/aa.png',
						callout: {
							content: self.message,
							display: 'ALWAYS'
						}
					}];
					
					console.log(self.message);
					console.log(self.latitude, self.longitude);
				});
			},
			reoladPosition(callback) {
				var self = this;
				uni.getLocation({
					type: 'gcj02',
					success(res) {
						console.log('reoladPosition: ', JSON.stringify(res));
						self.mapcontext.moveToLocation({
							latitude: res.latitude,
							longitude: res.longitude
						});
						self.latitude = res.latitude;
						self.longitude = res.longitude;
						callback && callback(res);
					}
				})
			}
		},
		onReady() {
			var self = this;
			// var map = $getAppMap();
			self.mapcontext = uni.createMapContext('map', self);
			self.reoladPosition();
			console.log('on ready');
		}
	}
</script>

<style>
	.main {
		height: 100vh;
		width: 100vw;
	}
	.map-container {
		/* height: calc(100vh - 50px); */
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 65px;
	}
	.map {
		height: 100%;
		width: 100%;
	}
	.input {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #f0f0f0;
		padding: 8px 15px;
		display: flex;
		align-items: center;
		flex-direction: row;
		height: 50px;
		box-sizing: border-box;
	}
	.message {
		border: 1px solid #66afe9;
		box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
		padding: 6px 12px;
		font-size: 14px;
		line-height: 14px;
		color: #555;
		background-color: #fff;
		border-radius: 4px;
		flex-grow: 1;
		height: 34px;
		box-sizing: border-box;
	}
	.send-btn {
		padding: 0 10px;
		margin-left: 10px;
		height: 30px;
	}
</style>
