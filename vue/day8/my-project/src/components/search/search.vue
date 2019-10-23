<template name="component-name">
  <div :class="['weui-search-bar',{'weui-search-bar_focusing':isFocus}]" id="searchBar">
    <form class="weui-search-bar__form">
      <div class="weui-search-bar__box">
        <i class="weui-icon-search"></i>
        <input
          v-model="searchText"
          type="search"
          class="weui-search-bar__input"
          id="searchInput"
          placeholder="搜索"
          required
        />
        <a @click="clear" href="javascript:" class="weui-icon-clear" id="searchClear"></a>
      </div>
      <label
        @click="toggleFocus"
        class="weui-search-bar__label"
        id="searchText"
        style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
      >
        <i class="weui-icon-search"></i>
        <span>搜索</span>
      </label>
    </form>
    <a
      @click="toggleFocus"
      href="javascript:"
      class="weui-search-bar__cancel-btn"
      id="searchCancel"
    >{{ cancel }}</a>
  </div>
</template>
<script>
import observer from "../../tools/observer";
export default {
  data() {
    return {
      isFocus: 0,
      cancel: "取消",
      searchText: ""
    };
  },
  methods: {
    toggleFocus() {
      this.isFocus = !this.isFocus;
    },
    clear() {
      this.searchText = "";
    }
  },
  watch: {
    searchText() {
      // console.log(this.searchText);

      observer.emit("setSeatchText", this.searchText);
    }
  }
};
</script>