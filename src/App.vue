<script setup lang="ts">
</script>

<template>
  <div class="main">
    <router-view />
  </div>

</template>

<style>
/* Invisible Scrollbar */
* {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

*::-webkit-scrollbar {
  display: none;
}
</style>