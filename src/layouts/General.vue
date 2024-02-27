<template>
  <div>
    <index-navbar />
    <main>
        <div>
        <br><br>
        <p></p>
        <about-us />
        </div>
    </main>
    <footer-component />
  </div>
</template>
<script>
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";



export default {
  components: {
    IndexNavbar,
    FooterComponent,
  },
};
</script>
