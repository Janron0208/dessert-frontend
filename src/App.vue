<template>
  <v-app>
    <v-col>
      <v-col>
        <v-app-bar app color="white" elevation="2" hide-on-scroll="up | down">
          <v-row class="menulist">
            <v-col cols="2" style="text-align:right"
              ><img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
                class="pic"
            /></v-col>
            <v-col
              cols="2"
              style="text-align:left;color:#858585;font-size:20px;"
              ><div>Yongmaru</div></v-col
            >
            <v-col
              cols="4"
              style="text-align:center;color:#FFB4B4;font-size:30px;"
              ><div>DragonSlayer</div></v-col
            >
            <v-col cols="3">
              <div class="search">
                <div style="margin-left:15px;margin-right:6px;">
                  <v-icon style="color:#858585;">mdi-magnify</v-icon>
                </div>
                <div class="inputsearch">
                  <!-- <input type="text" name="" id="" class="inputsearch1" style="width:100%;height:100%;"> -->
                  <v-text-field
                    class="inputsearch1"
                    v-model="search"
                    placeholder="ค้นหาเมนู"
                    type="text"
                    required
                    flat
                    color="#858585"
                  ></v-text-field>
                </div>
              </div>
            </v-col>

            <v-col cols="1" style="text-align:left"
              ><v-icon style="color:#FFB4B4;">mdi-bell-ring</v-icon></v-col
            >
          </v-row>
        </v-app-bar>
      </v-col>
    </v-col>
    <div class="dropdown">
      <v-row>
        <v-col cols="4"></v-col>
        <v-col cols="1"
          ><v-btn color="white" elevation="1" rounded
            ><div style="color:#858585">หน้าแรก</div></v-btn
          ></v-col
        >
        <v-col cols="1"
          ><v-btn color="white" elevation="1" rounded
            ><div style="color:#858585">ยอดนิยม</div></v-btn
          ></v-col
        >
        <v-col cols="1"
          ><v-btn color="white" elevation="1" rounded
            ><div style="color:#858585">การติดตาม</div></v-btn
          ></v-col
        >
        <v-col cols="1"
          ><v-btn color="white" elevation="1" rounded
            ><div style="color:#858585">บันทึกไว้</div></v-btn
          ></v-col
        >
        <v-col cols="4"></v-col>
      </v-row>
    </div>
    <v-col class="bg">
      <v-main>
        <HelloWorld />
      </v-main>
    </v-col>
      
      <v-btn fab dark x-large color="#FFB4B4" fixed right bottom>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      
    
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
  }),
};
</script>
<style scoped>
* {
  font-family: "RocknRoll One", "Kanit";
  text-decoration: none;
}
.search {
  width: 100%;
  height: 50px;
  background-color: rgb(243, 243, 243);
  border-radius: 30px;
  display: flex;
  justufy-content: center;
  align-items: center;
}
.pic {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.menulist {
  display: flex;
  justufy-content: center;
  align-items: center;
}
.bg {
  background-color: #fff5f5;
}
.inputsearch {
  width: 80%;
  height: 35px;
}
.dropdown {
  height: 65px;
  padding-top: 25px;
  background-color: #fff5f5;
}
div.col {
  background-color: none;
}
.btn-plus {
}
</style>
