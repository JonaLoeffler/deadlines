<template>
  <div id="app">
    <div id="title">
      <h1>Deadlines</h1>
    </div>

    <div class="container mt-5">
      <div class="row">
        <div id="list" class="col-lg-8">
          <deadline-list></deadline-list>
        </div>
        <div id="form" class="col-lg-4 d-none d-lg-block">
          <deadline-form></deadline-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DeadlineList from "./components/DeadlineList";
import DeadlineForm from "./components/DeadlineForm";

export default {
  name: "app",
  components: {
    DeadlineList,
    DeadlineForm
  }
};
</script>

<style>
#app {
  color: #fff;
  min-height: 100vh;
  background-color: #2b2b2b;
}

#title {
  padding: 15px 20px;
  background-color: #03a9f4;
}

#title h1 {
  margin-bottom: 0;
}

#form {
  border-left: 2px solid #03a9f4;
}

.btn {
  border: 2px solid #3b3b3b;
  padding: 15px 25px;
  color: #fff;
  border-radius: 50px;
  background-color: #3b3b3b;
}

.btn:hover {
  background-color: #3b3b3b;
  border: 2px solid #03a9f4;
}
</style>
