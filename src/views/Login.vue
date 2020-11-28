<template>
<div class="login-page mx-auto p-3 w-330">
  <h5 class="text-center my-4">知識楽園に登録</h5>
  <validate-form @form-submit="onFormSubmit">
    <div class="mb-3">
      <label class="form-label">メールアドレス</label>
      <validate-input
        placeholder="example@gmail.com"
        type="text"
        ref="inputRef"
        v-model="emailVal"
        :rules="emailRules"
      />
    </div>
    <div class="mb-3">
      <label class="form-label">パスワード</label>
      <validate-input
        type="password"
        placeholder="パスワード"
        v-model="passwordVal"
        :rules="passwordRules"
      />
    </div>
    <template #submit>
      <button type="submit" class="btn btn-primary btn-block btn-large">ログイン</button>
    </template>
  </validate-form>
</div>
</template>

<script lang="ts">
import ValidateForm from '@/components/ValidateForm.vue'
import ValidateInput, { RulesProp } from '@/components/ValidateInput.vue'
import { ref } from 'vue'
export default {
  name: 'Login',
  components: { ValidateForm, ValidateInput },
  setup () {
    const emailVal = ref('')
    const passwordVal = ref('')
    const emailRules: RulesProp = [
      { type: 'required', message: 'email can not be empty' },
      { type: 'email', message: 'email is not validate' }
    ]
    const passwordRules: RulesProp = [
      { type: 'required', message: 'password can not be empty' }
    ]
    const onFormSubmit = (result: boolean) => {
      if (result) {
        const payload = {
          email: emailVal.value,
          password: passwordVal.value
        }
        alert(`${payload.email} - ${payload.password}`)
      }
    }
    return { emailVal, passwordVal, emailRules, passwordRules, onFormSubmit }
  }
}
</script>

<style scoped>

</style>
