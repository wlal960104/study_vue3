<template>
   <div>
    <img :src="원룸.image" class="room-img">
    <!-- $ 표시: vue만의 특별한 변수 / emit: 부모에게 메세지 보낼 때 -->
    <!-- 데이터를 쓰고 싶으면 부모쪽에서 $event-->
    <h4 @click="send">{{ 원룸.title }}</h4>
    <p>{{ 원룸.price }}원</p>

    <!-- <button @click="increase(i)">허위매물신고</button> <span>신고수 : {{ 신고수[i] }}</span> -->
  </div>
</template>

<script>
export default {
    name : 'ProductList',
    props : {
        원룸 : Object, // 자료형은 틀려도 오류 나지 않음
    },
    methods : {
        send() {
            this.$emit('openModal', this.원룸.id)
        }
    }

}
</script>

<style>

</style>