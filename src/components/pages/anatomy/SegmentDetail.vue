
<template>
  <div class="d-flex align-center flex-column">
    <v-expansion-panels>
      <v-expansion-panel :title=segment_name :text=item_id mt-2>
      </v-expansion-panel>
    </v-expansion-panels>

    <p>-</p>


    <h4>СПИСОК МЫШЦ</h4>
    <div>
      <ul v-for="item in locuses" :key="item.LOCUS_ID">
        <router-link :to="{ name: 'locus-detail', params: { id: item.LOCUS_ID } }">
          <li>{{ item.LOCUS_NAME }}</li>
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
      url: 'api/v1/segment/get',
      segment_name: null,
      locuses: null,
    };
  },
  computed: {},
  methods: {
    async search() {
      await http
        .get(this.url + '/' + this.$route.params.id)
        .then((response) => {
          this.item = response.data.data;
          this.segment_name = this.item.SEGMENT_NAME
          this.locuses = this.item.LOCUSES
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