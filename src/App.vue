<template>
  <v-app>
    <v-main>
      <main-layout></main-layout>
    </v-main>
  </v-app>
</template>

<script>
import MainLayout from "@/components/main/MainLayout.vue";


export default {
  data: () => ({
    components: {
      MainLayout,
    },
  }),
};
</script>