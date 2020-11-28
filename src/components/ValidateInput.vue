<template>
<div class="validate-input-container pb-3">
  <input v-if="tag !== 'textarea'" class="form-control">
  <textarea v-else class="form-control"/>
</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export type TagType = 'text' | 'textarea'
export default defineComponent({
  name: 'ValidateInput',
  props: {
    tag: {
      type: String as PropType<TagType>,
      default: 'text'
    }
  }
})
</script>

<style scoped>

</style>
