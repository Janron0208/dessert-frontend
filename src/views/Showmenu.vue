<template>
  <v-col class="column">
    <div class="show">
      <div class="boximg">
        <img :src="menu.src" class="imgtop" />
        <div class="foodname">
          <v-col>{{ menu.foodname }}</v-col>
        </div>
        <div style="width:100%;" class="byuser">
          <v-row>
            <!-- <v-col cols="1" style="text-align:right;"
              ><div><img :src="menu.userpic" class="userpic" /></div
            ></v-col> -->
            <v-col cols="8"
              ><div style="font-size:18px;">
                <img :src="menu.userpic" class="userpic" /> By :
                {{ menu.username }}
              </div></v-col
            >
            <v-col cols="3"
              ><div style="font-size:15px;text-align:right;color:#262626;">
                2 สิงหาคา 2564
              </div></v-col
            >
          </v-row>
        </div>
      </div>
      <v-container>
        <v-col>
          <div>
            Like 5 / Dislike 1 / Share
          </div>
          <div class="allpic" style="padding:50px;">
            <v-carousel
              :show-arrows="true"
              cycle
              height="400"
              hide-delimiter-background
              show-arrows-on-hover
            >
              <v-carousel-item
                v-for="(item, i) in menu.allpic"
                :key="i"
                :src="item.src"
              ></v-carousel-item>
            </v-carousel>
          </div>
          <div
            class="description"
            style="padding-left:60px;padding-right:60px;padding-bottom:20px;"
          >
            <v-container>
              <div>
                {{ menu.description }}
              </div>
            </v-container>
          </div>
          <hr />
          <div class="ingredient" style="padding:30px 110px 30px 110px;">
            <div class="boxingredient">
              <v-container
                style="width:100%;background-color:#F1F1F1;border-radius:10px;"
              >
                <div style="font-size:30px;color:#FF9292;">ส่วนผสม</div>
                <v-container>
                  <div v-for="(item, i) in menu.ingredient" :key="i">
                    <v-row>
                      <v-col cols="2"></v-col>
                      <v-col cols="3" style="color:#A3A3A3;">• {{ item.objec }}</v-col>
                      <v-col cols="5"><h4>{{ item.volumn }}</h4></v-col>
                    </v-row>
                  </div>
                </v-container>
              </v-container>
            </div>
          </div>
          <hr />
          <div style="color:#FF9292;padding:20px;font-size:36px;">ขั้นตอนการทำ</div>
          <v-col v-for="(item, i) in menu.howto" :key="i">
            <v-col>
              <v-row>
                <v-col cols="1">
                  <div style="width:60px;height:60px;background-color:#FFB4B4;border-radius:50%;">
                    <div class="center">{{item.num}}</div>
                  </div>
                  </v-col>
                  <v-col cols="10" style="margin-left:10px;">
                    {{item.how}}
                  </v-col>
              </v-row>
            </v-col>
            <v-col>
              <div style="width:100%;text-align:center;">
                <img :src="item.src" style="width:70%;height:150px;">
              </div>
            </v-col>
          </v-col>
        </v-col>
      </v-container>
    </div>
  </v-col>
</template>

<script>
import Btnlike from "@/components/Showmenu/btnlike.vue";

export default {
  component: {
    Btnlike,
  },
  computed: {
    menu() {
      var id = this.$route.params.id;
      return this.$store.getters.menus[id];
    },
    menu1() {
      var id = this.$route.params.id;
      return this.$store.getters.menus[id].allpic;
    },
  },
  mounted() {
    console.log(this.$store.state.menus[0].allpic);
  },
};
</script>

<style scoped>
.img {
  height: 600px;
}
.show {
  background-color: white;
  width: 60%;
  margin: auto;
}
.column {
  width: 100%;
}
.boximg {
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;
}
.imgtop {
  width: 100%;
  filter: opacity(50%);
}
.foodname {
  position: absolute;
  bottom: 35px;
  left: 16px;
  font-size: 35px;
}
.userpic {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
.byuser {
  position: absolute;
  bottom: 0px;
  left: 16px;
  font-size: 35px;
  display: flex;
}
div.col.col-8,
div.col.col-3,
div.col.col-1 {
  align-items: flex-end;
}
.boxingredient {
   box-shadow: 0 4px 8px 0 rgba(172, 172, 172, 0.2), 0 6px 20px 0 rgba(189, 189, 189, 0.19);
   
}
.center {
  text-align: center;
  padding-top: 10px;
  color: white;
  font-size:25px;
}
</style>
