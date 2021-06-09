import axios from "../util/axios";

let logoutTimer;

export default {
    state: {
        user: null,
        token: null
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
        }
    }
};