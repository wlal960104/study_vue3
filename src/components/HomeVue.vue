<template>
    <div class="Home">
        <transition name="fade">
            <Modal :원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니" @closeModal="모달창열렸니 = false"/>
        </transition>

        <!-- 할인 배너(컴포넌트화) -->
        <Discount v-if="showDiscount === true"/> <!-- or <Discount></Discount> -->

        <!-- 정렬 영역 -->
        <button @click="priceSort">가격순정렬</button>
        <button @click="sortBack">되돌리기</button>

        <!-- 원룸 리스트 -->
        <ProductList @openModal="모달창열렸니 = true; 누른거 = $event; console.log('오픈모달')" :원룸="원룸들[i]" v-for="(a,i) in 원룸들" :key="i"/>
    </div>
</template>

<script>
// import data from '@/assets/oneroom.js' // js 파일은 확장자 생략해도 가능
import Discount from '@/components/DiscountBanner.vue' // import {자유롭게 작명 가능} from '경로'
import ProductList from '@/components/ProductList.vue'
import Modal from "@/components/ModalDetail.vue";
export default {
    name: 'MainVue',

    data() {
        // obeject 형태로 데이터 바인딩한다.
        return {
            showDiscount: true,
            // 원룸들오리지널: [...data], //deep copy 문법 (완벽한 사본을 만들기 위한 문법)
            // 원룸들: data,
            신고수: [0, 0, 0],
            원룸들오리지널: [...this.$props.prodList],
            원룸들: this.$props.prodList,
            누른거 : 0,
            모달창열렸니: false, // 근본
        }
    },
    props : {
        prodList : Array
    },
    // 함수를 저장하는 공간
    methods: {
        increase(i) {
            console.log('this > ', this);
            this.신고수[i] += 1;
        },
        priceSort() {
            // 가격 낮은 것이 왼쪽으로 정렬
            // sort : 원본은 변형시킴 / map, filter 등은 원본을 보존함
            // 요즘 코딩 관습: 원본을 보존시킴
            this.원룸들.sort(function (a, b) {
                return a.price - b.price
            });
        },
        sortBack() {
            this.원룸들 = [...this.원룸들오리지널];
        },
    },

    // html 생성 전
    created() {
        // 서버에서 데이터 가져오는 코드
    },

    // lifecycle hook 이용하기
    mounted() {
        console.log('HOME :: mounted > this > ', this);
        console.log('emit 테스트 ');
        this.$emit('emitTest');

        setInterval(() => {

        }, 1000)
    },


    watch : {
        모달창열렸니(a) {
            console.log('this >>>>>>', this)
            console.log('a >>>> ', a)
            this.$emit('isModal', a)
        }
    },

    // 컴포넌트 등록
    components: {
        Modal,
        Discount: Discount, // 오른쪽 Discount는 import 한 name, 왼쪽 Discount는 자유롭게 작명
        ProductList: ProductList,
    }
}

</script>

<style>

</style>