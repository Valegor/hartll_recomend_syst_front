<template>
  <div class="d-flex align-center flex-column">
    <v-expansion-panels>
      <v-expansion-panel :title=moov_name :text=item_id mt-2>
      </v-expansion-panel>
    </v-expansion-panels>


    <p>-</p>

    <h4>ДВИЖЕНИЕ АНТАГОНИСТ</h4>
    <a :href="'//' + ant_path">
      <p>{{ ant_caption }}</p>
    </a>


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
import { VUE_APP_ROOT}  from '@/const'


export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      item_id: null,
      url: 'api/v1/moov/get',
      moov_name: null,
      ants_id: null,
      ant_caption: null,
      musculus: null,
      ant_path: null,
    };
  },
  computed: {},
  methods: {
    async search() {
      await http
        .get(this.url + '/' + this.$route.params.id)
        .then((response) => {
          this.item = response.data.data;
          this.moov_name = this.item.MOOV_NOTES
          this.ants_id = this.item.ANT_ID
          this.ant_caption = this.item.ANT_CAPTION
          this.musculus = this.item.MUSCULUS
          this.ant_path = VUE_APP_ROOT + 'moov-detail/' + this.ants_id;
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