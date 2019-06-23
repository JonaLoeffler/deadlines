export default {
    state: {
        meta: {
            overlay: false,
            editId: null
        },
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
        toggleOverlay(state) {
            state.meta.overlay = !state.meta.overlay
        },
        showOverlay(state) {
            state.meta.overlay = true;
        },
        hideOverlay(state) {
            state.meta.overlay = false;
        },
        setEditId(state, id) {
            state.meta.editId = id
        },
        clearEditId(state) {
            state.meta.editId = null
        }
    },
    actions: {
        createDeadline({ commit }) {
            commit('clearEditId')

            commit('showOverlay')
        },
        editDeadline({ commit }, payload) {
            commit('hideOverlay')

            setTimeout(() => {
                commit('setEditId', payload.id)

                commit('showOverlay')
            }, 300);
        },
        addOrUpdate({ commit }, payload) {
            var date = new Date(
                payload.date.getTime()
            );

            date.setHours(
                payload.time.substring(0, 2)
            )
            date.setMinutes(
                payload.time.substring(3, 5)
            )

            var deadline = {
                id: payload.id ? payload.id : Math.floor((Math.random() * 100000) + 1),
                title: payload.title,
                timestamp: date.getTime()
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
                .forEach(key => commit('pushDeadline', JSON.parse(localStorage.getItem(key))))
        }
    },
    getters: {
        deadlines: state => state.deadlines,
        deadlineToEdit: state => state.deadlines.find(deadline => deadline.id === state.meta.editId),
        sorted: state => state.deadlines.sort((a, b) => a.timestamp > b.timestamp),
        future: (state, getters) => getters.sorted.filter(deadline => deadline.timestamp >= new Date().getTime()),
        past: (state, getters) => getters.sorted.filter(deadline => deadline.timestamp < new Date().getTime()),
        overlay: state => state.meta.overlay
    }
}