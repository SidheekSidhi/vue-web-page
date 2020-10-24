import Vue from "vue";
import App from "./App.vue";
import Login from "./pages/login.vue";
import Home from "./pages/home.vue";
import About from "./pages/about.vue";
import VueRouter from "vue-router";
import Grid from "./components/Grid.vue";
import Vuex from "vuex";

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store({
  state: {
    authenticated: false,
  },
  mutations: {
    setAuthentication(state, status) {
      state.authenticated = status;
    },
  },
});

const routes = [
  {
    path: "/",
    redirect: {
      name: "login",
    }
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    beforeEnter: (to, from, next) => {   
        if (store.state.authenticated == false) {
          next("/login");
        } else {
          next();
        }
      },
  },
  {
    path: "/about",
    name: "about",
    component: About,
    beforeEnter: (to, from, next) => {   
        if (store.state.authenticated == false) {
          next("/login");
        } else {
          next();
        }
      },
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/grid",
    name: "grid",
    component: Grid,
    beforeEnter: (to, from, next) => {   
        if (store.state.authenticated == false) {
          next("/login");
        } else {
          next();
        }
      },
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

new Vue({
  render: (h) => h(App),
  store: store,
  router,
}).$mount("#app");
