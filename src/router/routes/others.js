import Etaps from "@/components/pages/others/Etaps.vue";
import Lines from "@/components/pages/others/Lines.vue";
import Mayers from "@/components/pages/others/Mayers.vue";
import Mezocycles from "@/components/pages/others/Mezocycles.vue";
import Sports from "@/components/pages/others/Sports.vue";
import EtapDetail from "@/components/pages/others/EtapDetail.vue";
import LineDetail from "@/components/pages/others/LineDetail.vue";
import MayersDetail from "@/components/pages/others/MayersDetail.vue";
import MezocycleDetail from "@/components/pages/others/MezocycleDetail.vue";
import SportDetail from "@/components/pages/others/SportDetail.vue";

export default [
  {
    path: "/etaps",
    name: "etaps",
    component: Etaps,
  },
  {
    path: "/etap-detail/:id",
    name: "etap-detail",
    component: EtapDetail,
  },
  {
    path: "/lines",
    name: "lines",
    component: Lines,
  },
  {
    path: "/line-detail/:id",
    name: "line-detail",
    component: LineDetail,
  },
  {
    path: "/mayers",
    name: "mayers",
    component: Mayers,
  },
  {
    path: "/mayers-detail/:id",
    name: "mayers-detail",
    component: MayersDetail,
  },
  {
    path: "/mezocycles",
    name: "mezocycles",
    component: Mezocycles,
  },
  {
    path: "/mezocycle-detail/:id",
    name: "mezocycle-detail",
    component: MezocycleDetail,
  },
  {
    path: "/sports",
    name: "sports",
    component: Sports,
  },
  {
    path: "/sport-detail/:id",
    name: "sport-detail",
    component: SportDetail,
  },
];
