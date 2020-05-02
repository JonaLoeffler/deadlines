<template>
  <div id="app">
    <nav class="navbar navbar-light fixed-top">
      <div class="container">
        <router-link :to="{name: 'home'}" class="navbar-brand">Deadlines</router-link>
      </div>
    </nav>

    <main id="main">
      <transition :name="transitionName" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "app",

  data() {
    return {
      transitionName: "slide-left"
    };
  },
  methods: {
    ...mapActions(["restoreDeadlines"])
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    }
  },
  mounted() {
    this.restoreDeadlines();
  }
};
</script>

<style lang="scss">
@import "./assets/sass/app.scss";
</style>
