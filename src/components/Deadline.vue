<template>
  <li>{{remaining}}</li>
</template>

<script>
export default {
  props: {
    deadline: {
      type: Number,
      required: true,
      default: 12
    }
  },
  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000)
    };
  },
  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
    });
  },
  computed: {
    remaining: function() {
      return new Date(this.deadline - this.now * 1000).toLocaleString();
    }
  }
};
</script>
