import Musculus from "@/components/pages/anatomy/Musculus.vue";
import Muscul from "@/components/pages/anatomy/Muscul.vue";
import Locus from "@/components/pages/anatomy/Locus.vue";
import LocusDetail from "@/components/pages/anatomy/LocusDetail.vue";
import Moov from "@/components/pages/anatomy/Moov.vue";
import MoovDetail from "@/components/pages/anatomy/MoovDetail.vue";
import Neuro from "@/components/pages/anatomy/Neuro.vue";
import NeuroDetail from "@/components/pages/anatomy/NeuroDetail.vue";
import Organ from "@/components/pages/anatomy/Organ.vue";
import OrganDetail from "@/components/pages/anatomy/OrganDetail.vue";
import Segment from "@/components/pages/anatomy/Segment.vue";
import SegmentDetail from "@/components/pages/anatomy/SegmentDetail.vue";
import Skl from "@/components/pages/anatomy/Skl.vue";
import SklDetail from "@/components/pages/anatomy/SklDetail.vue";

export default [
  {
    path: "/musculus",
    name: "musculus",
    component: Musculus,
  },
  {
    path: '/muscul/:id',
    name: 'muscul',
    component: Muscul
  },
  {
    path: "/locus",
    name: "locus",
    component: Locus,
  },
  {
    path: '/locus-detail/:id',
    name: 'locus-detail',
    component: LocusDetail
  },
  {
    path: "/neuro",
    name: "neuro",
    component: Neuro,
  },
  {
    path: '/neuro-detail/:id',
    name: 'neuro-detail',
    component: NeuroDetail
  },
  {
    path: "/moov",
    name: "moov",
    component: Moov,
  },
  {
    path: '/moov-detail/:id',
    name: 'moov-detail',
    component: MoovDetail
  },
  {
    path: "/organ",
    name: "organ",
    component: Organ,
  },
  {
    path: '/organ-detail/:id',
    name: 'organ-detail',
    component: OrganDetail
  },
  {
    path: "/segment",
    name: "segment",
    component: Segment,
  },
  {
    path: '/segment-detail/:id',
    name: 'segment-detail',
    component: SegmentDetail
  },
  {
    path: "/skl",
    name: "skl",
    component: Skl,
  },
  {
    path: '/skl-detail/:id',
    name: 'skl-detail',
    component: SklDetail,
  },
];
