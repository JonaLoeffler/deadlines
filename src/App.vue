<template>
  <div id="app">
    <div id="title">
      <div class="container">
        <div class="row">
          <div class="col">
            <h1>Deadlines</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-4">
      <div class="row">
        <div id="list" class="col-lg-8">
          <deadline-list></deadline-list>
        </div>
        <div id="form" class="col-lg-4 d-none d-lg-block">
          <deadline-form></deadline-form>
        </div>
      </div>
    </div>

    <transition name="slide">
      <div id="form-overlay" class="d-lg-none" v-if="overlay">
        <div class="container py-4">
          <div class="row">
            <div class="col">
              <deadline-form></deadline-form>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <button
      id="add"
      class="btn btn-fab d-md-block d-lg-none"
      @click="toggleOverlay()"
      v-if="!overlay"
    >
      <i class="fa fa-plus"></i>
    </button>
  </div>
</template>

<script>
import DeadlineList from "./components/DeadlineList";
import DeadlineForm from "./components/DeadlineForm";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "app",
  components: {
    DeadlineList,
    DeadlineForm
  },
  computed: {
    ...mapGetters(["overlay"])
  },
  methods: {
    ...mapMutations(["toggleOverlay"])
  }
};
</script>

<style lang="scss">
  @import './assets/sass/app.scss';
</style>
