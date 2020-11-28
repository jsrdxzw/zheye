<template>
<div class="login-page mx-auto p-3 w-330">
  <h5 class="text-center my-4">知識楽園に登録</h5>
  <validate-form>
    <div class="mb-3">
      <label class="form-label">メールアドレス</label>
      <validate-input
        placeholder="メールアドレスを入力してください"
        type="text"
        ref="inputRef"
      />
    </div>
    <div class="mb-3">
      <label class="form-label">パスワード</label>
      <validate-input
        type="password"
        placeholder="パスワードを入力してください"
      />
    </div>
    <template #submit>
      <button type="submit" class="btn btn-primary btn-block btn-large">ログイン</button>
    </template>
  </validate-form>
</div>
</template>

<script>
import ValidateForm from '@/components/ValidateForm'
import ValidateInput from '@/components/ValidateInput'
export default {
  name: 'Login',
  components: { ValidateForm, ValidateInput }
}
</script>

<style scoped>

</style>
