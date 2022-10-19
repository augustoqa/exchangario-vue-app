export default {
  namespaced: true,
  actions: {
    register(context, { email, password }) {
      console.log(email)
      console.log(password)

      //   Firebase functionality to register user
    },
  },
}
