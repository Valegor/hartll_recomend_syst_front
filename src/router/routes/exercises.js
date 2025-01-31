import Exercises from "@/components/pages/exercises/Exercises";
import ExercisesGroupps from "@/components/pages/exercises/ExercisesGroupps";
import ExercisesTypes from "@/components/pages/exercises/ExercisesTypes";
import ExerciseDetail from "@/components/pages/exercises/ExerciseDetail";
import ExerciseGrouppDetail from "@/components/pages/exercises/ExerciseGrouppDetail";
import ExerciseTypeDetail from "@/components/pages/exercises/ExerciseTypeDetail";

export default [
  {
    path: "/exercises",
    name: "exercises",
    component: Exercises,
  },
  {
    path: '/exercise-detail/:id',
    name: 'exercise-detail',
    component: ExerciseDetail
  },
  {
    path: "/exercises-groupps",
    name: "exercises_groupps",
    component: ExercisesGroupps,
  },
  {
    path: '/exercise-groupp-detail/:id',
    name: 'exercise-groupp-detail',
    component: ExerciseGrouppDetail
  },
  {
    path: "/exercises-types",
    name: "exercises_types",
    component: ExercisesTypes,
  },
  {
    path: '/exercises-type-detail/:id',
    name: 'exercises-type-detail',
    component: ExerciseTypeDetail
  },
];
