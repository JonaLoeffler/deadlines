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
        <div id="list" class="col">
          <deadline-list></deadline-list>
        </div>
        <transition name="slide">
          <div id="form-overlay" class="col col-md-4" v-if="overlay">
            <deadline-form></deadline-form>
          </div>
        </transition>
      </div>
      <div class="row">
        <div class="col text-right">
          <button id="add" class="btn btn-fab" @click="createDeadline()" v-if="!overlay">
            <i class="fa fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DeadlineList from "./components/DeadlineList";
import DeadlineForm from "./components/DeadlineForm";
import { mapGetters, mapActions } from "vuex";

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
    ...mapActions(["createDeadline"])
  }
};
</script>

<style lang="scss">
@import "./assets/sass/app.scss";
</style>
