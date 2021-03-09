<template>
  <div>
    <div>..............</div>
    {{ menu.foodname }}
  </div>
</template>

<script>
export default {
  computed: {
    menu() {
      var id = this.$route.params.id;
      return this.$store.getters.menus[id];
    },
  },
};
</script>

<style></style>
