import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export const store = createStore({
    state: () => {
        return {
            message: 'count number',
            counter: 0,
        }
    },
    mutations: {
        doit: (state) => {
            const n = Math.floor(Math.random() * 10)
            state.counter += n
            state.message = 'add ' + n + '.';
        },
        reset: (state) => {
            state.counter = 0
            state.message = 'reset!!'
        },
    },
    plugins: [
        createPersistedState(),
    ]
})