export default {
    state: {
        deadlines: []
    },
    mutations: {
        pushDeadline(state, deadline) {
            state.deadlines.push(deadline);
        },
        spliceDeadline(state, newDeadline) {
            state.deadlines.splice(
                state.deadlines.findIndex(deadline => newDeadline.id === deadline.id),
                1,
                newDeadline
            )
        },
    },
    actions: {
        addOrUpdate({ commit }, payload) {
            payload.date.setHours(
                payload.time.substring(0, 2),
                payload.time.substring(3, 5)
            )

            var deadline = {
                id: payload.id ? payload.id : Math.floor((Math.random() * 100000) + 1),
                title: payload.title,
                date: payload.date
            }

            if (!payload.id) {
                commit('pushDeadline', deadline)
            } else {
                commit('spliceDeadline', deadline)
            }
        },
        saveDeadlines({ state }) {
            state.deadlines.forEach(deadline => localStorage.setItem('deadline-' + deadline.id, JSON.stringify(deadline)))
        },
        restoreDeadlines({ commit }) {
            Object.keys(localStorage)
                .filter(key => key.substr(0, 8) == 'deadline')
                .map(key => JSON.parse(localStorage.getItem(key)))
                // convert old deadline format
                .map(function (deadline) {
                    if (deadline.hasOwnProperty('date')) {
                        deadline.date = new Date(deadline.date)
                    } else if (deadline.hasOwnProperty('timestamp')) {
                        deadline.date = new Date(deadline.timestamp)
                    }

                    return deadline
                })
                .forEach(deadline => commit('pushDeadline', deadline))
        }
    },
    getters: {
        deadlines: state => state.deadlines,
        sorted: state => state.deadlines.sort((a, b) => a.date.getTime() - b.date.getTime()),
        future: (state, getters) => getters.sorted.filter(deadline => deadline.date.getTime() >= Date.now()),
        past: (state, getters) => getters.sorted
            .filter(deadline => deadline.date.getTime() < Date.now())
            .sort((a, b) => a.date.getTime() < b.date.getTime()),
    }
}