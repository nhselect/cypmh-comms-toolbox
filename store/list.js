export const state = () => ({
  items: [],
  title: '',
})

export const getters = {
  getItems(state) {
    return state.items
  },
  getTitle(state) {
    return state.title
  },
}

export const mutations = {
  addItem(state, item) {
    if (!state.items.includes(item)) {
      state.items.push(item)
    }
  },
  removeItem(state, item) {
    const i = state.items.indexOf(item)
    if (i > -1) {
      state.item.splice(i, 1)
    }
  },
  setItems(state, items) {
    state.items = items
  },
  setTitle(state, title) {
    state.title = title
  },
}
