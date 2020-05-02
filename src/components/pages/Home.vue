<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <deadline-list :deadlines="future"></deadline-list>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col">
        <button
          class="btn btn-dark btn-block"
          @click="showPastDeadlines = !showPastDeadlines"
        >vergangene Deadlines anzeigen</button>
      </div>
    </div>

    <div class="row" v-if="showPastDeadlines">
      <div class="col">
        <deadline-list :deadlines="past"></deadline-list>
      </div>
    </div>

    <router-link :to="{name: 'deadline.create'}" id="add" class="btn btn-fab">
      <i class="fa fa-plus"></i>
    </router-link>
  </div>
</template>

<script>
import DeadlineList from "./../DeadlineList";
import { mapGetters } from "vuex";

export default {
  components: {
    DeadlineList
  },
  data() {
    return {
      showPastDeadlines: false
    };
  },
  computed: {
    ...mapGetters(["future", "past"])
  }
};
</script>

