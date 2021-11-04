<template>
  <div id="app">
    <BaseButton @click="increment">Click me</BaseButton>
    <p>{{ count }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BaseButton from "./components/BaseButton.vue";

export default Vue.extend({
  name: "App",
  components: {
    BaseButton,
  },
  data: () => ({ count: 0 }),
  methods: {
    increment() {
      this.count += 1;
    },
  },
});
</script>
