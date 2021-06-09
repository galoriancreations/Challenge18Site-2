import axios from "../util/axios";

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
            console.log(response.data)
            const { access_token: token, user } = response.data;
            context.commit("setUser", { user, token });

            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
        },
        tryAutoLogin(context) {
            const user = JSON.parse(localStorage.getItem("user"));
            const { token } = localStorage;
            if (!user || !token) return;
            context.commit("setUser", { user, token });
        },
        logout(context) {
            context.commit("removeUser");
            localStorage.clear();
        },
        async updateUser(context, data) {
            const { user: { id }, token } = context.getters;
            const response = await axios.post("/xapi",
                { userID: id, editProfile: data },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            console.log(response.data)
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