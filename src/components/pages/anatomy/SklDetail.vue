
<template>
  <div class="d-flex align-center flex-column">
    <v-expansion-panels>
      <v-expansion-panel :title=skl_caption :text=item_id mt-2>
      </v-expansion-panel>
    </v-expansion-panels>

    <p>-</p>


    <h4>СПИСОК МЫШЦ</h4>
    <div>
      <ul v-for="item in musc_array" :key="item[0]">
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
      url: 'api/v1/skl/get',
      skl_caption: null,
      musc_array: null,
    };
  },
  computed: {},
  methods: {
    async search() {
      await http
        .get(this.url + '/' + this.$route.params.id)
        .then((response) => {
          this.item = response.data.data;
          this.skl_caption = this.item.SKL_NAME
          this.musc_array = this.item.MUSCUL_ARRAY
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
    this.item_id = this.$route.params.id;
    this.search();
  },
  updated() { },
  destroyed() { },
};
</script>

<style></style>

<!-- {
    "SKL_ID": 1,
    "SKL_NAME": "\u041c\u044b\u0448\u0446\u0430, \u0441\u043a\u043b\u043e\u043d\u043d\u0430\u044f \u043a \u0443\u043a\u043e\u0440\u043e\u0447\u0435\u043d\u0438\u044e.",
    "SKL_MUSC": "MMM056@MMM055@MMM172@MMM153@MMM129@MMM167@MMM168@MMM029@MMM170@MMM159@MMM027@MMM059@MMM002@MMM041@MMM042@MMM043@MMM164@MMM165@MMM166@MMM140@MMM141@MMM142@MMM145@MMM182@MMM054@MMM024@MMM118@MMM049@MMM070@MMM072@MMM089@MMM092@MMM075@MMM131@MMM020",
    "MUSCUL_ARRAY": [
        [
            "MMM056",
            "\u041a\u0430\u043c\u0431\u0430\u043b\u043e\u0432\u0438\u0434\u043d\u0430\u044f \u043c\u044b\u0448\u0446\u0430"
        ], -->