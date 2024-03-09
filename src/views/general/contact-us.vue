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
              Contact Us
            </h2>
              <div class="text-sm text-gray-600 mb-6">
                If you want to get in contact with us, fill out the details below along with a brief message and we will get back to you as soon as possible!
              </div>

            <form action="/pages/success" method="POST" data-netlify="true">
                <div class="fields">
                    <div class="field half">
                        <input type="text" name="name" id="name" placeholder="Name" />
                    </div>
                    <div class="field half">
                        <input type="text" name="email" id="email" placeholder="Email" />
                    </div>
                    <div class="field">
                        <textarea name="message" id="message" placeholder="Message" rows="7"></textarea>
                    </div>
                    <div class="field">
                        <div data-netlify-recaptcha="true">
                        </div>
                    </div>
                </div>
                <ul class="actions">
                    <li>
                        <input type="submit" value="Send Message" class="button primary" />
                    </li>
                </ul>
            </form>

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
