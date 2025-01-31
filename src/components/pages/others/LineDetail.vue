<template>
  <div class="d-flex align-center flex-column">
    <v-expansion-panels>
      <v-expansion-panel :title=line_mame :text=item_id mt-2>
      </v-expansion-panel>
    </v-expansion-panels>

    <p>-</p>

    <h4>МЫШЦЫ</h4>
    <div>
      <ul v-for="item in muscul_array" :key="item.MUSC_ID">
        <router-link :to="{ name: 'muscul', params: { id: item.MUSC_ID } }">
          <li>{{ item.MUSC_NAME }}</li>
        </router-link>
      </ul>
    </div>

    <p>-</p>

    <h4>АССОЦИИРОВАННЫЕ ОРГАНЫ</h4>
    <div>
      <ul v-for="item in organ_array" :key="item.ORGAN_ID">
        <router-link :to="{ name: 'organ-detail', params: { id: item.ORGAN_ID } }">
          <li>{{ item.ORGAN_NAME }}</li>
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
      url: 'api/v1/line/get',
      line_mame: null,
      muscul_array: null,
      organ_array: null,
    };
  },
  computed: {},
  methods: {
    async search() {
      await http
        .get(this.url + '/' + this.$route.params.id)
        .then((response) => {
          this.item = response.data.data;
          this.line_mame = this.item.LINE_NAME
          this.muscul_array = this.item.MUSC_ARRAY
          this.organ_array = this.item.ORGAN_ARRAY
          console.log(this.item);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
  watch: {},
  created() {},
  mounted() {
    this.item_id = this.$route.params.id
    this.search();
  },
  updated() {},
  destroyed() {},
};
</script>

<style>
</style>

<!-- {
  "data": {
      "LINE_ID": "LIN003",
      "LINE_NAME": "\u041c\u0435\u0440\u0438\u0434\u0438\u0430\u043d \u043b\u0451\u0433\u043a\u0438\u0445",
      "LINE_NOTES": "\u041c\u0435\u0440\u0438\u0434\u0438\u0430\u043d_\u043b\u0451\u0433\u043a\u0438\u0445@MMM049@MMM184@MMM030@MMM160@MMM144@MMM132@MMM001@MMM002@MMM003@",
      "LINE_ORGAN": "\u041c\u0435\u0440\u0438\u0434\u0438\u0430\u043d_\u043b\u0451\u0433\u043a\u0438\u0445@ORG019@ORG012@ORG018@ORG007@ORG015@ORG018@ORG017@",
      "MUSC_ARRAY": [
          {
              "MUSC_ID": "MMM049",
              "MUSC_NAME": "\u0414\u043b\u0438\u043d\u043d\u044b\u0439 \u0441\u0433\u0438\u0431\u0430\u0442\u0435\u043b\u044c \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u043f\u0430\u043b\u044c\u0446\u0430 \u0440\u0443\u043a\u0438",
              "MUSC_NOTES": "\u0414\u043b\u0438\u043d\u043d\u044b\u0439_\u0441\u0433\u0438\u0431\u0430\u0442\u0435\u043b\u044c_\u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e_\u043f\u0430\u043b\u044c\u0446\u0430_\u0440\u0443\u043a\u0438@CC7@CC8@TH1@MOV063@MOV197@MOV046@MOV044@MOV171@MOV089@",
              "MUSC_FNOTES": "@STARTTT@MMM049@\u0414\u043b\u0438\u043d\u043d\u044b\u0439_\u0441\u0433\u0438\u0431\u0430\u0442\u0435\u043b\u044c_\u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e_\u043f\u0430\u043b\u044c\u0446\u0430_\u0440\u0443\u043a\u0438@CC7@CC8@TH1@MOV063@MOV197@MOV046@MOV044@MOV171@MOV089@LIN003@MAY06@UKOROCH@ENDDD@",
              "MUSC_WWW": "https:\/\/ru.wikipedia.org\/wiki\/%D0%94%D0%BB%D0%B8%D0%BD%D0%BD%D1%8B%D0%B9_%D1%81%D0%B3%D0%B8%D0%B1%D0%B0%D1%82%D0%B5%D0%BB%D1%8C_%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B3%D0%BE_%D0%BF%D0%B0%D0%BB%D1%8C%D1%86%D0%B0_%D0%BA%D0%B8%D1%81%D1%82%D0%B8"
          },
          {
              "MUSC_ID": "MMM184",
              "MUSC_NAME": "\u0421\u0443\u043f\u0438\u043d\u0430\u0442\u043e\u0440 \u043f\u0440\u0435\u0434\u043f\u043b\u0435\u0447\u044c\u044f",
              "MUSC_NOTES": "\u0421\u0443\u043f\u0438\u043d\u0430\u0442\u043e\u0440_\u043f\u0440\u0435\u0434\u043f\u043b\u0435\u0447\u044c\u044f@CC5@CC6@MOV038@MOV158@MOV126@",
              "MUSC_FNOTES": "@STARTTT@MMM184@\u0421\u0443\u043f\u0438\u043d\u0430\u0442\u043e\u0440_\u043f\u0440\u0435\u0434\u043f\u043b\u0435\u0447\u044c\u044f@CC5@CC6@MOV038@MOV158@MOV126@SEG001@LOC003@LIN003@ENDDD@",
              "MUSC_WWW": "https:\/\/ru.wikipedia.org\/wiki\/%D0%A1%D1%83%D0%BF%D0%B8%D0%BD%D0%B0%D1%82%D0%BE%D1%80_(%D0%BC%D1%8B%D1%88%D1%86%D0%B0_%D0%BF%D1%80%D0%B5%D0%B4%D0%BF%D0%BB%D0%B5%D1%87%D1%8C%D1%8F)"
          },
          {
              "MUSC_ID": "MMM030",
              "MUSC_NAME": "\u0414\u0432\u0443\u0433\u043b\u0430\u0432\u0430\u044f \u043c\u044b\u0448\u0446\u0430 \u043f\u043b\u0435\u0447\u0430",
              "MUSC_NOTES": "\u0414\u0432\u0443\u0433\u043b\u0430\u0432\u0430\u044f_\u043c\u044b\u0448\u0446\u0430_\u043f\u043b\u0435\u0447\u0430@CC5@CC6@MOV119@MOV111@MOV125@MOV122@MOV158@MOV038@MOV126@",
              "MUSC_FNOTES": "@STARTTT@MMM030@\u0414\u0432\u0443\u0433\u043b\u0430\u0432\u0430\u044f_\u043c\u044b\u0448\u0446\u0430_\u043f\u043b\u0435\u0447\u0430@CC5@CC6@MOV119@MOV111@MOV125@MOV122@MOV158@MOV038@MOV126@SEG001@LOC003@LIN003@LIN004@MAY05@ORG009@ENDDD@",
              "MUSC_WWW": "https:\/\/ru.wikipedia.org\/wiki\/%D0%94%D0%B2%D1%83%D0%B3%D0%BB%D0%B0%D0%B2%D0%B0%D1%8F_%D0%BC%D1%8B%D1%88%D1%86%D0%B0_%D0%BF%D0%BB%D0%B5%D1%87%D0%B0"
          },
          {
              "MUSC_ID": "MMM160",
              "MUSC_NAME": "\u041f\u043e\u0434\u043b\u043e\u043f\u0430\u0442\u043e\u0447\u043d\u0430\u044f \u043c\u044b\u0448\u0446\u0430",
              "MUSC_NOTES": "\u041f\u043e\u0434\u043b\u043e\u043f\u0430\u0442\u043e\u0447\u043d\u0430\u044f_\u043c\u044b\u0448\u0446\u0430@CC5@CC6@MOV109@MOV111@MOV119@MOV116@",
              "MUSC_FNOTES": "@STARTTT@MMM160@\u041f\u043e\u0434\u043b\u043e\u043f\u0430\u0442\u043e\u0447\u043d\u0430\u044f_\u043c\u044b\u0448\u0446\u0430@CC5@CC6@MOV109@MOV111@MOV119@MOV116@SEG001@LOC002@LIN003@LIN004@LIN005@MAY07@ORG024@ENDDD@",
              "MUSC_WWW": "https:\/\/ru.wikipedia.org\/wiki\/%D0%9F%D0%BE%D0%B4%D0%BB%D0%BE%D0%BF%D0%B0%D1%82%D0%BE%D1%87%D0%BD%D0%B0%D1%8F_%D0%BC%D1%8B%D1%88%D1%86%D0%B0"
          },
          {
              "MUSC_ID": "MMM144",
              "MUSC_NAME": "\u041f\u0435\u0440\u0435\u0434\u043d\u044f\u044f \u0437\u0443\u0431\u0447\u0430\u0442\u0430\u044f \u043c\u044b\u0448\u0446\u0430",
              "MUSC_NOTES": "\u041f\u0435\u0440\u0435\u0434\u043d\u044f\u044f_\u0437\u0443\u0431\u0447\u0430\u0442\u0430\u044f_\u043c\u044b\u0448\u0446\u0430@CC5@CC6@CC7@MOV057@MOV059@",
              "MUSC_FNOTES": "@STARTTT@MMM144@\u041f\u0435\u0440\u0435\u0434\u043d\u044f\u044f_\u0437\u0443\u0431\u0447\u0430\u0442\u0430\u044f_\u043c\u044b\u0448\u0446\u0430@CC5@CC6@CC7@MOV057@MOV059@SEG001@LOC001@LIN003@LIN004@LIN005@LIN013@MAY04@UDLINN@ORG012@ENDDD@",
              "MUSC_WWW": "https:\/\/ru.wikipedia.org\/wiki\/%D0%9F%D0%B5%D1%80%D0%B5%D0%B4%D0%BD%D1%8F%D1%8F_%D0%B7%D1%83%D0%B1%D1%87%D0%B0%D1%82%D0%B0%D1%8F_%D0%BC%D1%8B%D1%88%D1%86%D0%B0"
          },
          {
              "MUSC_ID": "MMM132",
              "MUSC_NAME": "\u041d\u0430\u0440\u0443\u0436\u043d\u044b\u0435 \u043c\u0435\u0436\u0440\u0435\u0431\u0435\u0440\u043d\u044b\u0435 \u043c\u044b\u0448\u0446\u044b",
              "MUSC_NOTES": "\u041d\u0430\u0440\u0443\u0436\u043d\u044b\u0435_\u043c\u0435\u0436\u0440\u0435\u0431\u0435\u0440\u043d\u044b\u0435_\u043c\u044b\u0448\u0446\u044b@TH1@TH2@TH3@TH4@TH5@TH6@TH7@TH8@TH9@TH10@TH11@MOV192@",
              "MUSC_FNOTES": "@STARTTT@MMM132@\u041d\u0430\u0440\u0443\u0436\u043d\u044b\u0435_\u043c\u0435\u0436\u0440\u0435\u0431\u0435\u0440\u043d\u044b\u0435_\u043c\u044b\u0448\u0446\u044b@TH1@TH2@TH3@TH4@TH5@TH6@TH7@TH8@TH9@TH10@TH11@MOV192@SEG003@LOC013@LIN003@LIN004@LIN005@MAY03@ENDDD@",
              "MUSC_WWW": "https:\/\/ru.wikipedia.org\/wiki\/%D0%9D%D0%B0%D1%80%D1%83%D0%B6%D0%BD%D1%8B%D0%B5_%D0%BC%D0%B5%D0%B6%D1%80%D1%91%D0%B1%D0%B5%D1%80%D0%BD%D1%8B%D0%B5_%D0%BC%D1%8B%D1%88%D1%86%D1%8B"
          },
          {
              "MUSC_ID": "MMM001",
              "MUSC_NAME": "\u0411\u043e\u043b\u044c\u0448\u0430\u044f \u0433\u0440\u0443\u0434\u043d\u0430\u044f \u043c\u044b\u0448\u0446\u0430, \u0431\u0440\u044e\u0448\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c",
              "MUSC_NOTES": "\u0411\u043e\u043b\u044c\u0448\u0430\u044f_\u0433\u0440\u0443\u0434\u043d\u0430\u044f_\u043c\u044b\u0448\u0446\u0430_zpt__\u0431\u0440\u044e\u0448\u043d\u0430\u044f_\u0447\u0430\u0441\u0442\u044c@CC8@TH1@MOV113@MOV109@MOV116@MOV054@",
              "MUSC_FNOTES": "@STARTTT@MMM001@\u0411\u043e\u043b\u044c\u0448\u0430\u044f_\u0433\u0440\u0443\u0434\u043d\u0430\u044f_\u043c\u044b\u0448\u0446\u0430_zpt__\u0431\u0440\u044e\u0448\u043d\u0430\u044f_\u0447\u0430\u0441\u0442\u044c@CC8@TH1@MOV113@MOV109@MOV116 @MOV054@SEG001@LOC002@LIN003@LIN009@MAY06@MAY10@ORG017@ENDDD@",
              "MUSC_WWW": "https:\/\/ru.wikipedia.org\/wiki\/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F_%D0%B3%D1%80%D1%83%D0%B4%D0%BD%D0%B0%D1%8F_%D0%BC%D1%8B%D1%88%D1%86%D0%B0"
          },
          {
              "MUSC_ID": "MMM002",
              "MUSC_NAME": "\u0411\u043e\u043b\u044c\u0448\u0430\u044f \u0433\u0440\u0443\u0434\u043d\u0430\u044f \u043c\u044b\u0448\u0446\u0430, \u0433\u0440\u0443\u0434\u0438\u043d\u043e-\u0440\u0435\u0431\u0435\u0440\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c",
              "MUSC_NOTES": "\u0411\u043e\u043b\u044c\u0448\u0430\u044f_\u0433\u0440\u0443\u0434\u043d\u0430\u044f_\u043c\u044b\u0448\u0446\u0430_zpt__\u0433\u0440\u0443\u0434\u0438\u043d\u043e_tire_\u0440\u0435\u0431\u0435\u0440\u043d\u0430\u044f_\u0447\u0430\u0441\u0442\u044c@CC5@CC6@CC7@CC8@TH1@MOV113@MOV109@MOV116@",
              "MUSC_FNOTES": "@STARTTT@MMM002@\u0411\u043e\u043b\u044c\u0448\u0430\u044f_\u0433\u0440\u0443\u0434\u043d\u0430\u044f_\u043c\u044b\u0448\u0446\u0430_zpt__\u0433\u0440\u0443\u0434\u0438\u043d\u043e_tire_\u0440\u0435\u0431\u0435\u0440\u043d\u0430\u044f_\u0447\u0430\u0441\u0442\u044c@CC5@CC6@CC7@CC8@TH1@MOV113@MOV109@MOV116 @SEG001@LOC002@LIN003@LIN009@MAY06@MAY10@UKOROCH@ORG017@ENDDD@",
              "MUSC_WWW": "https:\/\/ru.wikipedia.org\/wiki\/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F_%D0%B3%D1%80%D1%83%D0%B4%D0%BD%D0%B0%D1%8F_%D0%BC%D1%8B%D1%88%D1%86%D0%B0"
          },
          {
              "MUSC_ID": "MMM003",
              "MUSC_NAME": "\u0411\u043e\u043b\u044c\u0448\u0430\u044f \u0433\u0440\u0443\u0434\u043d\u0430\u044f \u043c\u044b\u0448\u0446\u0430, \u043a\u043b\u044e\u0447\u0438\u0447\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c",
              "MUSC_NOTES": "\u0411\u043e\u043b\u044c\u0448\u0430\u044f_\u0433\u0440\u0443\u0434\u043d\u0430\u044f_\u043c\u044b\u0448\u0446\u0430_zpt__\u043a\u043b\u044e\u0447\u0438\u0447\u043d\u0430\u044f_\u0447\u0430\u0441\u0442\u044c@CC5@CC6@CC7@CC8@MOV113@MOV109@MOV119@",
              "MUSC_FNOTES": "@STARTTT@MMM003@\u0411\u043e\u043b\u044c\u0448\u0430\u044f_\u0433\u0440\u0443\u0434\u043d\u0430\u044f_\u043c\u044b\u0448\u0446\u0430_zpt__\u043a\u043b\u044e\u0447\u0438\u0447\u043d\u0430\u044f_\u0447\u0430\u0441\u0442\u044c@CC5@CC6@CC7@CC8@MOV113@MOV109@MOV119@SEG001@LOC002@LIN003@LIN009@MAY06@MAY10@ORG009@ORG017@ENDDD@",
              "MUSC_WWW": "https:\/\/ru.wikipedia.org\/wiki\/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F_%D0%B3%D1%80%D1%83%D0%B4%D0%BD%D0%B0%D1%8F_%D0%BC%D1%8B%D1%88%D1%86%D0%B0"
          }
      ],
      "ORGAN_ARRAY": [
          {
              "ORGAN_ID": "ORG019",
              "ORGAN_NAME": "\u041f\u043b\u0435\u0432\u0440\u0430",
              "ORGAN_MUSC": "__"
          },
          {
              "ORGAN_ID": "ORG012",
              "ORGAN_NAME": "\u041b\u0435\u0433\u043a\u0438\u0435",
              "ORGAN_MUSC": "\u041b\u0435\u0433\u043a\u0438\u0435@MMM061@MMM144@MMM031@MMM032@MMM033@MMM118@"
          },
          {
              "ORGAN_ID": "ORG018",
              "ORGAN_NAME": "\u041f\u0438\u0449\u0435\u0432\u043e\u0434",
              "ORGAN_MUSC": "__"
          },
          {
              "ORGAN_ID": "ORG007",
              "ORGAN_NAME": "\u0413\u043e\u0440\u0442\u0430\u043d\u044c",
              "ORGAN_MUSC": "__"
          },
          {
              "ORGAN_ID": "ORG015",
              "ORGAN_NAME": "\u041d\u043e\u0441\u043e\u0433\u043b\u043e\u0442\u043a\u0430",
              "ORGAN_MUSC": "__"
          },
          {
              "ORGAN_ID": "ORG018",
              "ORGAN_NAME": "\u041f\u0438\u0449\u0435\u0432\u043e\u0434",
              "ORGAN_MUSC": "__"
          },
          {
              "ORGAN_ID": "ORG017",
              "ORGAN_NAME": "\u041f\u0435\u0447\u0435\u043d\u044c",
              "ORGAN_MUSC": "\u041f\u0435\u0447\u0435\u043d\u044c@MMM002@MMM007@MMM096@"
          }
      ]
  }
} -->