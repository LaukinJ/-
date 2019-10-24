<template name="component-name">
  <div>
    <Header color="pink">我</Header>
     <Search></Search>
    <Panel tab="good"></Panel>
    <Tabbar :offset="3" />
     <Gallery />
  </div>
</template>
<script>
import Header from "../../components/header/header.vue";
import Panel from "../../components/panel/panel.vue";
import Search from "../../components/search/search.vue";
import Tabbar from "../../components/tabbar/tabbar.vue";
import Gallery from '../../components/gallery/gallery.vue'
export default {
  components: {
  Header,
    Search,
    Panel,
    Tabbar,
    Gallery
  }
};

</script>