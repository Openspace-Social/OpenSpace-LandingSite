import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";



// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";


// mounting point for the whole app

import App from "@/App.vue";

//
import Index from "@/views/Index.vue";
//
//// views for General layout
//
import About from "@/views/general/about-us.vue";
import Contact from "@/views/general/contact-us.vue";
import Thanks from "@/views/general/thank-you.vue";
import Why from "@/views/general/why-us.vue";

import Terms from "@/views/general/terms-of-service.vue";
import Guidelines from "@/views/general/community-guidelines.vue";
import Privacy from "@/views/general/privacy-policy.vue";
//
//// views for Roadmap layout
//
import Roadmap from "@/views/roadmap/whats-next.vue";
import Support from "@/views/roadmap/os-support.vue";
//
//// views for Contribute layout
//
import Contribute from "@/views/contribute/contribute.vue";
import Donate from "@/views/contribute/donate.vue";


// routes
const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/general/about-us",
    name: 'About',
    component: About,
  },
  {
    path: "/general/contact-us",
    name: 'Contact',
    component: Contact,
  },
  {
    path: "/general/thank-you",
    name: 'Thanks',
    component: Thanks,
  },
  {
    path: "/general/why-us",
    name: 'Why',
    component: Why,
  },
  {
    path: "/general/terms-of-service",
    name: 'Terms',
    component: Terms,
  },
  {
    path: "/general/community-guidelines",
    name: 'Guidelines',
    component: Guidelines,
  },
  {
    path: "/general/privacy-policy",
    name: 'Privacy',
    component: Privacy,
  },
  {
    path: "/roadmap/whats-next",
    name: 'WhatsNext',
    component: Roadmap,
  },
  {
    path: "/roadmap/os-support",
    name: 'OS Support',
    component: Support,
  },
  {
    path: "/contribute/contribute",
    name: 'Contribute',
    component: Contribute,
  },
  {
    path: "/contribute/donate",
    name: 'Donate',
    component: Donate,
  },
  //{ path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


createApp(App).use(router).mount("#app");
