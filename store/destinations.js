import api from '@/api/destinations'

export const state = () => ({
  list: []
})

export const mutations = {
  set (state, data) {
    Array.prototype.push.apply(state.list, data)
  }
}

export const actions = {
  load ({ commit }) {
    return api.get()
      .then((res) => {
        commit('set', res.data)
      })
  }
}
