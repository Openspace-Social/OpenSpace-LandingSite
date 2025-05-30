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
              Standards Against Child Sexual Abuse and Exploitation (CSAE)
            </h2>
            <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
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
              Standards Against Child Sexual Abuse and Exploitation (CSAE)
            </h3>
            <div class="text-lg font-light leading-relaxed mt-8 mb-4 text-blueGray-600">
                <p>
                Standards Against Child Sexual Abuse and Exploitation (CSAE)<br /><br />

                1. Introduction<br />
                Openspace is committed to maintaining a safe and secure platform that protects children from exploitation, abuse, and harm. We strictly prohibit any form of Child Sexual Abuse and Exploitation (CSAE) and take all necessary steps to prevent, detect, and report such content and activity on our platform.
<br /><br />

                2. Zero-Tolerance Policy on Child Sexual Abuse Material (CSAM)<br />
                Openspace enforces a zero-tolerance policy against Child Sexual Abuse Material (CSAM). This includes but is not limited to:
<br />
                Any content that depicts, encourages, or facilitates child sexual abuse or exploitation.
<br />
                Any attempt to groom, solicit, or engage minors in inappropriate conversations or activities.
<br />
                The sharing, storage, or transmission of CSAM in any form.
<br />
                The use of the platform for the recruitment or facilitation of child trafficking or exploitation.
<br /><br />

                3. Proactive Detection and Reporting
<br />
                To ensure compliance and prevent CSAE, Openspace implements the following measures:
<br />

                Automated Scanning & Moderation: We use AI-driven and manual review processes to detect and remove any content that violates child safety policies.
<br />
                User Reporting Mechanisms: Users can report any suspected CSAE content directly within the app, which will be reviewed and actioned promptly.
<br />
                Collaboration with Law Enforcement: We cooperate with global law enforcement agencies and organizations like the National Center for Missing and Exploited Children (NCMEC) to report and act on any CSAM-related incidents.
<br />
                Strict Content Moderation: All user-generated content (UGC) is subject to review by our trust and safety team to identify and remove any harmful material.
<br /><br />

                4. Compliance with Child Safety Laws
<br />
                Openspace adheres to all relevant local and international child protection laws, including:
<br />

                Canada’s proposed Online Harms Act (Bill C-63)
<br />
                Canada’s proposed Protecting Young Persons from Exposure to Pornography Act (Bill S-210)
<br />
                The U.S. Children’s Online Privacy Protection Act (COPPA)
<br />
                The U.K. Online Safety Act
<br />
                The EU General Data Protection Regulation (GDPR) for children
<br />
                Other applicable laws that mandate the protection of children online
<br /><br />

                5. User Guidelines & Enforcement
<br />
                To ensure the safety of minors, the following user guidelines are enforced:
<br />

                Age Restrictions: Openspace is not intended for users under the age of 13. Users found to be underage will have their accounts suspended.
<br />
                Strict Community Standards: Any content involving minors must comply with our safety policies and will be subject to moderation.
<br />
                Account Suspension & Reporting: Users engaging in CSAE-related activities will be permanently banned and reported to authorities.
<br /><br />

                6. Dedicated Child Safety Contact
<br />
                For any child safety concerns, authorities, parents, or users can contact our dedicated Child Safety Team at admin@openspacelive.com.
<br /><br />

                7. Ongoing Commitment to Safety
<br />
                Openspace continuously updates and strengthens its child protection measures in alignment with best practices and regulatory requirements. We work with child safety experts and advocacy groups to improve our policies and detection mechanisms.
<br /><br />

                Last Updated: May 30, 2025
<br />
                </p>
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

import patternVue from "@/assets/img/patterns/Rangitikei.png";
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
