<template>
  <div class="d-flex align-center flex-column">
    <v-expansion-panels>
      <v-expansion-panel :title=neuro_name :text=item_id mt-2>
      </v-expansion-panel>
    </v-expansion-panels>

    <p>-</p>

    <h6>СЕГМЕНТ</h6>

    <p>{{ neuro_locus }}</p>

    <p>-</p>

    <h4>МЫШЦЫ</h4>
    <div>
      <ul v-for="item in musculus" :key="item.MUSC_ID">
        <router-link :to="{ name: 'muscul', params: { id: item.MUSC_ID } }">
          <li>{{ item.MUSC_NAME }}</li>
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
      url: 'api/v1/neuro/get',
      neuro_locus: null,
      neuro_name: null,
      neuro_locus: null,
      musculus: null,
    };
  },
  computed: {},
  methods: {
    async search() {
      await http
        .get(this.url + '/' + this.$route.params.id)
        .then((response) => {
          this.item = response.data.data;
          this.neuro_name = this.item.NEURO_NAME
          this.neuro_locus = this.item.NEURO_LOCUS
          this.musculus = this.item.MUSCULUS
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


<!-- 
{
  "data": {
      "id": 30,
      "NEURO_LOCUS": "\u0413\u0420\u0423\u0414\u041d\u041e\u0419 \u041e\u0422\u0414\u0415\u041b",
      "NEURO_CODE": "TH2",
      "NEURO_NAME": "\u0413\u0440\u0443\u0434\u043d\u043e\u0439 \u043e\u0442\u0434\u0435\u043b. \u0421\u0435\u0433\u043c\u0435\u043d\u0442 \u21162.",
      "NEURO_NOTES": "",
      "MUSCULUS": [
          {
              "MUSC_ID": "MMM011",
              "MUSC_NAME": "\u0412\u0435\u0440\u0445\u043d\u044f\u044f \u0437\u0430\u0434\u043d\u044f\u044f \u0437\u0443\u0431\u0447\u0430\u0442\u0430\u044f \u043c\u044b\u0448\u0446\u0430",
              "MUSC_NOTES": "\u0412\u0435\u0440\u0445\u043d\u044f\u044f_\u0437\u0430\u0434\u043d\u044f\u044f_\u0437\u0443\u0431\u0447\u0430\u0442\u0430\u044f_\u043c\u044b\u0448\u0446\u0430@CC6@CC7@CC8@TH1@TH2@MOV192@",
              "MUSC_FNOTES": "@STARTTT@MMM011@\u0412\u0435\u0440\u0445\u043d\u044f\u044f_\u0437\u0430\u0434\u043d\u044f\u044f_\u0437\u0443\u0431\u0447\u0430\u0442\u0430\u044f_\u043c\u044b\u0448\u0446\u0430@CC6@CC7@CC8@TH1@TH2@MOV192@SEG003@LOC013@ENDDD@",
              "MUSC_WWW": "https:\/\/ru.wikipedia.org\/wiki\/%D0%92%D0%B5%D1%80%D1%85%D0%BD%D1%8F%D1%8F_%D0%B7%D0%B0%D0%B4%D0%BD%D1%8F%D1%8F_%D0%B7%D1%83%D0%B1%D1%87%D0%B0%D1%82%D0%B0%D1%8F_%D0%BC%D1%8B%D1%88%D1%86%D0%B0"
          },
          {
              "MUSC_ID": "MMM017",
              "MUSC_NAME": "\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0435 \u043c\u0435\u0436\u0440\u0435\u0431\u0435\u0440\u043d\u044b\u0435 \u043c\u044b\u0448\u0446\u044b",
              "MUSC_NOTES": "\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0435_\u043c\u0435\u0436\u0440\u0435\u0431\u0435\u0440\u043d\u044b\u0435_\u043c\u044b\u0448\u0446\u044b@TH1@TH2@TH3@TH4@TH5@TH6@TH7@TH8@TH9@TH10@TH11@MOV191@",
              "MUSC_FNOTES": "@STARTTT@MMM017@\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0435_\u043c\u0435\u0436\u0440\u0435\u0431\u0435\u0440\u043d\u044b\u0435_\u043c\u044b\u0448\u0446\u044b@TH1@TH2@TH3@TH4@TH5@TH6@TH7@TH8@TH9@TH10@TH11@MOV191@SEG003@LOC013@SEG005@LOC019@MAY03@ENDDD@",
              "MUSC_WWW": "https:\/\/ru.wikipedia.org\/wiki\/%D0%92%D0%BD%D1%83%D1%82%D1%80%D0%B5%D0%BD%D0%BD%D0%B8%D0%B5_%D0%BC%D0%B5%D0%B6%D1%80%D1%91%D0%B1%D0%B5%D1%80%D0%BD%D1%8B%D0%B5_%D0%BC%D1%8B%D1%88%D1%86%D1%8B"
          },
          {
              "MUSC_ID": "MMM041",
              "MUSC_NAME": "\u0414\u043b\u0438\u043d\u043d\u0435\u0439\u0448\u0430\u044f \u043c\u044b\u0448\u0446\u0430 \u0433\u043e\u043b\u043e\u0432\u044b",
              "MUSC_NOTES": "\u0414\u043b\u0438\u043d\u043d\u0435\u0439\u0448\u0430\u044f_\u043c\u044b\u0448\u0446\u0430_\u0433\u043e\u043b\u043e\u0432\u044b@CC3@CC4@CC5@CC6@CC7@CC8@TH1@TH2@TH3@MOV003@MOV002@MOV005@MOV082@MOV081@MOV084@",
              "MUSC_FNOTES": "@STARTTT@MMM041@\u0414\u043b\u0438\u043d\u043d\u0435\u0439\u0448\u0430\u044f_\u043c\u044b\u0448\u0446\u0430_\u0433\u043e\u043b\u043e\u0432\u044b@CC3@CC4@CC5@CC6@CC7@CC8@TH1@TH2@TH3@MOV003@MOV002@MOV005@MOV082@MOV081@MOV084@SEG004@LOC016@LIN014@MAY01@MAY04@UKOROCH@ORG009@ENDDD@",
              "MUSC_WWW": "https:\/\/ru.wikipedia.org\/wiki\/%D0%94%D0%BB%D0%B8%D0%BD%D0%BD%D0%B5%D0%B9%D1%88%D0%B0%D1%8F_%D0%BC%D1%8B%D1%88%D1%86%D0%B0"
          },
          {
              "MUSC_ID": "MMM042",
              "MUSC_NAME": "\u0414\u043b\u0438\u043d\u043d\u0435\u0439\u0448\u0430\u044f \u043c\u044b\u0448\u0446\u0430 \u0433\u0440\u0443\u0434\u0438",
              "MUSC_NOTES": "\u0414\u043b\u0438\u043d\u043d\u0435\u0439\u0448\u0430\u044f_\u043c\u044b\u0448\u0446\u0430_\u0433\u0440\u0443\u0434\u0438@TH1@TH2@TH3@TH4@TH5@TH6@TH7@TH8@TH9@TH10@TH11@TH12@LL1@LL2@LL3@LL4@LL5@MOV066@MOV065@MOV189@",
              "MUSC_FNOTES": "@STARTTT@MMM042@\u0414\u043b\u0438\u043d\u043d\u0435\u0439\u0448\u0430\u044f_\u043c\u044b\u0448\u0446\u0430_\u0433\u0440\u0443\u0434\u0438@TH1@TH2@TH3@TH4@TH5@TH6@TH7@TH8@TH9@TH10@TH11@TH12@LL1@LL2@LL3@LL4@LL5@MOV066@MOV065@MOV189@SEG003@LOC011@LIN001@LIN014@MAY01@MAY04@UKOROCH@ENDDD@",
              "MUSC_WWW": "https:\/\/ru.wikipedia.org\/wiki\/%D0%94%D0%BB%D0%B8%D0%BD%D0%BD%D0%B5%D0%B9%D1%88%D0%B0%D1%8F_%D0%BC%D1%8B%D1%88%D1%86%D0%B0"
          },
          {
              "MUSC_ID": "MMM043",
              "MUSC_NAME": "\u0414\u043b\u0438\u043d\u043d\u0435\u0439\u0448\u0430\u044f \u043c\u044b\u0448\u0446\u0430 \u0448\u0435\u0438",
              "MUSC_NOTES": "\u0414\u043b\u0438\u043d\u043d\u0435\u0439\u0448\u0430\u044f_\u043c\u044b\u0448\u0446\u0430_\u0448\u0435\u0438@CC3@CC4@CC5@CC6@CC7@CC8@TH1@TH2@TH3@TH4@TH5@TH6@MOV082@MOV081@",
              "MUSC_FNOTES": "@STARTTT@MMM043@\u0414\u043b\u0438\u043d\u043d\u0435\u0439\u0448\u0430\u044f_\u043c\u044b\u0448\u0446\u0430_\u0448\u0435\u0438@CC3@CC4@CC5@CC6@CC7@CC8@TH1@TH2@TH3@TH4@TH5@TH6@MOV082@MOV081@SEG004@LOC016@LIN001@LIN014@MAY01@MAY04@UKOROCH@ENDDD@",
              "MUSC_WWW": "https:\/\/ru.wikipedia.org\/wiki\/%D0%94%D0%BB%D0%B8%D0%BD%D0%BD%D0%B5%D0%B9%D1%88%D0%B0%D1%8F_%D0%BC%D1%8B%D1%88%D1%86%D0%B0"
          },
          {
              "MUSC_ID": "MMM103",
              "MUSC_NAME": "\u041c\u043d\u043e\u0433\u043e\u0440\u0430\u0437\u0434\u0435\u043b\u044c\u043d\u0430\u044f \u043c\u044b\u0448\u0446\u0430 \u0433\u0440\u0443\u0434\u0438",
              "MUSC_NOTES": "\u041c\u043d\u043e\u0433\u043e\u0440\u0430\u0437\u0434\u0435\u043b\u044c\u043d\u0430\u044f_\u043c\u044b\u0448\u0446\u0430_\u0433\u0440\u0443\u0434\u0438@CC3@CC4@CC5@CC6@CC7@CC8@TH1@TH2@TH3@TH4@TH5@MOV066@MOV065@MOV068@",
              "MUSC_FNOTES": "@STARTTT@MMM103@\u041c\u043d\u043e\u0433\u043e\u0440\u0430\u0437\u0434\u0435\u043b\u044c\u043d\u0430\u044f_\u043c\u044b\u0448\u0446\u0430_\u0433\u0440\u0443\u0434\u0438@CC3@CC4@CC5@CC6@CC7@CC8@TH1@TH2@TH3@TH4@TH5@MOV066@MOV065@MOV068@SEG003@LOC011@LIN001@LIN011@ENDDD@",
              "MUSC_WWW": "https:\/\/ru.wikipedia.org\/wiki\/%D0%9C%D0%BD%D0%BE%D0%B3%D0%BE%D1%80%D0%B0%D0%B7%D0%B4%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5_%D0%BC%D1%8B%D1%88%D1%86%D1%8B"
          },
          {
              "MUSC_ID": "MMM125",
              "MUSC_NAME": "\u041c\u044b\u0448\u0446\u044b-\u0432\u0440\u0430\u0449\u0430\u0442\u0435\u043b\u0438 \u0433\u0440\u0443\u0434\u0438",
              "MUSC_NOTES": "\u041c\u044b\u0448\u0446\u044b_tire_\u0432\u0440\u0430\u0449\u0430\u0442\u0435\u043b\u0438_\u0433\u0440\u0443\u0434\u0438@CC7@CC8@TH1@TH2@TH3@TH4@TH5@TH6@TH7@TH8@TH9@TH10@TH11@TH12@MOV066@MOV065@MOV068@",
              "MUSC_FNOTES": "@STARTTT@MMM125@\u041c\u044b\u0448\u0446\u044b_tire_\u0432\u0440\u0430\u0449\u0430\u0442\u0435\u043b\u0438_\u0433\u0440\u0443\u0434\u0438@CC7@CC8@TH1@TH2@TH3@TH4@TH5@TH6@TH7@TH8@TH9@TH10@TH11@TH12@MOV066@MOV065@MOV068@SEG003@LOC011@LIN001@ENDDD@",
              "MUSC_WWW": "https:\/\/ru.wikipedia.org\/wiki\/%D0%9C%D1%8B%D1%88%D1%86%D1%8B-%D0%B2%D1%80%D0%B0%D1%89%D0%B0%D1%82%D0%B5%D0%BB%D0%B8"
          },
          {
              "MUSC_ID": "MMM132",
              "MUSC_NAME": "\u041d\u0430\u0440\u0443\u0436\u043d\u044b\u0435 \u043c\u0435\u0436\u0440\u0435\u0431\u0435\u0440\u043d\u044b\u0435 \u043c\u044b\u0448\u0446\u044b",
              "MUSC_NOTES": "\u041d\u0430\u0440\u0443\u0436\u043d\u044b\u0435_\u043c\u0435\u0436\u0440\u0435\u0431\u0435\u0440\u043d\u044b\u0435_\u043c\u044b\u0448\u0446\u044b@TH1@TH2@TH3@TH4@TH5@TH6@TH7@TH8@TH9@TH10@TH11@MOV192@",
              "MUSC_FNOTES": "@STARTTT@MMM132@\u041d\u0430\u0440\u0443\u0436\u043d\u044b\u0435_\u043c\u0435\u0436\u0440\u0435\u0431\u0435\u0440\u043d\u044b\u0435_\u043c\u044b\u0448\u0446\u044b@TH1@TH2@TH3@TH4@TH5@TH6@TH7@TH8@TH9@TH10@TH11@MOV192@SEG003@LOC013@LIN003@LIN004@LIN005@MAY03@ENDDD@",
              "MUSC_WWW": "https:\/\/ru.wikipedia.org\/wiki\/%D0%9D%D0%B0%D1%80%D1%83%D0%B6%D0%BD%D1%8B%D0%B5_%D0%BC%D0%B5%D0%B6%D1%80%D1%91%D0%B1%D0%B5%D1%80%D0%BD%D1%8B%D0%B5_%D0%BC%D1%8B%D1%88%D1%86%D1%8B"
          },
          {
              "MUSC_ID": "MMM140",
              "MUSC_NAME": "\u041e\u0441\u0442\u0438\u0441\u0442\u0430\u044f \u043c\u044b\u0448\u0446\u0430 \u0433\u043e\u043b\u043e\u0432\u044b",
              "MUSC_NOTES": "\u041e\u0441\u0442\u0438\u0441\u0442\u0430\u044f_\u043c\u044b\u0448\u0446\u0430_\u0433\u043e\u043b\u043e\u0432\u044b@CC6@CC7@CC8@TH1@TH2@TH3@MOV006@MOV082@",
              "MUSC_FNOTES": "@STARTTT@MMM140@\u041e\u0441\u0442\u0438\u0441\u0442\u0430\u044f_\u043c\u044b\u0448\u0446\u0430_\u0433\u043e\u043b\u043e\u0432\u044b@CC6@CC7@CC8@TH1@TH2@TH3@MOV006@MOV082@SEG004@LOC016@LIN001@MAY01@MAY04@UKOROCH@ORG009@ENDDD@",
              "MUSC_WWW": "https:\/\/ru.wikipedia.org\/wiki\/%D0%9E%D1%81%D1%82%D0%B8%D1%81%D1%82%D0%B0%D1%8F_%D0%BC%D1%8B%D1%88%D1%86%D0%B0"
          },
          {
              "MUSC_ID": "MMM142",
              "MUSC_NAME": "\u041e\u0441\u0442\u0438\u0441\u0442\u0430\u044f \u043c\u044b\u0448\u0446\u0430 \u0448\u0435\u0438",
              "MUSC_NOTES": "\u041e\u0441\u0442\u0438\u0441\u0442\u0430\u044f_\u043c\u044b\u0448\u0446\u0430_\u0448\u0435\u0438@CC2@CC3@CC4@CC5@CC6@CC7@CC8@TH1@TH2@TH3@TH4@TH5@TH6@MOV082@",
              "MUSC_FNOTES": "@STARTTT@MMM142@\u041e\u0441\u0442\u0438\u0441\u0442\u0430\u044f_\u043c\u044b\u0448\u0446\u0430_\u0448\u0435\u0438@CC2@CC3@CC4@CC5@CC6@CC7@CC8@TH1@TH2@TH3@TH4@TH5@TH6@MOV082@SEG004@LOC016@LIN001@MAY01@MAY04@UKOROCH@ORG009@ENDDD@",
              "MUSC_WWW": "https:\/\/ru.wikipedia.org\/wiki\/%D0%9E%D1%81%D1%82%D0%B8%D1%81%D1%82%D0%B0%D1%8F_%D0%BC%D1%8B%D1%88%D1%86%D0%B0"
          },
          {
              "MUSC_ID": "MMM154",
              "MUSC_NAME": "\u041f\u043e\u0434\u0432\u0437\u0434\u043e\u0448\u043d\u043e-\u0440\u0435\u0431\u0435\u0440\u043d\u0430\u044f \u043c\u044b\u0448\u0446\u0430 \u0433\u0440\u0443\u0434\u0438",
              "MUSC_NOTES": "\u041f\u043e\u0434\u0432\u0437\u0434\u043e\u0448\u043d\u043e_tire_\u0440\u0435\u0431\u0435\u0440\u043d\u0430\u044f_\u043c\u044b\u0448\u0446\u0430_\u0433\u0440\u0443\u0434\u0438@TH1@TH2@TH3@TH4@TH5@TH6@TH7@TH8@TH9@TH10@TH11@TH12@LL1@MOV066@MOV065@MOV069@MOV189@",
              "MUSC_FNOTES": "@STARTTT@MMM154@\u041f\u043e\u0434\u0432\u0437\u0434\u043e\u0448\u043d\u043e_tire_\u0440\u0435\u0431\u0435\u0440\u043d\u0430\u044f_\u043c\u044b\u0448\u0446\u0430_\u0433\u0440\u0443\u0434\u0438@TH1@TH2@TH3@TH4@TH5@TH6@TH7@TH8@TH9@TH10@TH11@TH12@LL1@MOV066@MOV065@MOV069@MOV189@SEG003@LOC011@LIN014@MAY01@MAY04@ENDDD@",
              "MUSC_WWW": "https:\/\/ru.wikipedia.org\/wiki\/%D0%9F%D0%BE%D0%B4%D0%B2%D0%B7%D0%B4%D0%BE%D1%88%D0%BD%D0%BE-%D1%80%D1%91%D0%B1%D0%B5%D1%80%D0%BD%D0%B0%D1%8F_%D0%BC%D1%8B%D1%88%D1%86%D0%B0"
          },
          {
              "MUSC_ID": "MMM156",
              "MUSC_NAME": "\u041f\u043e\u0434\u0432\u0437\u0434\u043e\u0448\u043d\u043e-\u0440\u0435\u0431\u0435\u0440\u043d\u0430\u044f \u043c\u044b\u0448\u0446\u0430 \u0448\u0435\u0438",
              "MUSC_NOTES": "\u041f\u043e\u0434\u0432\u0437\u0434\u043e\u0448\u043d\u043e_tire_\u0440\u0435\u0431\u0435\u0440\u043d\u0430\u044f_\u043c\u044b\u0448\u0446\u0430_\u0448\u0435\u0438@CC3@CC4@CC5@CC6@CC7@CC8@TH1@TH2@TH3@TH4@TH5@TH6@TH7@MOV082@MOV081@MOV084@",
              "MUSC_FNOTES": "@STARTTT@MMM156@\u041f\u043e\u0434\u0432\u0437\u0434\u043e\u0448\u043d\u043e_tire_\u0440\u0435\u0431\u0435\u0440\u043d\u0430\u044f_\u043c\u044b\u0448\u0446\u0430_\u0448\u0435\u0438@CC3@CC4@CC5@CC6@CC7@CC8@TH1@TH2@TH3@TH4@TH5@TH6@TH7@MOV082@MOV081@MOV084@SEG004@LOC016@LIN014@MAY01@MAY04@ORG009@ENDDD@",
              "MUSC_WWW": "https:\/\/ru.wikipedia.org\/wiki\/%D0%9F%D0%BE%D0%B4%D0%B2%D0%B7%D0%B4%D0%BE%D1%88%D0%BD%D0%BE-%D1%80%D1%91%D0%B1%D0%B5%D1%80%D0%BD%D0%B0%D1%8F_%D0%BC%D1%8B%D1%88%D1%86%D0%B0"
          },
          {
              "MUSC_ID": "MMM165",
              "MUSC_NAME": "\u041f\u043e\u043b\u0443\u043e\u0441\u0442\u0438\u0441\u0442\u0430\u044f \u043c\u044b\u0448\u0446\u0430 \u0433\u0440\u0443\u0434\u0438",
              "MUSC_NOTES": "\u041f\u043e\u043b\u0443\u043e\u0441\u0442\u0438\u0441\u0442\u0430\u044f_\u043c\u044b\u0448\u0446\u0430_\u0433\u0440\u0443\u0434\u0438@CC6@CC7@CC8@TH1@TH2@TH3@TH4@TH5@TH6@TH7@TH8@TH9@TH10@TH11@TH12@MOV066@MOV065@",
              "MUSC_FNOTES": "@STARTTT@MMM165@\u041f\u043e\u043b\u0443\u043e\u0441\u0442\u0438\u0441\u0442\u0430\u044f_\u043c\u044b\u0448\u0446\u0430_\u0433\u0440\u0443\u0434\u0438@CC6@CC7@CC8@TH1@TH2@TH3@TH4@TH5@TH6@TH7@TH8@TH9@TH10@TH11@TH12@MOV066@MOV065@SEG003@LOC011@LIN001@LIN011@UKOROCH@ENDDD@",
              "MUSC_WWW": "https:\/\/ru.wikipedia.org\/wiki\/%D0%9F%D0%BE%D0%BB%D1%83%D0%BE%D1%81%D1%82%D0%B8%D1%81%D1%82%D0%B0%D1%8F_%D0%BC%D1%8B%D1%88%D1%86%D0%B0"
          },
          {
              "MUSC_ID": "MMM166",
              "MUSC_NAME": "\u041f\u043e\u043b\u0443\u043e\u0441\u0442\u0438\u0441\u0442\u0430\u044f \u043c\u044b\u0448\u0446\u0430 \u0448\u0435\u0438",
              "MUSC_NOTES": "\u041f\u043e\u043b\u0443\u043e\u0441\u0442\u0438\u0441\u0442\u0430\u044f_\u043c\u044b\u0448\u0446\u0430_\u0448\u0435\u0438@CC1@CC2@CC3@CC4@CC5@CC6@CC7@CC8@TH1@TH2@TH3@TH4@TH5@TH6@MOV082@MOV081@",
              "MUSC_FNOTES": "@STARTTT@MMM166@\u041f\u043e\u043b\u0443\u043e\u0441\u0442\u0438\u0441\u0442\u0430\u044f_\u043c\u044b\u0448\u0446\u0430_\u0448\u0435\u0438@CC1@CC2@CC3@CC4@CC5@CC6@CC7@CC8@TH1@TH2@TH3@TH4@TH5@TH6@MOV082@MOV081@SEG004@LOC016@LIN001@LIN011@UKOROCH@ORG009@ENDDD@",
              "MUSC_WWW": "https:\/\/ru.wikipedia.org\/wiki\/%D0%9F%D0%BE%D0%BB%D1%83%D0%BE%D1%81%D1%82%D0%B8%D1%81%D1%82%D0%B0%D1%8F_%D0%BC%D1%8B%D1%88%D1%86%D0%B0"
          }
      ]
  }
} -->