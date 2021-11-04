<template>
  <button v-on="$listeners">
    <slot />
  </button>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "BaseButton",
});
</script>
