import Vue from 'vue/dist/vue'
export default Vue.component('eno-header', {
    data() {
        return {
            title: "今日头条"
        }
    },
    template: `
    <header>{{title}}</header>
    `
})