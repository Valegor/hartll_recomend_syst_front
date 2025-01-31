<template>
  <div class="d-flex align-center flex-column">
    <v-expansion-panels>
      <v-expansion-panel :title=caption :text=item_id mt-2>
      </v-expansion-panel>
    </v-expansion-panels>

    <table>
      <tr>
        <td>caption</td>
        <td>{{caption}}</td>
      </tr>
      <tr>
        <td>day_min</td>
        <td>{{day_min}}</td>
      </tr>
      <tr>
        <td>day_max</td>
        <td>{{day_max}}</td>
      </tr>
      <tr>
        <td>ex_per_week_min</td>
        <td>{{ex_per_week_min}}</td>
      </tr>
      <tr>
        <td>ex_per_week_max</td>
        <td>{{ex_per_week_max}}</td>
      </tr>
      <tr>
        <td>tren_time_min</td>
        <td>{{tren_time_min}}</td>
      </tr>
      <tr>
        <td>tren_time_max</td>
        <td>{{tren_time_max}}</td>
      </tr>
      <tr>
        <td>number_ex_min</td>
        <td>{{number_ex_min}}</td>
      </tr>
      <tr>
        <td>number_ex_max</td>
        <td>{{number_ex_max}}</td>
      </tr>
      <tr>
        <td>relax_inter_ex_min</td>
        <td>{{relax_inter_ex_min}}</td>
      </tr>
      <tr>
        <td>relax_inter_ex_max</td>
        <td>{{relax_inter_ex_max}}</td>
      </tr>
      <tr>
        <td>podhod_min</td>
        <td>{{podhod_min}}</td>
      </tr>
      <tr>
        <td>podhod_max</td>
        <td>{{podhod_max}}</td>
      </tr>
      <tr>
        <td>relax_inter_podhod_min</td>
        <td>{{relax_inter_podhod_min}}</td>
      </tr>
      <tr>
        <td>relax_inter_podhod_max</td>
        <td>{{relax_inter_podhod_max}}</td>
      </tr>
      <tr>
        <td>nagr_min</td>
        <td>{{nagr_min}}</td>
      </tr>
      <tr>
        <td>nagr_max</td>
        <td>{{nagr_max}}</td>
      </tr>
      <tr>
        <td>round_min</td>
        <td>{{round_min}}</td>
      </tr>
      <tr>
        <td>round_max</td>
        <td>{{round_max}}</td>
      </tr>
      <tr>
        <td>relax_inter_round_min</td>
        <td>{{relax_inter_round_min}}</td>
      </tr>
      <tr>
        <td>relax_inter_round_max</td>
        <td>{{relax_inter_round_max}}</td>
      </tr>
      <tr>
        <td>serii_min</td>
        <td>{{serii_min}}</td>
      </tr>
      <tr>
        <td>serii_max</td>
        <td>{{serii_max}}</td>
      </tr>
      <tr>
        <td>relax_inter_serii_min</td>
        <td>{{relax_inter_serii_min}}</td>
      </tr>
      <tr>
        <td>relax_inter_serii_max</td>
        <td>{{relax_inter_serii_max}}</td>
      </tr>
    </table>


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
      url: 'api/v1/etap/get',
      caption: null,
      day_min: null,
      day_max: null,
      ex_per_week_min: null,
      ex_per_week_max: null,
      tren_time_min: null,
      tren_time_max: null,
      number_ex_min: null,
      number_ex_max: null,
      relax_inter_ex_min: null,
      relax_inter_ex_max: null,
      podhod_min: null,
      podhod_max: null,
      relax_inter_podhod_min: null,
      relax_inter_podhod_max: null,
      nagr_min: null,
      nagr_max: null,
      round_min: null,
      round_max: null,
      relax_inter_round_min: null,
      relax_inter_round_max: null,
      serii_min: null,
      serii_max: null,
      relax_inter_serii_min: null,
      relax_inter_serii_max: null,
    };
  },
  computed: {},
  methods: {
    async search() {
      await http
        .get(this.url + '/' + this.$route.params.id)
        .then((response) => {
          this.item = response.data.data;
          this.caption = this.item.caption
          this.day_min = this.item.day_min
          this.day_max = this.item.day_max
          this.ex_per_week_min = this.item.ex_per_week_min
          this.ex_per_week_max = this.item.ex_per_week_max
          this.tren_time_min = this.item.tren_time_min
          this.tren_time_max = this.item.tren_time_max
          this.number_ex_min = this.item.number_ex_min
          this.number_ex_max = this.item.number_ex_max
          this.relax_inter_ex_min = this.item.relax_inter_ex_min
          this.carelax_inter_ex_maxption = this.item.relax_inter_ex_max
          this.podhod_min = this.item.podhod_min
          this.podhod_max = this.item.podhod_max
          this.relax_inter_podhod_min = this.item.relax_inter_podhod_min
          this.relax_inter_podhod_max = this.item.relax_inter_podhod_max
          this.relax_inter_round_min = this.item.relax_inter_round_min
          this.relax_inter_round_max = this.item.relax_inter_round_max
          this.serii_min = this.item.serii_min
          this.serii_max = this.item.serii_max
          this.relax_inter_serii_min = this.item.relax_inter_serii_min
          this.relax_inter_serii_max = this.item.relax_inter_serii_max
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

<style>
table, th, td {
  border: 1px solid black;
}
</style>