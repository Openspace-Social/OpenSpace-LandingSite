<template>
  <div>
    <index-navbar />
    <section
      class="header relative pt-16 items-center flex h-screen max-h-860-px"
    >
      <div class="container mx-auto items-center flex flex-wrap">
        <div class="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
          <div class="pt-32 sm:pt-0">
            <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
            </p>
            <div class="p-4">
              <h2 class="font-semibold text-4xl text-blueGray-600">
              Request a sign-up token by using the form below
              </h2>
              <div class="text-sm text-gray-600 mb-6">
                If you want to signup to Openspace for the web, please fill out the details below along with a brief message and we will get back to you as soon as possible!
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        class="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
        :src="patternVue"
        alt="..."
      />
      <a href="https://www.buymeacoffee.com/openspace.social" target="_blank" class="md:absolute bottom-0 right-0 p-4 float-right animate-bounce" style="z-index: 1; position:fixed;">
      <img src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg" alt="Buy Me A Coffee" class="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white">
</a>
    </section>
    <section>

      <div class="container mx-auto overflow-hidden pb-20">
        <div class="flex flex-wrap items-center">
          <div class="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-28">

            <!-- component -->
            <div class="flex items-center justify-center p-12">
              <div class="mx-auto w-full max-w-[550px]">
                <form name="Contact-Us" method="POST" netlify-honeypot="bot-field" data-netlify="true" action="/general/thanks/">
                    <input type="hidden" name="form-name" value="Contact-Us" />
                    <input type="hidden" name="subject" value="Email inquiry from Openspace.Social" />
                    <p hidden class="hidden">
                    <label>
                      Don’t fill this out if you’re human: <input name="bot-field" />
                    </label>
                  </p>
                  <div class="mb-5">
                    <p>
                        <label class="mb-3 block text-base font-medium text-[#07074D]">Your Name: <input type="text" name="name" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" /></label>
                    </p>
                  </div>
                  <div class="mb-5">
                    <p>
                      <label class="mb-3 block text-base font-medium text-[#07074D]">Your Email: <input type="email" name="email" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" /></label>
                    </p>
                  </div>
                  <div class="mb-5">
                    <p>
                        <label class="mb-3 block text-base font-medium text-[#07074D]">Message: <textarea name="message" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></textarea></label>
                    </p>
                  </div>
                  <div>
                      <p>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">SEND</button>
                      </p>
                  </div>
                </form>
              </div>
            </div>

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

import patternVue from "@/assets/img/patterns/ill_header2.png";
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
