<template>
  <div class="d-flex align-center flex-column">
    <v-expansion-panels>
      <v-expansion-panel :title=line_mame :text=item_id mt-2>
      </v-expansion-panel>
    </v-expansion-panels>


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
      url: 'api/v1/mezo/get',
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