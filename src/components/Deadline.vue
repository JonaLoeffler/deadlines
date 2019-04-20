<template>
  <li>
    <!-- Y M D H m s -->
    <!--           x > 1 Year:  Y M D -->
    <!--  1 Year > x > 1 D:     M D H -->
    <!--  1 Year > x > 1 D:     D H m -->
    <!--  1 Year > x > 1 D:     H m s -->
    {{ formatted }}
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
    }
  },
  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000)
    })
  },
  computed: {
    formatted: function() {
      if (this.years > 1) {
        return (
          this.years +
          " Jahre, " +
          this.months +
          " Monate, " +
          this.days +
          " Tage, "
        )
      } else if (this.days > 1) {
        return (
          this.months +
          " Monate, " +
          this.days +
          " Tage, " +
          this.hours +
          " Stunden"
        )
      } else {
        return this.hours + ":" + this.minutes + ":" + this.seconds
      }
    },
    remaining: function() {
      return new Date(this.deadline.date - this.now * 1000)
    },
    years: function() {
      return this.remaining.getFullYear() - 1970 || 0
    },
    months: function() {
      return this.remaining.getMonth() || 0
    },
    days: function() {
      return this.remaining.getDate() || 0
    },
    hours: function() {
      return this.remaining.getHours() || 0
    },
    minutes: function() {
      return this.remaining.getMinutes() || 0
    },
    seconds: function() {
      return this.remaining.getSeconds() || 0
    }
  }
}
</script>
