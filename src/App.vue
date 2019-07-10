<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.utils.loadJsFirst();
  }
}
</script>

<style>
</style>
