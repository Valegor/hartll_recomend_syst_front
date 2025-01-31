<template>
  <div class="d-flex align-center flex-column">
    <v-expansion-panels>
      <v-expansion-panel :title=discipline :text=item_id mt-2>
      </v-expansion-panel>
    </v-expansion-panels>

    <p>-</p>

    <h6>ТИП РАБОТЫ</h6>

    <p>{{ type_job }}</p>

    <p>-</p>

    <h6>ТРЕНИРОВОЧНАЯ НАГРУЗКА</h6>

    <p>{{ trayning_force }}</p>

    <p>-</p>

    <h6>ДВИЖЕНИЕ</h6>

    <p>{{ moove }}</p>

    <p>-</p>

    <h6>МЫШЦА</h6>

    <router-link :to="{ name: 'muscul', params: { id: musc_id } }">
      <p>{{ musc_name }}</p>
    </router-link>

    <p>-</p>

    <h6>ФУНКЦИЯ МЫШЦЫ</h6>

    <p>{{ nuscul_function }}</p>

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
      url: 'api/v1/sport/get',
      discipline: null,
      type_job: null,
      trayning_force: null,
      moove: null,
      musc_name: null,
      musc_id: null,
      nuscul_function: null,
    };
  },
  computed: {},
  methods: {
    async search() {
      await http
        .get(this.url + '/' + this.$route.params.id)
        .then((response) => {
          this.item = response.data.data;
          this.discipline = this.item.SPORT_DISCIPLINE
          this.type_job = this.item.TYPE_JOB
          this.trayning_force = this.item.TRAINING_FORCE
          this.moove = this.item.MOOVE
          this.musc_name = this.item.MUSC_NAME
          this.musc_id = this.item.MUSC_ID
          this.nuscul_function = this.item.FUNCTION
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

<!-- {
  "data": {
      "id": 1,
      "SPORT_DISCIPLINE": "\u041f\u043b\u0430\u0432\u0430\u043d\u0438\u0435 ",
      "TYPE_JOB": "\u0414\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043a\u043e\u043d\u0446\u0435\u043d\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0435",
      "TRAINING_FORCE": "\u0421\u0438\u043b\u043e\u0432\u0430\u044f \u0432\u044b\u043d\u043e\u0441\u043b\u0438\u0432\u043e\u0441\u0442\u044c",
      "MOOVE": "\u041f\u043b\u0430\u0432\u0430\u043d\u0438\u0435 \u0431\u0440\u0430\u0441\u0441\u043e\u043c \u2014 \u0444\u0430\u0437\u0430 \u043e\u0442\u0442\u0430\u043b\u043a\u0438\u0432\u0430\u043d\u0438\u044f",
      "MUSC_ID": "MMM001",
      "MUSC_NAME": "\u0411\u043e\u043b\u044c\u0448\u0430\u044f \u0433\u0440\u0443\u0434\u043d\u0430\u044f \u043c\u044b\u0448\u0446\u0430, \u0431\u0440\u044e\u0448\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c",
      "FUNCTION": "\u041f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043f\u043b\u0435\u0447\u0430"
  }
} -->