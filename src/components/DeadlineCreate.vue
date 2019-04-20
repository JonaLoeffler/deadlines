<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="addDeadline({deadline: deadline})" class="form">
          <div class="form-group form-row">
            <div class="col">
              <datepicker
                v-model="deadline.date"
                :bootstrap-styling="true"
                format="dd.MM.yyyy"
                :monday-first="true"
              ></datepicker>
            </div>
            <div class="col">
              <input class="form-control" type="time" v-model="deadline.time">
            </div>
          </div>
          <div class="form-group form-row">
            <div class="col">
              <input type="text" class="form-control" v-model="title">
            </div>
          </div>
          <div class="form-group">
            <button type="submit" class="btn">Speichern</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import { mapMutations } from "vuex";

export default {
  components: {
    Datepicker
  },
  data() {
    return {
      deadline: {
        title: "",
        time: null,
        date: null,
        timestamp: new Date()
      },
      title: ""
    };
  },
  methods: {
    ...mapMutations(["addDeadline"])
  },
};
</script>

