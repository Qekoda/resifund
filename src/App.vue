<template>
  <div id="app">
    <div class="container">
      <app-header />
      <main class="main">
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script>
const AppHeader = () => import('./components/AppHeader.vue')

export default {
  components: {
    AppHeader
  }
}
</script>

<style lang="sass" scoped>
.container
  height: 100vh
  padding: 50px
  display: flex
  flex-direction: column

.main
  flex: 1
  min-height: 300px
</style>