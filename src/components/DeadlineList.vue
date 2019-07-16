<template>
  <ul class="list-unstyled">
    <Deadline v-for="deadline in deadlines" :key="deadline.id" :deadline="deadline"></Deadline>
    <li v-if="deadlines.length == 0" class="text-center">Noch keine Deadlines vorhanden</li>
  </ul>
</template>

<script>
import Deadline from "./Deadline";

export default {
  components: {
    Deadline
  },
  props: {
    deadlines: {
      type: Array,
      required: true
    }
  }
};
</script>

