import 'weui'
import './styles/styles.css'
import Vue from 'vue/dist/vue'
import Tabbar from './components/tabbar/tabbar.vue'
import Main from './pages/main/main.vue'
new Vue({
    el: '#app',
    template: `
        <div>
            <Main></Main>
            <Tabbar></Tabbar>
        </div>
    `,
    components: {
        Tabbar,
        Main
    }
})