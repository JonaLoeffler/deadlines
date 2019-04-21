export default {
    state: {
        meta: {
            overlay: false,
            editId: null
        },
        deadlines: []
    },
    mutations: {
        addOrUpdate(state, payload) {
            var date = new Date(
                payload.date.getTime()
            );

            date.setHours(
                payload.time.substring(0, 2)
            )
            date.setMinutes(
                payload.time.substring(3, 5)
            )

            var newDeadline = {
                id: payload.id ? payload.id : Math.floor((Math.random() * 100000) + 1),
                title: payload.title,
                timestamp: date
            }

            if (!payload.id) {
                state.deadlines.push(newDeadline);
            } else {
                var index = state.deadlines.findIndex(deadline => deadline.id === payload.id)

                state.deadlines.splice(index, 1, newDeadline)
            }
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