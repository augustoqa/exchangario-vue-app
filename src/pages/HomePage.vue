<template>
  <div>
    <exchange-hero />

    <exchange-list :exchanges="exchanges" />

    <exchange-pagination />
  </div>
</template>

<script>
import ExchangeList from '../components/ExchangeList.vue'
import ExchangePagination from '../components/ExchangePagination.vue'
import ExchangeHero from '../components/ExchangeHero.vue'

export default {
  name: 'HomePage',
  components: {
    ExchangeList,
    ExchangePagination,
    ExchangeHero,
  },
  computed: {
    exchanges() {
      return this.$store.state.exchange.items
    },
  },
  created() {
    this.$store.dispatch('exchange/getExchanges')
  },
}
</script>
