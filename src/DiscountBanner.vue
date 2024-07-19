<!--
    * 컴포넌트를 만들고 싶다면
    - vue 파일 만들기 (템플릿 단축키: < 하나 입력 후 엔터치면 템플릿 자동 완성)
    - 그 다음에 축약할 HTML 넣기
-->
<template>
  <div class="discount">
    <h4>지금 결제하면 {{ percentage }}% 할인</h4>
  </div>
</template>

<script>
export default {
    name : 'DiscountBanner', // 두 글자 이상으로 해야 오류가 나지 않음
    data() {
      return {
        percentage : 3,
      }
    },

    mounted() {
      setInterval(() => {
        if (this.percentage > 0) {
          this.percentage -= 1;
        } else {
          return;
        }
      }, 1000);
    }
}
</script>

<style>

</style>