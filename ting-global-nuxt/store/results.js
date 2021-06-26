export const state = () => ({
    results: {},
    loading: true,
    error: null
});

export const mutations = {
    setResults(state, payload) {
        state.results = payload;
        state.loading = false;
    },
    setError(state, payload) {
        state.error = payload;
        state.loading = false;
    }
};

export const actions = {
    updateResults(context, results) {
        context.commit("setResults", results);
    }
};

export const getters = {
    results(state) {
        return state.results;
    },
    loading(state) {
        return state.loading;
    }
};