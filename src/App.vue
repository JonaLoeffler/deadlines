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

<style>
#app {
  color: #fff;
  min-height: 100vh;
  background-color: #2b2b2b;
}

#title {
  padding: 15px 20px;
  background-color: #03a9f4;
}

#title h1 {
  margin-bottom: 0;
}

#form {
  border-left: 2px solid #03a9f4;
}

#add {
  position: absolute;
  right: 30px;
  bottom: 30px;
}

#form-overlay {
  position: absolute;
  top: 78px;
  width: 100%;
  /* right: 0;
  left: 0; */
  background-color: #2b2b2b;
}

@keyframes enter {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

.slide-enter-active {
  animation: enter 0.3s ease;
}
.slide-leave-active {
  animation: enter 0.3s ease reverse;
}

.btn-primary {
  border: 2px solid #3b3b3b;
  padding: 15px 25px;
  color: #fff;
  border-radius: 50px;
  background-color: #3b3b3b;
}

.btn-primary:hover {
  background-color: #3b3b3b;
  border: 2px solid #03a9f4;
}

.btn-fab {
  padding: 15px 20px;
  border-radius: 50px;
  background-color: rgb(230, 18, 18);
  border: none !important;
}
.btn-fab:hover,
.btn-fab:active {
  background-color: rgb(194, 15, 15);
}

input.form-control,
input.form-control:read-only {
  color: #fff;
  padding: 15px 25px;
  border-radius: 50px;
  border: 2px solid #3b3b3b;
  background-color: #3b3b3b;
}

input.form-control:focus {
  color: #fff;
  border: 2px solid #03a9f4;
  background-color: #3b3b3b;
}

.vdp-datepicker__calendar {
  width: 100% !important;
  background-color: #3b3b3b !important;
  border: none !important;
  border-radius: 15px !important;
}
</style>
