<template name="component-name">
  <div>
    <Header color="green">微信</Header>
    <Search></Search>
    <Panel></Panel>
  </div>
</template>
<script>
import Header from '../../components/header/header.vue'
import Panel from '../../components/panel/panel.vue'
import Search from '../../components/search/search.vue'
export default {
    components: {
    Header,
    Search,
    Panel
  }
}
</script>