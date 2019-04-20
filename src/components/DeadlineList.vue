<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <ul>
          <Deadline :deadline="deadline" v-for="deadline in future" :key="deadline.id"></Deadline>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Deadline from "./Deadline";
import { mapGetters } from "vuex";

export default {
  components: {
    Deadline
  },
  computed: {
    ...mapGetters(["future", "past"])
  }
};
</script>

