export const state = () => ({
  resources: [], // master list of resources
  activeList: [], // currently viewable list
  view: 'all', // all, filter, list, rapidaccess
})

export const getters = {
  getResources() {
    return state.resources
  },
  getView() {
    return state.view
  },
}

export const mutations = {
  set(view) {
    state.view = view
  },
}
