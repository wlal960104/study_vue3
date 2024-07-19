<template>

  <!-- 모달창 만들기 -->
  <!-- 콜론 : 의 역할 : 1) 데이터바인딩 2) props 전송 -->
  <!-- props => :작명="데이터"-->
  <transition name="fade">
    <Modal :원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니" @closeModal="모달창열렸니 = false"/>
  </transition>

  <div class="menu">
    <!-- menu array 의 개수 만큼 for문이 반복된다. -->
    <!-- 작명은 아무 이름을 넣어도 된다. -->
    <!-- key의 용도: 반복문 돌린 요소를 컴퓨터가 구분하기 위해 쓴다. -->
    <!-- 변수 작명 2개 까지 가능 / 왼쪽 변수는 array내의 데이터 / 오른쪽 변수는 1씩 증가하는 정수 -->
    <a v-for="(a) in menu" :key="a"> {{ a }}</a>
  </div>

  <!-- 할인 배너(컴포넌트화) -->
  <Discount v-if="showDiscount == true"/> <!-- or <Discount></Discount> -->

  <button @click="priceSort">가격순정렬</button>
  <button @click="sortBack">되돌리기</button>

  <!-- 원룸 리스트 -->
  <ProductList @openModal="모달창열렸니 = true; 누른거 = $event" :원룸="원룸들[i]" v-for="(a,i) in 원룸들" :key="i"/>

  <!-- <div v-for="(a,i) in 원룸들" :key="i">
    <img :src="a.image" class="room-img">
    <h4 @click="모달창열렸니 = true; 누른거 = i">{{ a.title }}</h4>
    <p>{{ a.price }}원</p>
    <button @click="increase(i)">허위매물신고</button> <span>신고수 : {{ 신고수[i] }}</span>
  </div> -->

  <!-- <div>
    <img src="./assets/room1.jpg" class="room-img">
    <h4>{{ products[1] }}</h4>
    <p>60만원</p>
    <button @click="increase(1)">허위매물신고</button> <span>신고수 : {{ 신고수[1] }}</span>
  </div>

  <div>
    <img src="./assets/room2.jpg" class="room-img">
    <h4>{{ products[2] }}</h4>
    <p>70만원</p>
    <button @click="increase(2)">허위매물신고</button> <span>신고수 : {{ 신고수[2] }}</span>
  </div> -->

</template>

<script>
import data from './assets/oneroom.js' // js 파일은 확장자 생략해도 가능
import Discount from './DiscountBanner.vue' // import {자유롭게 작명 가능} from '경로'
import Modal from './ModalDetail.vue'
import ProductList from './ProductList.vue'

export default {
  name: 'App',

  data() {
    // obeject 형태로 데이터 바인딩한다.
    return {
      showDiscount : true,
      원룸들오리지널 : [...data], //deep copy 문법 (완벽한 사본을 만들기 위한 문법)
      오브젝트 : { name : 'kim', age : 20},
      누른거 : 0,
      원룸들 : data, 
      모달창열렸니 : false,
      신고수 : [0,0,0],
      menu : ['Home', 'Shop', 'About'],
      products : ['역삼동원룸', '천호동원룸', '마포구원룸']
    }
  },

  // 함수를 저장하는 공간
  methods : {
    increase (i) {
      console.log('this > ', this);
      this.신고수[i] +=1;
    },
    priceSort() {
      // 가격 낮은 것이 왼쪽으로 정렬
      // sort : 원본은 변형시킴 / map, filter 등은 원본을 보존함
      // 요즘 코딩 관습: 원본을 보존시킴
      this.원룸들.sort(function(a,b){
        return a.price - b.price
      });
    },
    sortBack() {
        this.원룸들 = [...this.원룸들오리지널];
    }
  },

  // html 생성 전
  created() {
    // 서버에서 데이터 가져오는 코드
  },

  // lifecycle hook 이용하기
  mounted() {
    // // this를 쓰기 위해서는 화살표 함수를 사용해야 한다.
    // setTimeout(() => {
    //   this.showDiscount = false;
    // }, 2000);
    setInterval (() => {

    }, 1000)
  },
  
  // 컴포넌트 등록
  components: {
    Discount: Discount, // 오른쪽 Discount는 import 한 name, 왼쪽 Discount는 자유롭게 작명
    Modal: Modal,
    ProductList : ProductList,
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
