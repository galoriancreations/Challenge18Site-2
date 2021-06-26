export const state = () => ({
    players: [],
    loading: true,
    error: null
});

export const mutations = {
    setPlayers(state, payload) {
        state.loading = false;
        state.players = payload;
    },
    setError(state, payload) {
        state.loading = false;
        state.error = payload;
    }
};

export const getters = {
    players(state) {
        return state.players;
    }
};
