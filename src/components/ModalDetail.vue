<template>
  <div class="black-bg" v-if="모달창열렸니 === true">
    <div class="white-bg">
      <img :src="원룸들[누른거].image" style="width:100%">
      <h4>{{ 원룸들[누른거].title }}</h4>
      <p>{{ 원룸들[누른거].content }}</p>
      <!-- <input @input="month = $event.target.value"> -->
      <!-- 사용자가 input 에 입력한 것은 전부 문자 자료형 / 숫자로 인식되게 하려면 v-model.number -->
      <!-- watcher : 데이터를 감시하는 함수 -->
      <input v-model.number="month">
      <!-- <textarea v-model="month"></textarea> -->
      <h4> {{ month }} 개월 선택함 : {{ 원룸들[누른거].price * month }} 원</h4>
      <!-- props는 read-only 이다. -->
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
    name : 'ModalDetail',
    data() {
        return {
            month : 1, // 초기값이 중요함. 문자로 인식되게 하려면 초기값을 문자로 해야 함
        }
    },

    beforeUpdate() {
    if (this.month == 2) {
            this.month = 3;
            alert('2는 입력 할 수 없습니다. 3부터 다시 입력해주세요.')
        }
    },
    // 데이터 감시
    watch : {
        // param: month의 데이터
        // a: 변경 후 데이터, b: 변경 전 데이터
        month(a, b) {
            // month 라는 데이터가 변할 때마다 여기 있는 코드가 실행됨
            // 사용자가 글자 입력 시 경고문을 띄움
            if (a == b) {
                return;
            }
            
            if ( typeof a == 'string'){
                alert('숫자를 입력해주세요.');
                // month 초기화
                this.month = 1;
            }
        }
    },

    props : {
        원룸들 : Array,
        누른거 : Number,
        모달창열렸니: Boolean,
    }
}
</script>

<style>

</style>