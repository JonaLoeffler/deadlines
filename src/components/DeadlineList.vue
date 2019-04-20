<template>
  <ul class="list-unstyled">
    <Deadline :deadline="deadline" v-for="deadline in future" :key="deadline.id"></Deadline>
  </ul>
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

