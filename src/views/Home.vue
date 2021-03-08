<template>
    
  <div class="home">
    <Menubar />
    <Menus />
  </div>
</template>

<script>
import Menus from '@/components/Home/menus.vue'
import Menubar from "@/components/Home/menubar";

export default {
  name: 'Home',
  components: {
    Menus,
    Menubar

  }
}
</script>
<style scoped>

</style>
