import Vue from "vue";
import Router from "vue-router";
import CreateCandidate from '../components/CreateCandidate';


Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [{
    path: '/',
    name: 'Home',
    component: CreateCandidate,
  }]
});
