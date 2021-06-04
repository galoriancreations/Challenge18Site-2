export default {
    state: {
        user: null,
        token: null
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload.user;
            state.token = payload.token;
        }
    },
    actions: {
        tryAutoLogin(context) {
            const user = JSON.parse(localStorage.getItem("user"));
            const { token } = localStorage;
            if (!user || !token) return;
            context.commit("setUser", { user, token });
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