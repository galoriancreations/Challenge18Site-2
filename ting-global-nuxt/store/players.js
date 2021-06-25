
export const namespaced = false;

export const state = () => ({
    players: []
});

export const getters = {
    players(state) {
        return state.players;
    }
};
