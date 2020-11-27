<template>
  <div class="container">
    <global-header/>
    <loader v-if="isLoading"/>
    <router-view/>
    <global-footer/>
  </div>
</template>
<script lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css'
import { defineComponent, ref } from 'vue'
import GlobalHeader from '@/components/GlobalHeader.vue'
import GlobalFooter from '@/components/GlobalFooter.vue'
import Loader from '@/components/Loader.vue'
export default defineComponent({
  components: { GlobalFooter, GlobalHeader, Loader },
  setup () {
    const isLoading = ref(false)
    return { isLoading }
  }
})
</script>
