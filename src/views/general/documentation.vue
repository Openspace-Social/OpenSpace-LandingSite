<template>
  <div>
    <index-navbar />
    <section class="header relative pt-16 items-center flex h-screen max-h-860-px">
      <div class="container mx-auto items-center flex flex-wrap">
        <div class="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
          <div class="pt-32 sm:pt-0">
            <h2 class="font-semibold text-4xl text-blueGray-600">
              Documentation
            </h2>
            <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
            How to use Openspace
            </p>
          </div>
        </div>
      </div>
      <img
        class="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
        :src="patternVue"
        alt="..."
      />
    </section>
    <section class="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
      <div
        class="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
        style="transform: translateZ(0);">
        <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            class="text-blueGray-100 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div class="container mx-auto overflow-hidden pb-20">
        <div class="flex flex-wrap items-center">

          <h2 class="font-semibold text-4xl text-blueGray-600">
              Click on a feature to learn more about it
            </h2>

          <div class="block pb-6">
              <span
                class="text-2xl font-semibold inline-block py-3 px-3 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-8 mt-8"
              >
                How to Post
              </span>
              <span
                class="text-2xl font-semibold inline-block py-3 px-3 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-8 mt-8"
              >
                Communities
              </span>
              <span
                class="text-2xl font-semibold inline-block py-3 px-3 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-8 mt-8"
              >
                @Tagging
              </span>
              <span
                class="text-2xl font-semibold inline-block py-3 px-3 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-8 mt-8"
              >
                c/community_linking
              </span>
              <span
                class="text-2xl font-semibold inline-block py-3 px-3 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-8 mt-8"
              >
                #Hashtags
              </span>
              <span
                class="text-2xl font-semibold inline-block py-3 px-3 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-8 mt-8"
              >
                Emojis
              </span>
              <span
                class="text-2xl font-semibold inline-block py-3 px-3 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-8 mt-8"
              >
                Feed Filters
              </span>
              <span
                class="text-2xl font-semibold inline-block py-3 px-3 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-8 mt-8"
              >
                Trending Posts
              </span>
              <span
                class="text-2xl font-semibold inline-block py-3 px-3 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-8 mt-8"
              >
                Exploring Posts
              </span>
              <span
                class="text-2xl font-semibold inline-block py-3 px-3 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-8 mt-8"
              >
                Follower vs Connection
              </span>
              <span
                class="text-2xl font-semibold inline-block py-3 px-3 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-8 mt-8"
              >
                Circles
              </span>
              <span
                class="text-2xl font-semibold inline-block py-3 px-3 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-8 mt-8"
              >
                Lists
              </span>
              <span
                class="text-2xl font-semibold inline-block py-3 px-3 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-8 mt-8"
              >
                Hidden Follower Count
              </span>
              <span
                class="text-2xl font-semibold inline-block py-3 px-3 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-8 mt-8"
              >
                Profile Options
              </span>
              <span
                class="text-2xl font-semibold inline-block py-3 px-3 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-8 mt-8"
              >
                More on the way...!
              </span>
            </div>

        </div>
      </div>

      <div class="root">
          <button @click="isOpen = true">Open</button>
          <div v-if="isOpen" class="modal">
            <button @click="isOpen = false">Close</button>
          </div>
      </div>



    <a href="https://www.buymeacoffee.com/openspace.social" target="_blank" class="md:absolute bottom-0 right-0 p-4 float-right animate-bounce" style="z-index: 1; position:fixed;">
      <img src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg" alt="Buy Me A Coffee" class="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white">
</a>
      </section>
    <footer-component />
  </div>
</template>

<style>
.root {
    position: relative;
}

.modal {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rdba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
        border-color: red;

}

.modal > div {
    background-color: #000000;
    padding: 50px;
    border-radius: 10px;
    border-color: red;
}
</style>
<script>

import { ref } from 'vue'

import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";

import patternVue from "@/assets/img/patterns/Linth.png";
import componentBtn from "@/assets/img/component-btn.png";
import componentProfileCard from "@/assets/img/component-profile-card.png";
import componentInfoCard from "@/assets/img/component-info-card.png";
import componentInfo2 from "@/assets/img/component-info-2.png";
import componentMenu from "@/assets/img/component-menu.png";
import componentBtnPink from "@/assets/img/component-btn-pink.png";
import documentation from "@/assets/img/documentation.png";
import login from "@/assets/img/login.jpg";
import profile from "@/assets/img/profile.jpg";
import landing from "@/assets/img/landing.jpg";

const isOpen = ref(false)

export default {
  data() {
    return {
      patternVue,
      componentBtn,
      componentProfileCard,
      componentInfoCard,
      componentInfo2,
      componentMenu,
      componentBtnPink,
      documentation,
      login,
      profile,
      landing,
      isOpen,
    };
  },
  components: {
    IndexNavbar,
    FooterComponent,
  },
  theme: {
    extend: {
        fontFamily: {
            inter: ['Inter', 'sans-serif'],
            caveat: ['Caveat', 'cursive'],
        },
    },
  },
};
</script>
