<template>
  <div class="container">
    <global-header/>
    <router-view/>
    <global-footer/>
  </div>
</template>
<script lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css'
import { defineComponent } from 'vue'
import GlobalHeader from '@/components/GlobalHeader.vue'
import GlobalFooter from '@/components/GlobalFooter.vue'
export default defineComponent({
  components: { GlobalFooter, GlobalHeader }
})
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
