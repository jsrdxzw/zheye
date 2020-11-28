<template>
<div class="validate-input-container pb-3">
  <input
    v-if="tag !== 'textarea'"
    :class="{'is-invalid': inputRef.error}"
    class="form-control"
    v-bind="$attrs"
    @input="inputValueChange"
    @blur="validateInput"
    :value="inputRef.val"
  >
  <textarea v-else class="form-control"/>
  <span v-if="inputRef.error" class="invalid-feedback">{{inputRef.message}}</span>
</div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
interface RuleProp {
  type: 'required' | 'email' | 'custom';
  message: string;
  validator?: () => boolean;
}
export type TagType = 'text' | 'textarea'
export type RulesProp = RuleProp[]
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
export default defineComponent({
  name: 'ValidateInput',
  props: {
    tag: {
      type: String as PropType<TagType>,
      default: 'text'
    },
    rules: {
      type: Array as PropType<RulesProp>
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
    const validateInput = (): boolean => {
      if (props.rules && props.rules.length) {
        const allPassed = props.rules.every(rule => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = inputRef.val.trim() !== ''
              break
            case 'email':
              passed = emailReg.test(inputRef.val)
              break
            case 'custom':
              passed = rule.validator ? rule.validator() : true
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !allPassed
        return allPassed
      }
      return true
    }
    return { inputRef, inputValueChange, validateInput }
  }
})
</script>

<style scoped>

</style>
