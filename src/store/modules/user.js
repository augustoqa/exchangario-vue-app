import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import db from '../../db'

export default {
  namespaced: true,
  state() {
    return {
      data: null,
      auth: {
        isProcessing: false,
        error: '',
      },
    }
  },
  mutations: {
    setAuthIsProcessing(state, isProcessing) {
      state.auth.isProcessing = isProcessing
    },
    setAuthError(state, error) {
      state.auth.error = error
    },
    setUser(state, user) {
      state.data = user
    },
  },
  actions: {
    onAuthChange({ dispatch }) {
      onAuthStateChanged(getAuth(), async (user) => {
        if (user) {
          dispatch('getUserProfile', user)
        } else {
          console.log('Logged out')
        }
      })
    },
    async getUserProfile({ commit }, user) {
      const docRef = doc(db, 'users', user.uid)
      const docSnap = await getDoc(docRef)
      const userProfile = docSnap.data()
      const userWithProfile = {
        id: user.uid,
        email: user.email,
        ...userProfile,
      }

      commit('setUser', userWithProfile)
    },
    async register({ commit, dispatch }, { email, password, username }) {
      commit('setAuthIsProcessing', true)
      commit('setAuthError', '')

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
        commit('setAuthError', e.message)
        dispatch('toast/error', e.message, { root: true })
      } finally {
        commit('setAuthIsProcessing', false)
      }
    },
    async createUserProfile(_, { id, ...profile }) {
      await setDoc(doc(db, 'users', id), profile)
    },
  },
  getters: {
    isAuthenticated(state) {
      return !!state.data
    },
  },
}
