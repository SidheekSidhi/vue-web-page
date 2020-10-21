import Vue from "vue";
import App from "./App.vue";
import Login from "./pages/login.vue";
import Home from "./pages/home.vue";
import About from "./pages/about.vue";
import VueRouter from "vue-router";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [{
        path: "/",
        component: Home
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/login",
        component: Login
    },
];

const router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
    render: (h) => h(App),
    router,
}).$mount("#app");