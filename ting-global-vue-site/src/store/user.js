import axios from "../util/axios";

// localStorage.setItem("user", JSON.stringify({
//     id: "dkghdjghkdjhkdf",
//     phone: "+972587111965",
//     username: "new-org0001",
//     organization: "New Organization",
//     email: "org@gmail.com",
//     accountType: "organization",
//     language: "Korean",
//     plan: "3-years"
// }))

let logoutTimer;

export default {
    state: {
        user: null,
        token: null,
        selectedTemplate: null
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
        setTemplate(state, payload) {
            state.selectedTemplate = payload;
        }
    },
    actions: {
        async auth(context, { mode, data }) {
            const response = await axios.post("/api", { [mode]: data });
            const { access_token: token, user, exp } = response.data;
            context.commit("setUser", { user, token });

            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token", token);
            localStorage.setItem("expirationDate", new Date(exp).toISOString());

            const timeLeft = new Date(exp).getTime() - Date.now();
            logoutTimer = setTimeout(() => context.commit("logout"), timeLeft);

            const { io, user: loggedInUser } = context.getters;
            io.emit("joinRoom", loggedInUser.id);
        },
        tryAutoLogin(context) {
            const user = JSON.parse(localStorage.getItem("user"));
            const { token, expirationDate } = localStorage;
            if (!user || !token || !expirationDate) return;
            const timeLeft = new Date(expirationDate).getTime() - Date.now();
            if (timeLeft <= 0) {
                localStorage.clear();
                return;
            }
            context.commit("setUser", { user, token });
            logoutTimer = setTimeout(() => context.commit("logout"), timeLeft);

            const { io, user: loggedInUser } = context.getters;
            io.emit("joinRoom", loggedInUser.id);
        },
        logout(context) {
            context.commit("removeUser");
            localStorage.clear();
            clearTimeout(logoutTimer);
        },
        async updateUser(context, data) {
            const { user: { id }, token } = context.getters;
            const response = await axios.post("/xapi",
                { userID: id, editProfile: data },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            const { user } = response.data;
            context.commit("updateUser", user);
            localStorage.setItem("user", JSON.stringify(user));
        },
        selectTemplate(context, template) {
            context.commit("setTemplate", template);
            localStorage.setItem("selectedTemplate", template);
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
        selectedTemplate(state) {
            return state.selectedTemplate;
        }
    }
};