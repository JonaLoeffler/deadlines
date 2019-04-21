<template>
  <ul class="list-unstyled">
    <Deadline v-for="deadline in future" :key="deadline.id" :deadline="deadline"></Deadline>
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

