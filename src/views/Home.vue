<template>
  <div class="home-page">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <img src="../assets/callout.svg" alt="callout" class="w-50"/>
          <h2 class="font-weight-light">いつでも、どこでも、自由に書ける</h2>
          <p>
            <a href="#" class="btn btn-primary my-2">文章を作り始めよう</a>
          </p>
        </div>
      </div>
    </section>
    <h4 class="font-weight-bold text-center">ピックアップ</h4>
    <button
      class="btn btn-outline-primary mt-2 mb-5 mx-auto btn-block w-25"
    >
      More
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home'
})
</script>
<style scoped lang="less">
.home-page {
  display: flex;
  flex-direction: column;
}
</style>
