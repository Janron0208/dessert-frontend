<template>
  <v-container>
    <div class="gallery">
      <v-row>
        <v-col
          v-for="(item, menus) in this.$store.state.menus"
          :key="menus.id"
          class="d-flex child-flex"
          cols="4"
        >
          <v-img :src="item.src" aspect-ratio="1" class="grey lighten-2">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Gallery",
  computed: {
    menus() {
      return this.$store.getters.menus;
    },
  },
  data: () => ({
    items: [],
  }),
  mounted() {
    console.log(this.$store.state.menus[0]);
  },
};
</script>
<style scoped>
.gallery {
  padding-left: 160px;
  padding-right: 160px;
}
</style>
