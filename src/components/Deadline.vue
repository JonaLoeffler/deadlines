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
        <div class="text-center" v-if="deadline.date > Date.now()">
          <span v-if="days > 0">
            <span class="font-digital">{{days}}</span> Tage
          </span>
          <span class="font-digital">{{pad(hours)}}</span>H
          <span class="font-digital">{{pad(minutes)}}</span>M
          <span class="font-digital">{{pad(seconds)}}</span>S
        </div>

        <div class="text-center" v-if="deadline.date <= Date.now()">
          <span class="font-digital">
            <small>{{deadline.date.toLocaleString()}}</small>
          </span>
        </div>
      </router-link>
    </div>
  </li>
</template>

<script>
import moment from "moment";

export default {
  props: {
    deadline: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      now: new Date(),
    };
  },
  mounted() {
    window.setInterval(() => {
      this.now = new Date();
    }, 1000);
  },
  methods: {
    pad: function (value) {
      return String("00" + value).slice(-2);
    },
  },
  computed: {
    remaining: function () {
      return moment.duration(moment(this.deadline.date).diff(this.now));
    },
    days: function () {
      return this.remaining.get('days');
    },
    hours: function () {
      return this.remaining.get('hours');
    },
    minutes: function () {
      return this.remaining.get('minutes');
    },
    seconds: function () {
      return this.remaining.get("seconds");
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-deadline > .text-left {
  white-space: normal;
}
</style>
