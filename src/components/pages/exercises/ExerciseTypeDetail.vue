<template>
  <div class="d-flex align-center flex-column">
    <v-expansion-panels>
      <v-expansion-panel :title=extype_name :text=item_id mt-2>
      </v-expansion-panel>
    </v-expansion-panels>

    <p>-</p>

    <h4>СПИСОК УПРАЖНЕНИЙ</h4>
    <div>
      <ul v-for="item in exercises_array" :key="item.id">
        <router-link :to="{ name: 'exercise-detail', params: { id: item.EX_CODE } }">
          <li>{{ item.EX_NAME }}</li>
        </router-link>
      </ul>
    </div>

    <p>-</p>

    
    <div class="text-subtitle-2"></div>
  </div>
</template>

<script>
import http from "@/api/http";

export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      item_id: null,
      item: null,
      url: 'api/v1/extypes/get',
      extype_name: null,
      exercises_array: null,
    };
  },
  computed: {},
  methods: {
    async search() {
      await http
        .get(this.url + '/' + this.$route.params.id)
        .then((response) => {
          this.item = response.data.data;
          this.extype_name = this.item.TYPE_CAPTION
          this.exercises_array = this.item.EXERCISES
          console.log(this.item);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
  watch: {},
  created() { },
  mounted() {
    this.item_id = this.$route.params.id
    this.search();
  },
  updated() { },
  destroyed() { },
};
</script>

<style></style>
 
<!-- 
{
  "data": {
      "TYPE_ID": "BODYWEIGHT",
      "TYPE_CAPTION": "\u0423\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f \u0441 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0432\u0435\u0441\u043e\u043c",
      "EXERCISES": [
          {
              "id": 1,
              "EX_CODE": "BODY001",
              "EX_NAME": "V-\u043e\u0431\u0440\u0430\u0437\u043d\u044b\u0435 \u043f\u043e\u0434\u044a\u0435\u043c\u044b",
              "EX_MUSC": "Vtire\u043e\u0431\u0440\u0430\u0437\u043d\u044b\u0435_\u043f\u043e\u0434\u044a\u0435\u043c\u044b@BODYWEIGHT@MMM173@FORCE@MMM153@MIDLE@",
              "EX_WWW": "http:\/\/www.fitness96.ru\/encyclopaedia\/exercises\/body_weight\/v-up\/"
          }, -->