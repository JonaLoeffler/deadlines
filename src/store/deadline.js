export default {
    state: {
        deadlines: []
    },
    mutations: {
        addDeadline(state, payload) {
            var date = new Date(
                payload.deadline.date.getTime()
            );

            date.setHours(
                payload.deadline.time.substring(0, 2)
            )
            date.setMinutes(
                payload.deadline.time.substring(3, 5)
            )

            state.deadlines.push({
                id:  Math.floor((Math.random() * 100000) + 1),
                title: payload.deadline.title,
                timestamp: date
            });
        }
    },
    getters: {
        deadlines: state => { return state.deadlines },
        sorted: state => { return state.deadlines.sort((a, b) => a.timestamp > b.timestamp) },
        future: (state, getters) => { return getters.sorted.filter(deadline => deadline.timestamp >= new Date().getTime()) },
        past: (state, getters) => { return getters.sorted.filter(deadline => deadline.timestamp < new Date().getTime()) }
    }
}