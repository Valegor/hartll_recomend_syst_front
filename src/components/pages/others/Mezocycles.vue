
  <template>
    <h2>Mezocycles</h2>
  <div class="d-flex align-center flex-column">
    <div class="text-subtitle-2">СПИСОК МЫШЦ</div>

    <!-- <p v-for="item in musculus" :key="item.MUSC_ID">
      {{item.MUSC_NAME}}
    </p> -->
    <v-card
      v-for="item in musculus"
      :key="item.MUSC_ID"
      width="400"
      title=""
      :subtitle="item.MUSC_NAME"
      text="This is content"
      variant="outlined"
    ></v-card>
  </div>

  <!-- <Bootstrap5Pagination
      :data="laradata"
      @pagination-change-page="getMusculusList"
  /> -->
</template>

<script>
import http from "@/api/http";
// import { Bootstrap5Pagination } from 'laravel-vue-pagination';

export default {
  name: "",
  components: {
    // Bootstrap5Pagination,
  },
  props: {},
  data() {
    return {
      musculus: null,
      laradata: null,
    };
  },
  computed: {},
  methods: {
    async musculusList() {
      await http
        .post("api/v1/muscul/search", {
          search_string: '',
        })
        .then((response) => {
          this.musculus = response.data.data;
          console.log(this.musculus);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
  watch: {},
  created() {},
  mounted() {
    this.musculusList();
  },
  updated() {},
  destroyed() {},
};
</script>

<style></style>