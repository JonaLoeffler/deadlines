<template>
  <li>
    <div class="form-group">
      <router-link
        :to="{name: 'deadline.edit', params: {deadlineToEdit: deadline}}"
        class="btn btn-primary btn-block btn-deadline"
      >
        <div class="text-left">
          <b>{{deadline.title}}:</b>
        </div>
        <div class="text-center">{{formatted}}</div>
      </router-link>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    deadline: {
      type: Object,
      required: true
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
  methods: {
    pad: function(value) {
      return String("00" + value).slice(-2);
    }
  },
  computed: {
    formatted: function() {
      return (
        this.days +
        " Tage " +
        this.hours +
        "H " +
        this.minutes +
        "M " +
        this.seconds +
        "S"
      );
    },
    remaining: function() {
      return new Date(this.deadline.timestamp - this.now * 1000);
    },
    years: function() {
      return this.remaining.getFullYear() - 1970 || 0;
    },
    months: function() {
      return this.remaining.getMonth() || 0;
    },
    days: function() {
      return Math.round(this.remaining / (24 * 60 * 60 * 1000));
    },
    hours: function() {
      return this.remaining.getHours() || 0;
    },
    minutes: function() {
      return this.remaining.getMinutes() || 0;
    },
    seconds: function() {
      return this.remaining.getSeconds() || 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-deadline > .text-left {
  white-space: normal;
}
</style>
