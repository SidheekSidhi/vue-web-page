import Vue from "vue";
import App from "./App.vue";
import Login from "./pages/login.vue";
import Home from "./pages/home.vue";
import About from "./pages/about.vue";
import VueRouter from "vue-router";
import Grid from './components/Grid.vue'
import Vuex from "vuex"

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store(
    {
        state: {
            authenticated: false
        },
        mutations: {
            setAuthentication(state, status) {
                state.authenticated = status;
            }
        }
    }
);
 
const routes = [{
        path: "/",
        component: Home,
        beforeEnter: (to, from, next) => {
            if(store.state.authenticated == false) {
                next("/login");
            } else {
                next();
            }
        }
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/grid",
        component: Grid
    },
];

const router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
    render: (h) => h(App),
    store: store,
    router,
}).$mount("#app");