import 'weui'
import './styles/styles.css'
import './components/header/header'
import './components/search/search'
import './components/panel/panel'
import './components/tabbar/tabbar'
import Vue from 'vue/dist/vue'

import './pages/wechat/wechat'
import './pages/contact/contact'
import './pages/main/main'
import './pages/recover/recover'
import './pages/mine/mine'
new Vue({
    el: '#app',
    template: `
        <div>
            <eno-main></eno-main>
            <eno-tabbar></eno-tabbar>
        </div>
    `
})