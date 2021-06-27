export const actions = {
    async nuxtServerInit(context) {
        await Promise.all([
            context.dispatch("results/loadResults"),
            context.dispatch("players/loadPlayers")
        ]);
    }
};

export const strict = false;