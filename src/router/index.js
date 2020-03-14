import Vue from "vue";
import Router from "vue-router";
import CreateCandidate from "../pages/createcandidate";
import CandidateProfile from "../pages/candidateProfile";
import AllPosition from "../pages/allPosition";
import Position from "../pages/Position";
import whoApplyPosition from '../pages/whoApply';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/position",
      name: "Position",
      component: Position
    },
    {
      path: "/",
      name: "Home",
      component: CreateCandidate
    },
    {
      path: "/profile",
      name: "Profile",
      component: CandidateProfile
    },
    {
      path: "/jobs",
      name: "All job",
      component: AllPosition
    },
    {
      path: "/whoApply",
      name: "Who apply job",
      component: whoApplyPosition

    }
  ]
});
