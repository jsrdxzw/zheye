<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area">
      <slot name="submit">
        <button class="btn btn-primary" type="submit">ログイン</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ValidateForm'
})
</script>

<style scoped>

</style>
