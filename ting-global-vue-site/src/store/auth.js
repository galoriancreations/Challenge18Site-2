export default {
    state: {
        user: null,
        token: null
    },
    mutations: {

    },
    actions: {

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