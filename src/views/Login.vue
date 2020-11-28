<template>
<div class="login-page mx-auto p-3 w-330">
  <h5 class="text-center my-4">知識楽園に登録</h5>
  <validate-form>
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
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' }
    ]
    const passwordRules: RulesProp = [
      { type: 'required', message: '密码不能为空' }
    ]
    return { emailVal, passwordVal, emailRules, passwordRules }
  }
}
</script>

<style scoped>

</style>
