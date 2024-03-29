import db from '../../db'
import {
  query,
  collectionGroup,
  getDocs,
  doc,
  addDoc,
  collection,
} from 'firebase/firestore'

export default {
  namespaced: true,
  state() {
    return {
      items: [],
    }
  },
  actions: {
    async getExchanges({ commit }) {
      const exchangeQuery = query(collectionGroup(db, 'exchanges'))
      const snapshot = await getDocs(exchangeQuery)

      const exchanges = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))

      commit('setExchanges', exchanges)
    },
    async createExchange({ rootState, dispatch }, { data, onSuccess }) {
      const userRef = doc(db, 'users', rootState.user.data.id)
      data.user = userRef

      await addDoc(collection(db, 'exchanges'), data)

      dispatch('toast/success', 'Exchange was created successfully!', {
        root: true,
      })

      onSuccess()
    },
  },
  mutations: {
    setExchanges(state, exchanges) {
      state.items = exchanges
    },
  },
}
