<template>
<div class="validate-input-container pb-3">
  <input
    v-if="tag !== 'textarea'"
    :class="{'is-invalid': inputRef.error}"
    class="form-control"
    v-bind="$attrs"
    @input="inputValueChange"
    :value="inputRef.val"
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
  emits: ['update:modelValue'],
  inheritAttrs: false,
  setup (props, context) {
    const inputRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const inputValueChange = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      context.emit('update:modelValue', targetValue)
    }
    return { inputRef, inputValueChange }
  }
})
</script>

<style scoped>

</style>
