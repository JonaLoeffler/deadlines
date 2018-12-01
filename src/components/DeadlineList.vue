<template>
  <ul>
    <Deadline :deadline="deadline" v-for="deadline in deadlines" v-bind:key="deadline"></Deadline>
  </ul>
</template>

<script>
import Deadline from "./Deadline";
export default {
  components: {
    Deadline
  },
  data() {
    return {
      deadlines: [1543686967656]
    };
  }
};
</script>

