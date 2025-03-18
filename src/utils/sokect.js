/**
 * @description: 测试
 * let path = 'wss://car.vip-yych.com/auctionWs' + username; // 请求路径
 */
console.log(process.env.NODE_ENV, ' process.env.VUE_APP_BASE_WS_URL');

if (process.env.NODE_ENV === 'dev') {
    console.log('当前是开发环境');
} else if (process.env.NODE_ENV === 'pro') {
    console.log('当前是生产环境');
}

const socketService = {
    socket: null,
    init(option) {
        if (typeof WebSocket === "undefined") {
            alert("您的浏览器不支持socket");
        } else {
            let path = `${process.env.VUE_APP_BASE_WS_URL }/auctionWs${ option.username}`; // 请求路径
            this.socket = new WebSocket(path);
            this.socket.onopen = this.open.bind(this);
            this.socket.onerror = this.error.bind(this);
            // this.socket.onmessage = this.getMessage.bind(this);
            this.socket.onmessage = (e) => {
                option.onMessage(e.data)
            };
            /**
             * 发送数据方法
             * @param {*} params 
             */
            // setInterval(() => {
            //     this.send(JSON.stringify({ type: "ping" }))
            // }, 15000);
        }
    },
    /**
     * 连接到通信
     */
    open() {
        console.log("socket连接成功");
    },
    /**
     * 发生错误时
     */
    error() {
        console.log("连接错误");
    },
    // 也可以这样写 end
    /**
     * 发送数据方法
     * @param {*} params 
     */
    send(params) {
        // console.log(params + 'sendd');
        if (this.socket) {
            this.socket.send(params);
        }
    },
    /**
     * 切断通信方法
     */
    close() {
        console.log("socket已经关闭");
    }
};
//最后导出
export default socketService;