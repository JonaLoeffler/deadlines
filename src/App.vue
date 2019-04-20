<template>
  <div id="app">
    <deadline-list></deadline-list>

    <deadline-create></deadline-create>
  </div>
</template>

<script>
import DeadlineList from "./components/DeadlineList";
import DeadlineCreate from "./components/DeadlineCreate";

export default {
  name: "app",
  components: {
    DeadlineList,
    DeadlineCreate
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
