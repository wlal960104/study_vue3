<template>
  <!-- 모달창 만들기 -->
  <!-- 콜론 : 의 역할 : 1) 데이터바인딩 2) props 전송 -->
  <!-- props => :작명="데이터"-->
  <div v-if="isModal === true" class="black-bg"></div> <!-- 모달창 CSS 를 위한 영역-->
  <div class="menu">
    <!-- menu array 의 개수 만큼 for문이 반복된다. -->
    <!-- 변수 작명 2개 까지 가능 / 왼쪽 변수는 array내의 데이터 / 오른쪽 변수는 1씩 증가하는 정수 -->
    <a @click="goMenu(a)" v-for="(a) in menu" :key="a"> {{ a }}</a>
  </div>

  <router-view :prodList="원룸들" @isModal="isModal = $event;"></router-view>
</template>

<script>
import data from './assets/oneroom.js' // js 파일은 확장자 생략해도 가능
// import Modal from './components/ModalDetail.vue'

export default {
  name: 'App',

  data() {
    // obeject 형태로 데이터 바인딩한다.
    return {
      menu : ['Home', 'Join'],
      showDiscount : true,
      원룸들 : data,
      누른거 : 0,
      isModal: false,
    }
  },
  components : {
      // Modal // Modal : Modal 과 동일한 문법
  },

  // 함수를 저장하는 공간
  methods : {
    // 상단 메뉴바 클릭 시
    goMenu(menu) {
        console.log('상단 메뉴바 클릭', menu)
        if (menu === 'Home') {
            this.$router.push('/');
        }
        // 회원 가입 클릭 시
        if (menu === "Join") {
            this.$router.push('/join');
        }
    }
  },

  mounted() {
      console.log('APP ::::::: this > ', this);
      console.log('isModal >>>> ', this.isModal)

  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.5);
    position: fixed; padding: 20px;
}

.white-bg {
    width: 100%; background: white;
    border-radius: 8px;
    padding: 20px;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

.room-img {
  width: 100%;
  margin-top: 40px;
}

.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

/* fade : transition의 name */
/* 시작 시 스타일 */
.fade-enter-from {
  opacity: 0;
}
/*  */
.fade-enter-active {
  transition: all 1s;
}
/* 끝날 때 스타일 */
.fade-enter-to {
  opacity: 1;
}

.fad-leave-from {
  opacity: 1;
}
/*  */
.fade-leave-active {
  transition: all 1s;
}
/* 끝날 때 스타일 */
.fade-leave-to {
  opacity: 0;
}

</style>
