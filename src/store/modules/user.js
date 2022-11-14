import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import db from '../../db'

export default {
  namespaced: true,
  state() {
    return {
      register: {
        isProcessing: false,
        error: '',
      },
    }
  },
  mutations: {
    setRegisterIsProcessing(state, isProcessing) {
      state.register.isProcessing = isProcessing
    },
    setRegisterError(state, error) {
      state.register.error = error
    },
  },
  actions: {
    async register({ commit, dispatch }, { email, password, username }) {
      commit('setRegisterIsProcessing', true)
      commit('setRegisterError', '')

      try {
        const { user } = await createUserWithEmailAndPassword(
          getAuth(),
          email,
          password
        )

        await dispatch('createUserProfile', {
          id: user.uid,
          username,
          avatar: 'https://cdn-icons-png.flaticon.com/512/4086/4086679.png',
          credit: 0,
          exchanges: [],
        })
      } catch (e) {
        commit('setRegisterError', e.message)
        dispatch('toast/error', e.message, { root: true })
      } finally {
        commit('setRegisterIsProcessing', false)
      }
    },
    async createUserProfile(_, { id, ...profile }) {
      await setDoc(doc(db, 'users', id), profile)
    },
  },
}
