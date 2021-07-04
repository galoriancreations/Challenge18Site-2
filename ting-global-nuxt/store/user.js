import axios from "../assets/util/axios";

let logoutTimer;

export const namespaced = false;

export const state = () => ({
    user: null,
    token: null,
    templates: {},
    selectedTemplate: require("uniqid")()
});

export const mutations = {
    setUser(state, payload) {
        state.user = payload.user;
        state.token = payload.token;
    },
    removeUser(state) {
        state.user = null;
        state.token = null;
    },
    updateUser(state, payload) {
        state.user = payload;
    },
    setTemplates(state, payload) {
        state.templates = payload;
    },
    setSelectedTemplate(state, payload) {
        state.selectedTemplate = payload;
    }
};

export const actions = {
    async auth(context, { mode, data }) {
        const response = await axios.post("/api", { [mode]: data });
        const { access_token: token, user, exp } = response.data;
        await context.dispatch("loadTemplates", { user, token });
        context.commit("setUser", { user, token });

        this.$cookies.set("user", { ...user, myChallenges: {} });
        this.$cookies.set("token", token);
        this.$cookies.set("expirationDate", new Date(exp));
        localStorage.setItem("challenges", JSON.stringify(user.myChallenges || {}));

        const timeLeft = new Date(exp).getTime() - Date.now();
        logoutTimer = setTimeout(() => context.dispatch("logout"), timeLeft);
    },
    tryAutoLogin(context) {
        const { user, token, expirationDate, templates } = this.$cookies.getAll();

        if (!user || !token || !expirationDate || !templates) return;
        const timeLeft = new Date(expirationDate).getTime() - Date.now();
        if (timeLeft <= 0) {
            context.dispatch("logout");
            return;
        }

        if (process.client) {
            user.myChallenges = JSON.parse(localStorage.getItem("challenges")) || {};
        }
        context.commit("setUser", { user, token });
        context.commit("setTemplates", templates);
        clearTimeout(logoutTimer);
        logoutTimer = setTimeout(() => context.dispatch("logout"), timeLeft);
    },
    logout(context) {
        context.commit("removeUser");
        this.$cookies.removeAll();
        localStorage.clear();
        clearTimeout(logoutTimer);
    },
    async updateUser(context, data) {
        const { user: { id }, token } = context.getters;
        const { data: { user } } = await axios.post("/xapi",
            { userID: id, editProfile: data || {} },
            { headers: { Authorization: `Bearer ${token}` } }
        );
        context.commit("updateUser", user);
        this.$cookies.set("user", { ...user, myChallenges: {} });
    },
    async loadTemplates(context, { user, token }) {
        const { data: { templates } } = await axios.post(
            "/xapi",
            { userID: user.id, getTemplateNames: true },
            { headers: { Authorization: `Bearer ${token}` } }
        );
        context.commit("setTemplates", templates);
        this.$cookies.set("templates", templates);
    },
    selectTemplate(context, template) {
        context.commit("setSelectedTemplate", template);
        this.$cookies.remove("draftId");
    },
    async updateTemplates(context, templateData) {
        console.log(templateData)
        // localStorage.setItem("templates", JSON.stringify(templates));
    },
    updateChallenges(context, challenges) {
        const { user } = context.getters;
        context.commit("updateUser", { ...user, myChallenges: challenges });
        localStorage.setItem("challenges", JSON.stringify(challenges));
    },
    async updateDrafts(context, draft) {
        console.log(draft)
        // this.$cookies.set("draftId", draft.id);
    }
};

export const getters = {
    isAuth(state) {
        return !!state.token && !!state.user;
    },
    token(state) {
        return state.token;
    },
    user(state) {
        return state.user;
    },
    templates(state) {
        return state.templates;
    },
    selectedTemplate(state) {
        return state.selectedTemplate;
    }
};