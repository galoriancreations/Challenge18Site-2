import axios from "../assets/util/axios";

let logoutTimer;

export const namespaced = false;

export const state = () => ({
    user: null,
    token: null,
    templates: {},
    selectedTemplate: "szjfhszjhf"
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

        this.$cookies.set("userId", user.id);
        this.$cookies.set("token", token);
        this.$cookies.set("expirationDate", new Date(exp));

        const timeLeft = new Date(exp).getTime() - Date.now();
        logoutTimer = setTimeout(() => context.dispatch("logout"), timeLeft);
    },
    tryAutoLogin(context) {
        const { userId, token, expirationDate } = this.$cookies.getAll();

        if (!userId || !token || !expirationDate) return;
        const timeLeft = new Date(expirationDate).getTime() - Date.now();
        if (timeLeft <= 0) {
            context.dispatch("logout");
            return;
        }

        if (process.server) {
            context.commit("setUser", { user: { id: userId }, token });
        }
        clearTimeout(logoutTimer);
        logoutTimer = setTimeout(() => context.dispatch("logout"), timeLeft);
    },
    logout(context) {
        context.commit("removeUser");
        this.$cookies.removeAll();
        clearTimeout(logoutTimer);
    },
    async updateUser(context, data) {
        const { user: { id }, token } = context.getters;
        const { data: { user } } = await axios.post("/xapi",
            { userID: id, editProfile: data || {} },
            { headers: { Authorization: `Bearer ${token}` } }
        );
        context.commit("updateUser", user);
    },
    async loadTemplates(context, data) {
        const { user, token } = data || context.getters;
        const { data: { templates } } = await axios.post(
            "/xapi",
            { userID: user.id, getTemplateNames: true },
            { headers: { Authorization: `Bearer ${token}` } }
        );
        context.commit("setTemplates", templates);
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