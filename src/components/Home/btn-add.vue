<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          fab
          dark
          x-large
          color="#FFB4B4"
          fixed
          right
          bottom
          @click="dialog = true"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <div>เพิ่มเมนูกันเลยจ้า</div>
        </v-card-title>
        <v-container>
          <v-col>
            <v-col>
              <div class="addnamemenu">
                <input type="text" placeholder="ขื่อเมนู" />
              </div>
            </v-col>
          </v-col>
          <v-col>
            <div class="adddesmenu">
              <input type="text" placeholder="รายละเอียด" />
            </div>
          </v-col>
        </v-container>
        <v-card-text>
          <v-container>
            <div v-if="!image">
              <input type="file" class="form-control" @change="onFileChange" />
              <hr />
            </div>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text to="/" @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
  methods: {
    onFileChange: function(e) {
      var files = e.target.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(files) {
      var reader = new FileReader();
      reader.onload = (e) => {
        this.image = e.target.result;
      };
      reader.readAsDataURL(files);
    },
  },
};
</script>
