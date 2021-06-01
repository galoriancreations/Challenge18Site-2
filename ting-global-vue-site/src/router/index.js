import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

import Home from "../views/Home";
import WhatWeDo from "../views/WhatWeDo";
import About from "../views/About";
import Articles from "../views/Articles";
import Videos from "../views/Videos";
import Scores from "../views/Scores";
import Players from "../views/Players";
import Contact from "../views/Contact";
import Login from "../views/Login";
import Register from "../views/Register";
import Membership from "../views/Membership";
import ChallengeOptions from "../views/ChallengeOptions";
import Dashboard from "../views/Dashboard";
import Triplets from "../views/Triplets";
import NotFound from "../views/404";
import CounterTest from "../CounterTest";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        { path: "/", component: Home },
        { path: "/what-we-do", component: WhatWeDo },
        { path: "/about", component: About },
        { path: "/articles", component: Articles },
        { path: "/videos", component: Videos },
        { path: "/scores", component: Scores },
        { path: "/players", component: Players },
        { path: "/contact", component: Contact },
        { path: "/login", component: Login, meta: { forLoggingIn: true } },
        { path: "/register", component: Register, meta: { forLoggingIn: true } },
        { path: "/membership", component: Membership, meta: { forLoggingIn: true } },
        { path: "/challenge-options", component: ChallengeOptions },
        { path: "/dashboard", component: Dashboard, meta: { protected: true } },
        { path: "/triplets", component: Triplets },
        { path: "/counter-test", component: CounterTest },
        { path: "/:notFound(.*)", component: NotFound },
    ]
});

router.beforeEach((to, from, next) => {
    if (to.meta.protected && !store.getters.isAuth) next("/login");
    else if (to.meta.forLoggingIn && store.getters.isAuth) next("/dashboard");
    else next();
});

export default router;