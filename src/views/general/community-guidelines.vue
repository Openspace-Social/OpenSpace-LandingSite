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
              Community Guidelines
            </h2>
            <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
              Welcome to Openspace! We are excited to have you as a part of our vibrant and diverse community. To ensure a safe and enjoyable experience for everyone, we have established these Community Guidelines. Please take a moment to familiarize yourself with them, as violation of these guidelines may result in penalties, including account suspension or termination.
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
          <div class="w-full md:w-10/12 px-12 md:px-4 ml-auto mr-auto mt-48">
            <div
              class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
            >
              <i class="fas fa-gavel text-xl"></i>
            </div>
            <h3 class="text-3xl mb-2 font-semibold leading-normal">
              Respect and Kindness
            </h3>
            <p
              class="text-lg font-light leading-relaxed mt-8 mb-4 text-blueGray-600"
            >
              Treat others as you would like to be treated. Respect the opinions, beliefs, and experiences of fellow users. Harassment, bullying, hate speech, discrimination, or any form of offensive behavior will not be tolerated.
            </p>
            <div
              class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
            >
              <i class="fas fa-gavel text-xl"></i>
            </div>
            <h3 class="text-3xl mb-2 font-semibold leading-normal">
              Privacy and Personal Information
            </h3>
            <p
              class="text-lg font-light leading-relaxed mt-8 mb-4 text-blueGray-600"
            >
                Protect the privacy of others and yourself. Do not share personal information, such as addresses, phone numbers, or financial details, publicly on the platform. Be cautious while sharing any sensitive information in private messages.
            </p>
            <div
              class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
            >
              <i class="fas fa-gavel text-xl"></i>
            </div>
            <h3 class="text-3xl mb-2 font-semibold leading-normal">
              Content Integrity
            </h3>
            <p
              class="text-lg font-light leading-relaxed mt-8 mb-4 text-blueGray-600"
            >
                Only post content that you have the right to share. Respect copyright and intellectual property laws. Do not engage in the dissemination of false information, misleading content, or spam.
            </p>
            <div
              class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
            >
              <i class="fas fa-gavel text-xl"></i>
            </div>
            <h3 class="text-3xl mb-2 font-semibold leading-normal">
              Nudity, Violence, and Inappropriate Content
            </h3>
            <p
              class="text-lg font-light leading-relaxed mt-8 mb-4 text-blueGray-600"
            >
                Openspace is a platform for users of all ages. Any content featuring explicit nudity, violence, graphic or adult material, or that is otherwise inappropriate, will be removed.
            </p>
            <div
              class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
            >
              <i class="fas fa-gavel text-xl"></i>
            </div>
            <h3 class="text-3xl mb-2 font-semibold leading-normal">
              Illegal Activities
            </h3>
            <p
              class="text-lg font-light leading-relaxed mt-8 mb-4 text-blueGray-600"
            >
                Do not use Openspace for promoting, organizing, or engaging in any illegal activities. This includes but is not limited to harassment, threats, drug trafficking, and any form of terrorism.
            </p>
            <div
              class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
            >
              <i class="fas fa-gavel text-xl"></i>
            </div>
            <h3 class="text-3xl mb-2 font-semibold leading-normal">
              Impersonation
            </h3>
            <p
              class="text-lg font-light leading-relaxed mt-8 mb-4 text-blueGray-600"
            >
                Do not impersonate other individuals, organizations, or public figures. Be yourself and use your real identity on the platform.
            </p>
            <div
              class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
            >
              <i class="fas fa-gavel text-xl"></i>
            </div>
            <h3 class="text-3xl mb-2 font-semibold leading-normal">
              Reporting and Moderation
            </h3>
            <p
              class="text-lg font-light leading-relaxed mt-8 mb-4 text-blueGray-600"
            >
                If you encounter content or behavior that violates our guidelines, please report it immediately. Our moderation team will review the reported content and take appropriate actions.
            </p>
            <div
              class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
            >
              <i class="fas fa-gavel text-xl"></i>
            </div>
            <h3 class="text-3xl mb-2 font-semibold leading-normal">
              Minors
            </h3>
            <p
              class="text-lg font-light leading-relaxed mt-8 mb-4 text-blueGray-600"
            >
                Users under the age of 13 are not permitted on Openspace. If you are between 13 and 17 years old, please ensure you have parental consent before using the platform.
            </p>
            <div
              class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
            >
              <i class="fas fa-gavel text-xl"></i>
            </div>
            <h3 class="text-3xl mb-2 font-semibold leading-normal">
              Multiple Accounts
            </h3>
            <p
              class="text-lg font-light leading-relaxed mt-8 mb-4 text-blueGray-600"
            >
                Creating multiple accounts for deceptive purposes or to evade penalties is not allowed.
            </p>
            <div
              class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
            >
              <i class="fas fa-gavel text-xl"></i>
            </div>
            <h3 class="text-3xl mb-2 font-semibold leading-normal">
              Commercial Activities
            </h3>
            <p
              class="text-lg font-light leading-relaxed mt-8 mb-4 text-blueGray-600"
            >
                Avoid using Openspace solely for commercial purposes, such as excessive advertising or spamming. Use designated channels or features for promoting products and services.
            </p>
            <div
              class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
            >
              <i class="fas fa-gavel text-xl"></i>
            </div>
            <h3 class="text-3xl mb-2 font-semibold leading-normal">
              Abuse of Features
            </h3>
            <p
              class="text-lg font-light leading-relaxed mt-8 mb-4 text-blueGray-600"
            >
                Do not misuse any features or functionalities of Openspace to cause inconvenience or harm to other users or the platform itself.
            </p>
            <div
              class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
            >
              <i class="fas fa-gavel text-xl"></i>
            </div>
            <h3 class="text-3xl mb-2 font-semibold leading-normal">
              Resolving Conflicts
            </h3>
            <p
              class="text-lg font-light leading-relaxed mt-8 mb-4 text-blueGray-600"
            >
                If you have disagreements or conflicts with other users, try to resolve them in a respectful manner. If necessary, contact our support team for assistance.
            </p>
            <div
              class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
            >
              <i class="fas fa-gavel text-xl"></i>
            </div>
            <h3 class="text-3xl mb-2 font-semibold leading-normal">
              Follow Local Laws and Regulations
            </h3>
            <p
              class="text-lg font-light leading-relaxed mt-8 mb-4 text-blueGray-600"
            >
                Abide by the laws and regulations of your country and jurisdiction while using Openspace.
            </p>

            <p
              class="text-lg font-light leading-relaxed mt-8 mb-4 text-blueGray-600"
            >
                Remember, Openspace is all about creating a positive and inclusive space for our community to connect, share, and learn. By following these guidelines, you contribute to building a thriving and respectful environment for everyone. Thank you for being a part of Openspace!
            </p>

            <p
              class="text-lg font-light leading-relaxed mt-8 mb-4 text-blueGray-600"
            >
                Catch any rule breakers or have any questions? Contact us <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold text-lg" href="/general/contact-us">HERE</a>.
            </p>
          </div>
        </div>
      </div>
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
};
</script>
