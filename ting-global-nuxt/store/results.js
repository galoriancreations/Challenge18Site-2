export const namespaced = false;

export const state = () => ({
    results: {},
    loadingResults: true
});

export const mutations = {
    setResults(state, results) {
        state.results = results;
        state.loadingResults = false;
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
    loadingResults(state) {
        return state.loadingResults;
    }
};