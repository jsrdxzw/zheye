<template>
<div class="validate-input-container pb-3">
  <input
    v-if="tag !== 'textarea'"
    :class="{'is-invalid': inputRef.error}"
    @blur="validateInput"
    class="form-control"
    v-model="inputRef.val"
    v-bind="$attrs"
  >
  <textarea v-else class="form-control"/>
</div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
export type TagType = 'text' | 'textarea'
export default defineComponent({
  name: 'ValidateInput',
  props: {
    tag: {
      type: String as PropType<TagType>,
      default: 'text'
    }
  },
  inheritAttrs: false,
  setup () {
    const inputRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const validateInput = () => {
      console.log('123')
    }
    return { inputRef, validateInput }
  }
})
</script>

<style scoped>

</style>
