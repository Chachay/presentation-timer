const app = new Vue({
	el: '#app',
	data :{
    tdate: Date.parse('05 Oct 2029 00:12:00 GMT')/1000,
    now:  Date.parse('04 Oct 2019 00:12:00 GMT')/1000,
    SerialNum:  Date.parse('04 Oct 2019 00:12:00 GMT')/1000,
	},
	mounted(){
    setInterval(()=>{
				this.now = Math.trunc((new Date()).getTime() / 1000);
			}, 1000);
	},
	computed: {
		seconds() {
			return Math.max(0, (this.tdate - this.now)%60);
		},
		minutes() {
			return Math.max(0, Math.trunc((this.tdate - this.now)/60)%60);
		},
		hours (){
			return Math.max(0, Math.trunc((this.tdate - this.now)/3600));
		}
	}
});