<template>
<teleport to="#back">
  <div :style="{backgroundColor: background || ''}" class="d-flex justify-content-center align-items-center h-100 w-100 loading-container">
    <div class="loading-content">
      <div class="spinner-border text-primary" role="status"/>
      <p v-if="text" class="text-primary small">{{text}}</p>
    </div>
  </div>
</teleport>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
export default defineComponent({
  name: 'Loader',
  props: {
    text: {
      type: String,
      required: false,
      default: 'loading...'
    },
    background: {
      type: String,
      required: false
    }
  },
  setup () {
    // before component is instanced
    // we can create teleport div previously
    const node = document.createElement('div')
    node.id = 'back'
    document.body.appendChild(node)
    // If we use v-if, then we should remove #back before unmount
    onUnmounted(() => {
      document.body.removeChild(node)
    })
  }
})
</script>
<style scoped>
.loading-container {
  background: rgba(255, 255, 255, .5);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
}
</style>
