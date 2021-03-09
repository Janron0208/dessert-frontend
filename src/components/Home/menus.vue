<template>
  <v-container>
    <div class="content">
      <v-row>
        <v-col
          v-for="(item, menus) in this.$store.state.menus"
          :key="menus.id"
          class="d-flex child-flex"
          cols="4"
        >
          <v-hover v-slot="{ hover }">
            <v-card elevation="5" :to="`/showmenu/th/`+menus+item.foodname+item.username">
              <v-img :src="item.src" aspect-ratio="1" class="grey lighten-2">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out grey lighten-2 v-card--reveal"
                    style="height: 100%;"
                  >
                    <v-col>
                      <div class="menuname">{{ item.foodname }}</div>
                      <div class="username">By : {{ item.username }}</div>
                    </v-col>
                  </div>
                </v-expand-transition>
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Menus",
  component: {},
  computed: {
    menus() {
      return this.$store.getters.menus;
    },
  },
  data: () => ({
    items: [],
    dialog: false,
  }),
  mounted() {
    console.log(this.$store.state.menus);
  },
};
</script>
<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.6;
  position: absolute;
  width: 100%;
}
.menuname {
  text-align: center;
  font-size: 25px;
}
.username {
  text-align: center;
  font-size: 15px;
}
/* .content {
  padding-left: 100px;
  padding-right: 100px;
} */
</style>
