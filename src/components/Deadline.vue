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
        <div class="text-center" v-if="deadline.timestamp > Date.now()">
          <span v-if="days > 0">
            <span class="font-digital">{{days}}</span>  Tage
          </span>
          <span class="font-digital">{{pad(hours)}}</span>H
          <span class="font-digital">{{pad(minutes)}}</span>M
          <span class="font-digital">{{pad(seconds)}}</span>S
        </div>

        <div class="text-center" v-if="deadline.timestamp <= Date.now()">
          <span class="font-digital">
            <small>{{new Date(deadline.timestamp).toLocaleString()}}</small>
          </span>
        </div>
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
    remaining: function() {
      return new Date(this.deadline.timestamp - this.now * 1000);
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
