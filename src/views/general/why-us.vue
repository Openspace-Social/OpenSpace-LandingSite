<template>
  <div>
    <index-navbar />
    <section
      class="header relative pt-16 items-center flex h-screen max-h-860-px"
    >
      <div class="container mx-auto items-center flex flex-wrap">
        <div class="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
          <div class="pt-32 sm:pt-0">
            <h2 class="font-semibold text-4xl text-blueGray-600">
              Why Us
            </h2>
            <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
            Community centered, privacy focused, socially responsible, ethical social media
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
        style="transform: translateZ(0);"
      >
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
          <div class="w-full md:w-10/12 px-12 md:px-4 ml-auto mr-auto mt-32">
            <div
                class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
              >
                <i class="fas fa-gavel text-xl"></i>
            </div>
            <h3 class="text-3xl mb-2 font-semibold leading-normal">
              Why use alternative platforms such as Openspace.Social?
            </h3>
            <div class="text-lg font-light leading-relaxed mt-8 mb-4 text-blueGray-600">
            <p>
                In an era where personal data has become a commodity, the staggering extent to which mainstream social media platforms capture and monetize your information is cause for concern. The list below represents just a glimpse into the vast troves of data they collect, ranging from your interests and behaviors to your connections and preferences.<br><br>
                What sets Openspace.Social apart is the commitment to prioritizing user security. Unlike their mainstream counterparts, Openspace.Social does not exploit your data through targeted ads or collaborations with data brokers. The decision to entrust your personal information to a conglomerate inevitably exposes you to the looming threat of data breaches.<br><br>

                For more implications of data breeches, please view this article: <a style="color: blue" href="https://nordvpn.com/blog/facebook-data-leak/">Data breach puts 500 million users at risk</a><br>
                For more details on what mainstream platforms capture from you, please view this article: <a style="color: blue" href="https://nordvpn.com/blog/what-facebook-knows-about-me/">How much do they know about you?</a><br>
                <br>
            </p>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" class="px-3 py-3 bg-gray-50 dark:bg-gray-800">
                    Privacy Element
                </th>
                <th scope="col" class="px-6 py-3">
                    Mainstream Social Media
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Openspace.Social
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Full name
                </th>
                <td class="px-6 py-4">
                    <i class="fa fa-check"></i>
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    <i class="fa fa-check text-danger"></i>
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Places you&#39;ve studied
                </th>
                <td class="px-6 py-4">
                    <i class="fa fa-check"></i>
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    <i class="fa fa-times"></i>
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Places you&#39;ve worked
                </th>
                <td class="px-6 py-4">
                    <i class="fa fa-check"></i>
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    <i class="fa fa-times"></i>
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Places you&#39;ve lived
                </th>
                <td class="px-6 py-4">
                    <i class="fa fa-check"></i>
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    <i class="fa fa-times"></i>
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Email address
                </th>
                <td class="px-6 py-4">
                    <i class="fa fa-check"></i>
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    <i class="fa fa-check"></i>
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Phone numbers
                </th>
                <td class="px-6 py-4">
                    <i class="fa fa-check"></i>
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    <i class="fa fa-times"></i>
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Relationship Status
                </th>
                <td class="px-6 py-4">
                    <i class="fa fa-check"></i>
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    <i class="fa fa-times"></i>
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Gender or Sexual Orientation
                </th>
                <td class="px-6 py-4">
                    <i class="fa fa-check"></i>
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    <i class="fa fa-times"></i>
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Life events
                </th>
                <td class="px-6 py-4">
                    <i class="fa fa-check"></i>
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    <i class="fa fa-times"></i>
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Activities within the platform
                </th>
                <td class="px-6 py-4">
                    <i class="fa fa-check"></i>
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    <i class="fa fa-times"></i>
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Search history within the platform
                </th>
                <td class="px-6 py-4">
                    <i class="fa fa-check"></i>
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    <i class="fa fa-times"></i>
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Ads you interacted with
                </th>
                <td class="px-6 py-4">
                    <i class="fa fa-check"></i>
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    <i class="fa fa-times"></i>
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Credit card details
                </th>
                <td class="px-6 py-4">
                    <i class="fa fa-check"></i>
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    <i class="fa fa-times"></i>
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Companies can upload your data to maintream platforms
                </th>
                <td class="px-6 py-4">
                    <i class="fa fa-check"></i>
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    <i class="fa fa-times"></i>
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Voice recordings and transcriptions
                </th>
                <td class="px-6 py-4">
                    <i class="fa fa-check"></i>
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    <i class="fa fa-times"></i>
                </td>
            </tr>
        </tbody>
    </table>
</div>

            </div>
          </div>
      </div>
    </div>
    <a href="https://www.buymeacoffee.com/openspace.social" target="_blank" class="md:absolute bottom-0 right-0 p-4 float-right animate-bounce" style="z-index: 1; position:fixed;">
      <img src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg" alt="Buy Me A Coffee" class="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white">
</a>
      </section>
    <footer-component />
  </div>
</template>
<script>
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
