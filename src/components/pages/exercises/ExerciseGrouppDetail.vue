
<template>
  <div class="d-flex align-center flex-column">
    <v-expansion-panels>
      <v-expansion-panel :title=exgroupp_name :text=item_id mt-2>
      </v-expansion-panel>
    </v-expansion-panels>

    <p>-</p>

    <h4>ОПИСАНИЕ</h4>

    <p>{{ exgroupp_notes }}</p>

    <p>-</p>

    <h4>СПИСОК УПРАЖНЕНИЙ</h4>
    <div>
      <ul v-for="item in exercises_array" :key="item.id">
        <router-link :to="{ name: 'exercise-detail', params: { id: item.EX_CODE } }">
          <li>{{ item.EX_NAME }}</li>
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
      url: 'api/v1/exgroupp/get',
      exgroupp_name: null,
      exgroupp_notes: null,
      exercises_array: null,
    };
  },
  computed: {},
  methods: {
    async search() {
      await http
        .get(this.url + '/' + this.$route.params.id)
        .then((response) => {
          this.item = response.data.data;
          this.exgroupp_name = this.item.EXGROUPP_NAME
          this.exgroupp_notes = this.item.EXGROUPP_NOTES
          this.exercises_array = this.item.EXERCISES
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
 