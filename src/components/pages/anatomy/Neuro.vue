
<template>
  <div class="d-flex align-center flex-column">
    <v-row justify="center">
      <v-col cols="12" sm="12" md="12">
        <div class="text-subtitle-2 mt-2">СПИСОК НЕРВОВ</div>
      </v-col>
    </v-row>
    <v-container class="text-center">
      <v-row justify="center">
        <v-col cols="12" sm="7" md="7">
          <v-text-field v-model.trim="search_string" v-on:keyup.enter="search"></v-text-field>
        </v-col>
        <v-col cols="12" sm="1" md="1">
          <v-btn block rounded="xs" size="x-large" @click="clear">Х</v-btn>
        </v-col>
        <v-col cols="12" sm="4" md="4">
          <v-btn block rounded="xs" size="x-large" @click="search">Поиск</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <div v-for="item in items" :key="item">
      <v-card width="400" title="" :subtitle="item.NEURO_NAME" text="подробнее" variant="outlined" class="mt-2" link
        @click="details(item.NEURO_CODE)"></v-card>
    </div>
  </div>
</template>

<script>
import http from "@/api/http";
import router from "@/router/index"

export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      search_string: "",
      items: null,
      url: 'api/v1/neuro/search',
      details_path_name: 'neuro-detail',
    };
  },
  computed: {},
  methods: {
    details(id) {
      // ths.router.push({ path: this.details_path_name +  '/' + id })
      router.push({ name: this.details_path_name, params: { id: id } })
    },
    async search() {
      let url = this.url;
      if(this.search_string.length > 0){
        url = this.url + '/' + this.search_string;
      }
      await http
        .get(url)
        .then((response) => {
          this.items = response.data.data;
          console.log(this.items);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  clear() {
    this.search_string = "";
    this.search();
  },
},
watch: { },
created() { },
mounted() {
  this.search();
},
updated() { },
destroyed() { },
};
</script>

<style></style>