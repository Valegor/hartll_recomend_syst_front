
<template>
  <div class="d-flex align-center flex-column">
    <v-expansion-panels>
      <v-expansion-panel :title=muscul_name :text=muscul_id mt-2>
      </v-expansion-panel>
    </v-expansion-panels>

    <p>-</p>

    <v-btn :href=link target="_blank" mt-4>
      WWW
    </v-btn>

    <p>-</p>

    <h4>ИННЕРВАЦИЯ МЫШЦЫ</h4>
    <div>
      <ul v-for="item in neuro_array" :key="item[0]">
        <router-link :to="{ name: 'neuro-detail', params: { id: item[0] } }">
          <li>{{ item[1] }}</li>
        </router-link>
      </ul>
    </div>

    <p>-</p>

    <h4>СКЛОННОСТЬ МЫШЦЫ</h4>
    <div>
        <router-link :to="{ name: 'skl-detail', params: { musc_skl_id } }">
          <li>{{ musc_skl_caption }}</li>
        </router-link>
    </div>

    <p>-</p>

    <h4>СПИСОК ДВИЖЕНИЙ</h4>
    <div>
      <ul v-for="item in moov_array" :key="item[0]">
        <router-link :to="{ name: 'moov-detail', params: { id: item[0] } }">
          <li @click="goMoov">{{ item[1] }}</li>
        </router-link>
      </ul>
    </div>

    <p>-</p>

    <h4>ЛОКАЛИЗАЦИЯ МЫШЦЫ</h4>
    <div>
      <ul v-for="item in locus_array" :key="item[0]">
        <router-link :to="{ name: 'locus-detail', params: { id: item[0] } }">
          <li>{{ item[1] }}</li>
        </router-link>
      </ul>
    </div>

    <p>-</p>

    <h4>СЕГМЕНТ ТЕЛА</h4>
    <div>
      <ul v-for="item in segment_array" :key="item[0]">
        <router-link :to="{ name: 'segment-detail', params: { id: item[0] } }">
          <li>{{ item[1] }}</li>
        </router-link>
      </ul>
    </div>

    <p>-</p>

    <h4>ЛИНИИ ТКМ</h4>
    <div>
      <ul v-for="item in line_array" :key="item[0]">
        <router-link :to="{ name: 'line-detail', params: { id: item[0] } }">
          <li>{{ item[1] }}</li>
        </router-link>
      </ul>
    </div>

    <p>-</p>

    <h4>МИОФАСЦИАЛЬНЫЕ ЛИНИИ</h4>
    <div>
      <ul v-for="item in may_array" :key="item[0]">
        <router-link :to="{ name: 'mayers-detail', params: { id: item[0] } }">
          <li>{{ item[1] }}</li>
        </router-link>
      </ul>
    </div>

    <p>-</p>

    <h4>АССОЦИИРОВАННЫЕ ОРГАНЫ</h4>
    <div>
      <ul v-for="item in organ_array" :key="item[0]">
        <router-link :to="{ name: 'organ-detail', params: { id: item[0] } }">
          <li>{{ item[1] }}</li>
        </router-link>
      </ul>
    </div>

    <p>-</p>

    <h4>УПРАЖНЕНИЯ</h4>

    <p>-</p>

    <h4>ВЫРАЖЕННАЯ НАГРУЗКА</h4>
    <div>
      <ul v-for="item in exercises_force_array" :key="item.id">
        <router-link :to="{ name: 'exercise-detail', params: { id: item.EX_CODE } }">
          <li>{{ item.EX_NAME }}</li>
        </router-link>
      </ul>
    </div>

    <p>-</p>

    <h4>УМЕРЕННАЯ НАГРУЗКА</h4>
    <div>
      <ul v-for="item in exercises_midle_array" :key="item.id">
        <router-link :to="{ name: 'exercise-detail', params: { id: item.EX_CODE } }">
          <li>{{ item.EX_NAME }}</li>
        </router-link>
      </ul>
    </div>

    <p>-</p>

    <h4>ВЫРАЖЕННАЯ РАСТЯЖКА</h4>
    <div>
      <ul v-for="item in exercises_relx2_array" :key="item.id">
        <router-link :to="{ name: 'exercise-detail', params: { id: item.EX_CODE } }">
          <li>{{ item.EX_NAME }}</li>
        </router-link>
      </ul>
    </div>

    <p>-</p>

    <h4>УМЕРЕННАЯ РАСТЯЖКА</h4>
    <div>
      <ul v-for="item in exercises_relx1_array" :key="item.id">
        <router-link :to="{ name: 'exercise-detail', params: { id: item.EX_CODE } }">
          <li>{{ item.EX_NAME }}</li>
        </router-link>
      </ul>
    </div>

    <p>-</p>

    <h4>ВИДЫ СПОРТА</h4>
    <div>
      <ul v-for="item in sports_array" :key="item.id">
        <li>

          <h6>СПОРТИВНАЯ ДИСЦИПЛИНА</h6>

          <h3>{{ item.SPORT_DISCIPLINE }}</h3>

          <p>-</p>

          <h6>ТИП РАБОТЫ</h6>

          <p>{{ item.TYPE_JOB }}</p>

          <p>-</p>

          <h6>ТРЕНИРОВОЧНАЯ НАГРУЗКА</h6>

          <p>{{ item.TRAINING_FORCE }}</p>

          <p>-</p>

          <h6>ДВИЖЕНИЕ</h6>

          <p>{{ item.MOOVE }}</p>

          <p>-</p>

          <h6>ФУНКЦИЯ МЫШЦЫ</h6>

          <p>{{ item.FUNCTION }}</p>

          <p>-</p>

        </li>
      </ul>
    </div>

    <p>-</p>


    <div class="text-subtitle-2"></div>
  </div>
</template>

<script>
import http from "@/api/http";
// import router from "@/router/index"

export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      item: null,
      url: 'api/v1/muscul/full',
      sports_url: 'api/v1/sport/muscul-info',
      muscul_id: null,
      muscul_name: null,
      muscul_notes: null,
      muscul_full_notes: null,
      link: null,
      moov_array: null,
      segment_array: null,
      locus_array: null,
      line_array: null,
      may_array: null,
      organ_array: null,
      neuro_array: null,
      exercise_array: null,
      exercises_force_array: null,
      exercises_midle_array: null,
      exercises_relx1_array: null,
      exercises_relx2_array: null,
      sports_array: null,
      musc_skl_caption: null,
      musc_skl_id: null,
    };
  },
  computed: {},
  methods: {
    async search() {
      await http
        .get(this.url + '/' + this.$route.params.id)
        .then((response) => {
          this.item = response.data;
          this.muscul_id = this.item.MUSC_ID
          this.muscul_name = this.item.MUSC_NAME
          this.muscul_notes = this.item.MUSC_NOTES
          this.muscul_full_notes = this.item.MUSC_FNOTES
          this.link = this.item.MUSC_WWW
          this.moov_array = this.item.moov_array
          this.segment_array = this.item.segment_array
          this.locus_array = this.item.locus_array
          this.line_array = this.item.line_array
          this.may_array = this.item.may_array
          this.organ_array = this.item.organ_array
          this.neuro_array = this.item.neuro_array
          this.exercise_array = this.item.exercise_array
          this.exercises_force_array = this.item.exercises_force_array
          this.exercises_midle_array = this.item.exercises_midle_array
          this.exercises_relx1_array = this.item.exercises_relx1_array
          this.exercises_relx2_array = this.item.exercises_relx2_array
          this.musc_skl_id = this.item.SKL_ID
          this.musc_skl_caption = this.item.SKL_NAME
          console.log(this.item);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    async getSports() {
      await http
        .get(this.sports_url + '/' + this.$route.params.id)
        .then((response) => {
          this.sports_array = response.data.data;
          console.log(this.sports_array);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
  watch: {},
  created() { },
  mounted() {
    window.scrollTo(0, 2);
    this.search();
    this.getSports();
  },
  updated() { },
  destroyed() { },
};
</script>

<style></style>