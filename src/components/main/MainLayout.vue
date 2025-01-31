<template>
  <v-container class="bg-surface-variant">
    <v-row no-gutters>
      <v-col cols="12" sm="12" color="grey-lighten-1">
        <v-sheet class="ma-2 pa-2">

        <footer></footer>

        <toolbar></toolbar>

        <main-menu></main-menu>

        <router-view></router-view>

        <toolbar-bottom></toolbar-bottom>


      </v-sheet>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import MainMenu from "@/components/main/MainMenu.vue";
import Toolbar from "@/components/main/Toolbar.vue";
import ToolbarBottom from '@/components/main/ToolbarBottom.vue';

export default {
  components: { ToolbarBottom },
  data: () => ({
    components: {
      MainMenu,
      Toolbar,
      ToolbarBottom
    },
  }),
};
</script>