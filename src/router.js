import { createWebHistory, createRouter } from "vue-router";
import JoinVue from "@/components/JoinVue.vue";
import HomeVue from "@/components/HomeVue.vue";

const routes = [
    {
        path: "/",
        component: HomeVue,
    },
    {
        path: "/join",
        component: JoinVue,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;