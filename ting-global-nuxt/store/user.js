import axios from "../assets/util/axios";
import template from "../assets/data/challenge-options.json";

let logoutTimer;

export default {
    state: {
        user: null,
        token: null,
        templates: {},
        selectedTemplate: template
    },
    mutations: {
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
    },
    actions: {
        async auth(context, { mode, data }) {
            const response = await axios.post("/api", { [mode]: data });
            const { access_token: token, user, exp } = response.data;
            await context.dispatch("loadTemplates", { user, token });
            context.commit("setUser", { user, token });

            this.$cookies.set("user", { ...user, myChallenges: {} });
            this.$cookies.set("token", token);
            this.$cookies.set("expirationDate", new Date(exp).toISOString());
            localStorage.setItem("challenges", JSON.stringify(user.myChallenges));

            const timeLeft = new Date(exp).getTime() - Date.now();
            logoutTimer = setTimeout(() => context.dispatch("logout"), timeLeft);

            const { io } = context.getters;
            io.emit("joinRoom", user.id);
        },
        tryAutoLogin(context) {
            const user = this.$cookies.get("user");
            const token = this.$cookies.get("token");
            const expirationDate = this.$cookies.get("expirationDate");
            const templates = this.$cookies.get("templates");

            if (!user || !token || !expirationDate || !templates) return;
            const timeLeft = new Date(expirationDate).getTime() - Date.now();
            if (timeLeft <= 0) {
                context.dispatch("logout");
                return;
            }
            context.commit("setUser", { user, token });
            context.commit("setTemplates", templates);
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
                { userID: id, editProfile: data },
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
            user.myChallenges = challenges;
            context.commit("updateUser", user);
            localStorage.setItem("challenges", JSON.stringify(challenges));
        },
        async updateDrafts(context, draft) {
            console.log(draft)
        }
    },
    getters: {
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
    }
};