<template>
  <footer class="relative bg-blueGray-200 pt-8 pb-6">
    <div
      class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
          class="text-blueGray-200 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap text-center lg:text-left">
        <div class="w-full lg:w-6/12 px-4">
          <h4 class="text-3xl font-semibold">Let's keep in touch!</h4>
          <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
            Find us on any of these platforms, we will respond within 1 business day.
          </h5>
          <div class="mt-6 lg:mb-0 mb-6">

            <button
              class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
                <a
                    class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
                    href="https://www.linkedin.com/company/openspacesocial/"
                    target="_blank"
                >
                    <i class="text-blueGray-400 fab fa-linkedin text-lg leading-lg" />
                </a>
            </button>
            <button
              class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
                <a
                  class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.instagram.com/openspace.social"
                  target="_blank"
                >
                  <i class="text-blueGray-400 fab fa-instagram text-lg leading-lg" />
                </a>
            </button>
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-4/12 px-4 ml-auto">
              <span
                class="block uppercase text-blueGray-500 text-sm font-semibold mb-2"
              >
                Useful Links
              </span>
              <ul class="list-unstyled">
                <li>
                  <router-link
                    to="/general/csae"
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  >
                    CSAE
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/general/terms-of-service"
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  >
                    Terms of Service
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/general/community-guidelines"
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  >
                    Community Guidelines
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/general/privacy-policy"
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  >
                    Privacy Policy
                  </router-link>
                </li>
                <li>
                  <a
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://www.buymeacoffee.com/openspace.social/posts"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-full lg:w-4/12 px-4">
              <span
                class="block uppercase text-blueGray-500 text-sm font-semibold mb-2"
              >
                Other Resources
              </span>
              <ul class="list-unstyled">
                <li>
                  <router-link
                    to="/contribute/contribute"
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  >
                    How To Contribute
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/contribute/donate"
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  >
                    Make A Donation
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/general/contact-us"
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  >
                    Contact Us
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-blueGray-300" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-blueGray-500 font-semibold py-1">
            Copyright © {{ date }}
            <a
              href="https://www.openspace.social"
              class="text-blueGray-500 hover:text-blueGray-800"
            >
              Openspace.Social
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>
