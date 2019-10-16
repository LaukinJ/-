import Vue from 'vue/dist/vue'
import template from './search.html'
const search = new Vue({
    el: '#search',
    data: {
        isFocus: 0,
        cancel: '取消',
        searchText: ''
    },
    template,
    methods: {
        toggleFocus() {
            this.isFocus = !this.isFocus;
        },
        clear() {
            this.searchText = ''
        }
    }
})
export default search;