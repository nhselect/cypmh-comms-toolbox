export const state = () => ({
  text: '',
  duration: 0,
  formats: [],
  easyRead: false,
  livedExperience: false,
  certifiable: false,
})

export const getters = {
  getFilter(state) {
    return state
  },
}

export const mutations = {
  setText(state, text) {
    state.text = text
  },
  setDuration(state, duration) {
    state.duration = duration
  },
  setFormats(state, formats) {
    state.formats = formats
  },
  toggleEasyRead(state) {
    state.easyRead = !state.easyRead
  },
  toggleLiveExperience(state) {
    state.livedExperience = !state.livedExperience
  },
  toggleCertifiable(state) {
    state.certifiable = !state.certifiable
  },
}
