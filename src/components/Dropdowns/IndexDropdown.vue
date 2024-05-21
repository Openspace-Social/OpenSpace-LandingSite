<template>
  <div>
    <a
      class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-lg uppercase font-bold"
      href="#"
      ref="btnDropdownRef"
      v-on:click="toggleDropdown($event)"
    >
        <i class="fas fa-solid fa-bars not-italic mr-2"></i>Menu
    </a>
    <div
      ref="popoverDropdownRef"
      class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
    >
      <span
        class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
      >
        General Info
      </span>
      <router-link
        to="/"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        Home
      </router-link>
      <router-link
        to="/general/about-us"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        About Us
      </router-link>
      <router-link
        to="/general/contact-us"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        Sign-up / Contact Us
      </router-link>
      <router-link
        to="/general/why-us"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        Why Us
      </router-link>


      <div class="h-0 mx-4 my-2 border border-solid border-blueGray-100" />

      <span
        class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
      >
        Platform Roadmap
      </span>
      <router-link
        to="/roadmap/whats-next"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        Whats next
      </router-link>
    </div>
  </div>
</template>
<script>
import { createPopper } from "@popperjs/core";

export default {
  data() {
    return {
      dropdownPopoverShow: false,
    };
  },
  methods: {
    toggleDropdown: function (event) {
      event.preventDefault();
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
      }
    },
  },
};
</script>
