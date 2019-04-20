<template>
  <div>
    <h3>
      Deadline erstellen
      <button
        class="btn btn-dark float-right"
        v-if="overlay"
        @click="toggleOverlay()"
      >
        <i class="fa fa-times"></i>
      </button>
    </h3>

    <form @submit.prevent="submit" class="form">
      <div class="form-group"></div>
      <div class="form-group form-row">
        <div class="col-12">
          <label>Titel</label>
          <input type="text" class="form-control" v-model="deadline.title" required>
        </div>
      </div>
      <div class="form-group form-row">
        <div class="col-12">
          <label>Datum</label>
          <datepicker
            v-model="deadline.date"
            :bootstrap-styling="true"
            format="dd.MM.yyyy"
            :monday-first="true"
            :inline="true"
            :required="true"
          ></datepicker>
        </div>
      </div>
      <div class="form-group form-row">
        <div class="col-12">
          <label>Uhrzeit</label>
          <input class="form-control" type="time" v-model="deadline.time" required>
        </div>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary float-right">Speichern</button>
      </div>
    </form>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import { mapMutations, mapGetters } from "vuex";

export default {
  components: {
    Datepicker
  },
  data() {
    return {
      deadline: {
        title: "",
        time: new Date().getHours() + ":" + new Date().getMinutes(),
        date: new Date(),
        timestamp: new Date()
      }
    };
  },
  computed: {
    ...mapGetters(["overlay"])
  },
  methods: {
    ...mapMutations(["addDeadline", "toggleOverlay"]),
    submit: function() {
      this.addDeadline({ deadline: this.deadline });
      this.toggleOverlay();
    }
  }
};
</script>

