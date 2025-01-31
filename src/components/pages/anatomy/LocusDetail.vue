
<template>
  <div class="d-flex align-center flex-column">
    <v-expansion-panels>
      <v-expansion-panel :title=locus_name :text=item_id mt-2>
      </v-expansion-panel>
    </v-expansion-panels>

    <p>-</p>

    <h4>ЛОКАЛИЗАЦИЯ</h4>

    <p>{{ locus_name }}</p>

    <p>-</p>

    <h4>СПИСОК МЫШЦ</h4>
    <div>
      <ul v-for="item in muscul_array" :key="item[0]">
        <router-link :to="{ name: 'muscul', params: { id: item[0] } }">
          <li>{{ item[1] }}</li>
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
      url: 'api/v1/musclocus/get',
      locus_name: null,
      segment_name: null,
      muscul_array: null,
    };
  },
  computed: {},
  methods: {
    async search() {
      await http
        .get(this.url + '/' + this.$route.params.id)
        .then((response) => {
          this.item = response.data.data;
          this.locus_name = this.item.LOCUS_NAME
          this.segment_name = this.item.SEGMENT_NAME
          this.muscul_array = this.item.MUSCUL_ARRAY
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
      "LOCUS_ID": "LOC002",
      "LOCUS_SEGMENT": "SEG001@LOC002@",
      "LOCUS_NAME": "\u041c\u042b\u0428\u0426\u042b \u0412\u041e\u041a\u0420\u0423\u0413 \u041f\u041b\u0415\u0427\u0415\u0412\u041e\u0413\u041e \u0421\u0423\u0421\u0422\u0410\u0412\u0410",
      "MUSCULUS_ID": "MMM031@MMM032@MMM033@MMM127@MMM161@MMM160@MMM095@MMM198@MMM061@MMM005@MMM001@MMM002@MMM003@",
      "SEGMENT_ID": "SEG001",
      "SEGMENT_NAME": "\u0412\u0415\u0420\u0425\u041d\u042f\u042f \u041a\u041e\u041d\u0415\u0427\u041d\u041e\u0421\u0422\u042c",
      "MUSCUL_ARRAY": [
          [
              "MMM031",
              "\u0414\u0435\u043b\u044c\u0442\u043e\u0432\u0438\u0434\u043d\u0430\u044f \u043c\u044b\u0448\u0446\u0430, \u0430\u043a\u0440\u043e\u043c\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c"
          ],
          [
              "MMM032",
              "\u0414\u0435\u043b\u044c\u0442\u043e\u0432\u0438\u0434\u043d\u0430\u044f \u043c\u044b\u0448\u0446\u0430, \u043a\u043b\u044e\u0447\u0438\u0447\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c"
          ],
          [
              "MMM033",
              "\u0414\u0435\u043b\u044c\u0442\u043e\u0432\u0438\u0434\u043d\u0430\u044f \u043c\u044b\u0448\u0446\u0430, \u043e\u0441\u0442\u0438\u0441\u0442\u0430\u044f \u0447\u0430\u0441\u0442\u044c"
          ],
          [
              "MMM127",
              "\u041d\u0430\u0434\u043e\u0441\u0442\u043d\u0430\u044f \u043c\u044b\u0448\u0446\u0430"
          ],
          [
              "MMM161",
              "\u041f\u043e\u0434\u043e\u0441\u0442\u043d\u0430\u044f \u043c\u044b\u0448\u0446\u0430"
          ],
          [
              "MMM160",
              "\u041f\u043e\u0434\u043b\u043e\u043f\u0430\u0442\u043e\u0447\u043d\u0430\u044f \u043c\u044b\u0448\u0446\u0430"
          ],
          [
              "MMM095",
              "\u041c\u0430\u043b\u0430\u044f \u043a\u0440\u0443\u0433\u043b\u0430\u044f \u043c\u044b\u0448\u0446\u0430"
          ],
          [
              "MMM198",
              "\u0428\u0438\u0440\u043e\u0447\u0430\u0439\u0448\u0430\u044f \u043c\u044b\u0448\u0446\u0430 \u0441\u043f\u0438\u043d\u044b"
          ],
          [
              "MMM061",
              "\u041a\u043b\u044e\u0432\u043e\u0432\u0438\u0434\u043d\u043e-\u043f\u043b\u0435\u0447\u0435\u0432\u0430\u044f \u043c\u044b\u0448\u0446\u0430"
          ],
          [
              "MMM005",
              "\u0411\u043e\u043b\u044c\u0448\u0430\u044f \u043a\u0440\u0443\u0433\u043b\u0430\u044f \u043c\u044b\u0448\u0446\u0430"
          ],
          [
              "MMM001",
              "\u0411\u043e\u043b\u044c\u0448\u0430\u044f \u0433\u0440\u0443\u0434\u043d\u0430\u044f \u043c\u044b\u0448\u0446\u0430, \u0431\u0440\u044e\u0448\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c"
          ],
          [
              "MMM002",
              "\u0411\u043e\u043b\u044c\u0448\u0430\u044f \u0433\u0440\u0443\u0434\u043d\u0430\u044f \u043c\u044b\u0448\u0446\u0430, \u0433\u0440\u0443\u0434\u0438\u043d\u043e-\u0440\u0435\u0431\u0435\u0440\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c"
          ],
          [
              "MMM003",
              "\u0411\u043e\u043b\u044c\u0448\u0430\u044f \u0433\u0440\u0443\u0434\u043d\u0430\u044f \u043c\u044b\u0448\u0446\u0430, \u043a\u043b\u044e\u0447\u0438\u0447\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c"
          ]
      ]
  }
} -->