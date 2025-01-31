<template>
  <div class="d-flex justify-space-around">
    <v-menu transition="scale-transition">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props">Анатомия </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, i) in anatomy" :key="i">
          <router-link :to="{ name:  item.link}">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </router-link>
        </v-list-item>
      </v-list>
      
    </v-menu>

    <v-menu transition="slide-x-transition">
      <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props">Упражнения</v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, i) in exercises" :key="i">
          <router-link :to="{ name:  item.link}">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </router-link>
        </v-list-item>
      </v-list>

    </v-menu>

    <v-menu transition="slide-y-transition">
      <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props">Прочее</v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, i) in others" :key="i">
          <router-link :to="{ name:  item.link}">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </router-link>
        </v-list-item>
      </v-list>

    </v-menu>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      anatomy: [
        { title: "Мышцы", link: "musculus" },
        { title: "Локализации мышц", link: "locus" },
        { title: "Сегменты тела", link: "segment" },
        { title: "Иннервация мышц", link: "neuro" },
        { title: "Движения", link: "moov" },
        { title: "Ассоциированные органы", link: "organ" },
        { title: "Склонности мышц", link: "skl" },
    ],
      exercises: [
        { title: "Упражнения", link: "exercises" },
        { title: "Группы упражнений", link: "exercises_groupps" },
        { title: "Типы упражнений", link: "exercises_types" },
      ],
      others: [
        { title: "Виды спорта", link: "sports" },
        { title: "Этапы тренировок", link: "etaps" },
        { title: "Линии ТКМ", link: "lines" },
        { title: "Мышечно-сухожильные линии", link: "mayers" },
      ],
    };
  },
  computed: {},
  methods: {},
  watch: {},
  created() {},
  mounted() {},
  updated() {},
  destroyed() {},
};
</script>

<style></style>


<!-- <router-link to="/">Go to Home</router-link> -->