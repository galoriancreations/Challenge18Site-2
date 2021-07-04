export const actions = {
    async nuxtServerInit({ dispatch, getters }) {
        dispatch("tryAutoLogin");
        await Promise.all([
            getters.isAuth && dispatch("updateUser"),
            dispatch("results/loadResults"),
            dispatch("players/loadPlayers")
        ]);
    }
};