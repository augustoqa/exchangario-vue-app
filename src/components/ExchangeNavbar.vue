<template>
  <header class="header">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a
            class="navbar-item has-text-white is-size-2 has-text-weight-bold"
            href="#"
          >
            {{ title }}
          </a>
          <span
            role="button"
            tabindex="0"
            class="navbar-burger burger has-text-white"
            data-target="navbar-menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbar-menu" class="navbar-menu">
          <div class="navbar-end">
            <a
              v-for="item in items"
              v-bind:key="item.text"
              class="navbar-item nav-home"
              href="#"
              >{{ item.text }}</a
            >
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Exchangario',
    },
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>
