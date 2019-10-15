import Vue from 'vue/dist/vue';
import html from'./index.html';
    
const iosButton = new Vue({
    el: '#mood',
    data: {
        bool: false,
        azBool:false,
    },
    template: html
    ,
    // 注册事件
    methods: {
        openFocus() {
            this.bool = true;
            console.log('点击')
        },
        closeFocus() {
            this.bool = false;
            console.log('点击')
        },
        openaz(){
            this.azBool = true;
            console.log('点击')
        },
        closeaz(){
            this.azBool = false;
            console.log('点击')
        }

    }
})
export default iosButton