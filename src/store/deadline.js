export default {
    state: {
        deadlines: []
    },
    mutations: {
        addDeadline(state, payload) {
            state.deadlines.push(payload.deadline);
        }
    },
    getters: {
        deadlines: state => { return state.deadlines },
        sorted: state => { return state.deadlines.sort((a, b) => { return a.timestamp > b.timestamp }) }
    }
}