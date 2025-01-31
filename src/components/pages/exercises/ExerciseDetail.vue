<template>
  <div class="d-flex align-center flex-column">
    <v-expansion-panels>
      <v-expansion-panel :title=ex_name :text=item_id mt-2>
      </v-expansion-panel>
    </v-expansion-panels>


    <p>-</p>

    <v-btn :href=link target="_blank" mt-4>
      WWW
    </v-btn>

    <p>-</p>

    <h6>ТИП УПРАЖНЕНИЯ</h6>

    <router-link :to="{ name: 'exercises-type-detail', params: { id: ex_type_code } }">
      <p>{{ ex_type }}</p>
    </router-link>

    <p>-</p>

    <h6>ГРУППА УПРАЖНЕНИЙ</h6>

    <router-link :to="{ name: 'exercise-groupp-detail', params: { id: ex_groupp_code } }">
      <p>{{ ex_groupp }}</p>
    </router-link>

    <p>-</p>

    <h4>МЫШЦЫ</h4>
    <div>
      <ul v-for="item in musculus" :key="item[0]">

        <li>
          <router-link :to="{ name: 'muscul', params: { id: item[0] } }">
            <p>{{ item[1] }}></p>
          </router-link> <br>
          <p>{{ item[3] }}</p><br>
        </li>
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
      url: 'api/v1/exercise/full',
      ex_name: null,
      musculus: null,
      link: null,
      ex_type: null,
      ex_type_code: null,
      ex_groupp: null,
      ex_groupp_code: null,
    };
  },
  computed: {},
  methods: {
    async search() {
      await http
        .get(this.url + '/' + this.$route.params.id)
        .then((response) => {
          this.item = response.data;
          this.ex_name = this.item.EX_NAME
          this.link = this.item.EX_WWW
          this.ex_type = this.item.EXERCISE_TYPE_CAPTION
          this.ex_type_code = this.item.EXERCISE_TYPE
          this.ex_groupp = this.item.EXERCISE_GROUPP_NAME
          this.ex_groupp_code = this.item.EXERCISE_GROUPP
          this.musculus = this.item.MUSCUL_LIST
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
    window.scrollTo(0, 2);
    this.item_id = this.$route.params.id
    this.search();
  },
  updated() { },
  destroyed() { },
};
</script>

<style></style>

<!-- {
  "id": 1,
  "EX_CODE": "BODY001",
  "EX_NAME": "V-\u043e\u0431\u0440\u0430\u0437\u043d\u044b\u0435 \u043f\u043e\u0434\u044a\u0435\u043c\u044b",
  "EX_MUSC": "Vtire\u043e\u0431\u0440\u0430\u0437\u043d\u044b\u0435_\u043f\u043e\u0434\u044a\u0435\u043c\u044b@BODYWEIGHT@MMM173@FORCE@MMM153@MIDLE@",
  "EX_WWW": "http:\/\/www.fitness96.ru\/encyclopaedia\/exercises\/body_weight\/v-up\/",
  "EXERCISE_TYPE": "BODYWEIGHT",
  "EXERCISE_TYPE_CAPTION": "\u0423\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f \u0441 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0432\u0435\u0441\u043e\u043c",
  "EXERCISE_GROUPP": "BODY",
  "EXERCISE_GROUPP_NAME": "\u0411\u041e\u0414\u0418\u0424\u0418\u0422\u041d\u0415\u0421",
  "MUSCUL_LIST": [
      [
          "MMM173",
          "\u041f\u0440\u044f\u043c\u0430\u044f \u043c\u044b\u0448\u0446\u0430 \u0436\u0438\u0432\u043e\u0442\u0430",
          "FORCE",
          "\u041f\u0440\u043e\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0438\u043d\u0442\u0435\u043d\u0441\u0438\u0432\u043d\u043e"
      ],
      [
          "MMM153",
          "\u041f\u043e\u0434\u0432\u0437\u0434\u043e\u0448\u043d\u043e-\u043f\u043e\u044f\u0441\u043d\u0438\u0447\u043d\u0430\u044f \u043c\u044b\u0448\u0446\u0430",
          "MIDLE",
          "\u041f\u0440\u043e\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0443\u043c\u0435\u0440\u0435\u043d\u043d\u043e"
      ]
  ]
} -->