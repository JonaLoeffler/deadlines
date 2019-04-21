<template>
  <ul class="list-unstyled">
    <Deadline
      v-for="deadline in future"
      :key="deadline.id"
      :deadline="deadline"
      v-on:edit-deadline="editDeadline({id: $event})"
    ></Deadline>
    <li v-if="future.length == 0" class="text-center">Noch keine Deadlines vorhanden</li>
  </ul>
</template>

<script>
import Deadline from "./Deadline";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Deadline
  },
  computed: {
    ...mapGetters(["future", "past"])
  },
  methods: {
    ...mapActions(["editDeadline"])
  }
};
</script>

