<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <ul class="list-unstyled">
          <Deadline v-for="deadline in future" :key="deadline.id" :deadline="deadline"></Deadline>
          <li v-if="future.length == 0" class="text-center">Noch keine Deadlines vorhanden</li>
        </ul>
      </div>
    </div>

    <div class="row">
      <div class="col text-right">
        <router-link :to="{name: 'deadline.create'}" id="add" class="btn btn-fab">
          <i class="fa fa-plus"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Deadline from "./Deadline";
import { mapGetters } from "vuex";

export default {
  components: {
    Deadline
  },
  computed: {
    ...mapGetters(["future", "past"])
  }
};
</script>

