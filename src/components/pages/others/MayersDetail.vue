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
      url: 'api/v1/may/get',
      line_mame: null,
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
          this.line_mame = this.item.MAY_NAME
          this.muscul_array = this.item.MUSC_ARRAY
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