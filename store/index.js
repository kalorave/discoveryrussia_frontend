export const strict = false

export const actions = {
  nuxtServerInit ({ dispatch }) {
    return Promise.all([
      dispatch('destinations/load'),
      dispatch('themes/load')
    ])
  }
}
