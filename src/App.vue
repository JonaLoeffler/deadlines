<template>
  <div id="app">
    <div id="title">
      <div class="container">
        <div class="row">
          <div class="col">
            <router-link :to="{name: 'home'}">
              <h1>Deadlines</h1>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <transition :name="transitionName" mode="out-in">
      <router-view class="mt-4"></router-view>
    </transition>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "app",

  data() {
    return {
      transitionName: "slide-left"
    }
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
