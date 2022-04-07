<template>
  <div>
    <exchange-navbar :title="brandName" :items="menuItems" />

    <exchange-hero />

    <exchange-list />

    <exchange-pagination />
  </div>
</template>

<script>
import ExchangeNavbar from './components/ExchangeNavbar.vue'
import ExchangeHero from './components/ExchangeHero.vue'
import ExchangeList from './components/ExchangeList.vue'
import ExchangePagination from './components/ExchangePagination.vue'

export default {
  name: 'App',
  components: {
    ExchangeNavbar,
    ExchangeHero,
    ExchangeList,
    ExchangePagination,
  },
  data() {
    return {
      brandName: 'Exchangario',
      menuItems: [
        { text: 'Home' },
        { text: 'About' },
        { text: 'Faq' },
        { text: 'Login' },
        { text: 'Register' },
      ],
    }
  },
}
</script>

<style lang="scss">
@import 'assets/styles/variables.scss';
@import '~bulma/bulma.sass';
@import 'assets/styles/main.scss';
</style>
