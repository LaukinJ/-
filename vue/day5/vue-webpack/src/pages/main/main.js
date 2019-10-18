import Vue from 'vue/dist/vue'
import observer from '../../tools/observer'
export default Vue.component('eno-main', {
    data() {
        return {
            tabbar: 'eno-wechat'
        }
    },
    template: `
        <div>
            <keep-alive>
                <component :is="tabbar"></component>
            </keep-alive>
        </div>
    `,
    mounted() {
        observer.on('setTabbar', (index) => {
            switch (index) {
                case 0:
                    this.tabbar = 'eno-wechat';
                    break;
                case 1:
                    this.tabbar = 'eno-contact';
                    break;
                case 2:
                    this.tabbar = 'eno-recover';
                    break;
                case 3:
                    this.tabbar = 'eno-mine';
                    break;
            }
        })
    }

})