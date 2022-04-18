import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DeskripsiView from '../views/DeskripsiView.vue';
import NavbarView from '../components/Navbar';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/Deskripsi/:id',
    name: 'Deskripsi',
    component: DeskripsiView,
  },
  {
    path: '/navbar',
    name: 'NavbarView',
    component: NavbarView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
