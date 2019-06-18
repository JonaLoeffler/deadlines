<template>
  <div>
    <h3>
      Deadline
      <span v-if="deadlineToEdit">bearbeiten</span>
      <span v-if="!deadlineToEdit">erstellen</span>
      <button class="btn btn-close float-right" v-if="overlay" @click="toggleOverlay()">
        <i class="fa fa-times"></i>
      </button>
    </h3>

    <form @submit.prevent="submit" class="form">
      <div class="form-group"></div>
      <div class="form-group form-row">
        <div class="col-12">
          <label>Titel</label>
          <input type="text" class="form-control" v-model="deadline.title" required autofocus>
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
      <div class="form-group text-right">
        <button type="submit" class="btn btn-primary">Speichern</button>
      </div>
    </form>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import { mapMutations, mapActions, mapGetters } from "vuex";

export default {
  components: {
    Datepicker
  },

  data() {
    return {
      deadline: {
        id: null,
        title: "",
        time:
          this.pad(new Date().getHours()) +
          ":" +
          this.pad(new Date().getMinutes() + 5),
        date: new Date()
      }
    };
  },
  computed: {
    ...mapGetters(["overlay", "deadlineToEdit"])
  },
  methods: {
    ...mapMutations(["toggleOverlay"]),
    ...mapActions(["addOrUpdate", "saveDeadlines"]),
    submit: function() {
      this.addOrUpdate(this.deadline);

      this.saveDeadlines();

      this.toggleOverlay();
    },
    pad: function(value) {
      return String("00" + value).slice(-2);
    }
  },
  mounted() {
    if (this.deadlineToEdit) {
      var date = new Date(this.deadlineToEdit.timestamp);
      var time = this.pad(date.getHours()) + ":" + this.pad(date.getMinutes());

      this.deadline = {
        id: this.deadlineToEdit.id,
        title: this.deadlineToEdit.title,
        date: date,
        time: time
      };
    }
  }
};
</script>

