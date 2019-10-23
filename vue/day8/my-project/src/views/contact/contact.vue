<template>
  <div>
    <Header color="red">通讯录</Header>
    <Search></Search>
    <Panel tab="share"></Panel>
    <Tabbar :offset="1" />
  </div>
</template>
<script>
import Header from "../../components/header/header.vue";
import Panel from "../../components/panel/panel.vue";
import Search from "../../components/search/search.vue";
import Tabbar from "../../components/tabbar/tabbar.vue";
export default {
  components: {
    Header,
    Search,
    Panel,
    Tabbar
  }
};
</script>