import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import WhatWeDo from "../views/WhatWeDo";
import About from "../views/About";
import Blog from "../views/Blog";
import Scores from "../views/Scores";
import Players from "../views/Players";
import Contact from "../views/Contact";
import Login from "../views/Login";
import Signup from "../views/Signup";
import CounterTest from "../CounterTest";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        { path: "/", component: Home },
        { path: "/what-we-do", component: WhatWeDo },
        { path: "/about", component: About },
        { path: "/blog", component: Blog },
        { path: "/scores", component: Scores },
        { path: "/players", component: Players },
        { path: "/contact", component: Contact },
        { path: "/login", component: Login },
        { path: "/register", component: Signup },
        { path: "/counter-test", component: CounterTest },
    ]
});
