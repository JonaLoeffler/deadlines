<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <DeadlineList msg="Welcome to new Your Vue.js App"/>
  </div>
</template>

<script>
import DeadlineList from './components/DeadlineList.vue'

export default {
  name: 'app',
  components: {
    DeadlineList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
