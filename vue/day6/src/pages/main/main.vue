<template name="component-name">
  <div>
    <keep-alive>
      <component :is="tabbar"></component>
    </keep-alive>
  </div>
</template>
<script>
import observer from '../../tools/observer'
import Header from '../wechat/wechat.vue'
import Contact from '../contact/contact.vue'
import Recover from '../recover/recover.vue'
import Mine from '../mine/mine.vue'
export default{
     data() {
        return {
            tabbar: 'Header'
        }
    },
    mounted() {
        observer.on('setTabbar', (index) => {
            switch (index) {
                case 0:
                    this.tabbar = 'Header';
                    break;
                case 1:
                    this.tabbar = 'Contact';
                    break;
                case 2:
                    this.tabbar = 'Recover';
                    break;
                case 3:
                    this.tabbar = 'Mine';
                    break;
            }
        })
    },
    components: {
        Header,
        Contact,
        Recover,
        Mine
    }
}
</script>