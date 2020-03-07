import Vue from "vue";
import Router from "vue-router";
import CreateCandidate from '../pages/createcandidate';
import CandidateProfile from '../pages/candidateProfile'

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [{
    path: '/',
    name: 'Home',
    component: CreateCandidate,
  }, {
    path: '/profile',
    name: 'Profile',
    component: CandidateProfile
  }]
});
