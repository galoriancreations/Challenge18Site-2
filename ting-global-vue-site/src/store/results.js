export default {
    state: {
        results: {},
        loadingResults: true
    },
    mutations: {
        setResults(state, results) {
            state.results = results;
            state.loadingResults = false;
        }
    },
    actions: {
        updateResults(context, results) {
            context.commit("setResults", results);
        }
    },
    getters: {
        results(state) {
            return state.results;
        },
        loadingResults(state) {
            return state.loadingResults;
        }
    }
};