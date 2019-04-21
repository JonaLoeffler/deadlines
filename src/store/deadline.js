export default {
    state: {
        meta: {
            overlay: false
        },
        deadlines: [
            // {
            //     "id": 1,
            //     "title": "Deadline 1",
            //     "timestamp": 1555891200000
            // },
            // {
            //     "id": 2,
            //     "title": "Deadline 2",
            //     "timestamp": 1555891200000
            // },
            // {
            //     "id": 3,
            //     "title": "Deadline 3",
            //     "timestamp": 1555891200000
            // },
            // {
            //     "id": 4,
            //     "title": "Deadline 4",
            //     "timestamp": 1555891200000
            // },
        ]
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
                id: Math.floor((Math.random() * 100000) + 1),
                title: payload.deadline.title,
                timestamp: date
            });
        },
        toggleOverlay(state) {
            state.meta.overlay = !state.meta.overlay
        }
    },
    getters: {
        deadlines: state => state.deadlines,
        sorted: state => state.deadlines.sort((a, b) => a.timestamp > b.timestamp),
        future: (state, getters) => getters.sorted.filter(deadline => deadline.timestamp >= new Date().getTime()),
        past: (state, getters) => getters.sorted.filter(deadline => deadline.timestamp < new Date().getTime()),
        overlay: state => state.meta.overlay
    }
}