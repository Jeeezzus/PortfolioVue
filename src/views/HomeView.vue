<template>
  <div class="home">
  <div class="carou">
  <carousel-3d :controls-visible="true" :controls-prev-html="'&#10092; '" :controls-next-html="'&#10093;'" 
               :controls-width="40" :controls-height="80" :height="heightInPixels" :width="heightInPixels*1.75" :display="5" :autoplay="true" :autoplay-timeout="4000">
  <slide :index="0" class="slide">
    <SlideTmplWhite title="InMoov and Jasper" routerPath='/dvb' caption='Development then project management for DavinciBot in the creation of the humanoid robots "InMoov" and "JASPER"' image-path="/DVB/InMoov_Working.png" textcolor="white"/>
  </slide>
  <slide :index="1" class="slide">
    <SlideTmplWhite title="ExoTouch haptic gloves" routerPath='/exotouch' caption='Creation of haptic gloves with force feedback for virtual reality, DIY and inexpensive.' image-path="/ExoTouch/ExoTouchV3.jpeg" textcolor="white"/>
  </slide>
  <slide :index="2" class="slide">
    <SlideTmplWhite title="Robotic haptic interface" routerPath='/rhim' caption='Encounter-type haptic robots for desk-size environnement exploration in virtual reality' image-path="/Internship/SDV1.PNG" textcolor="white"/>
  </slide>
  <slide :index="3" class="slide">
    <SlideTmplWhite title="Environnemental haptic suit (WIP)" routerPath='/hapticsuit' caption='Creation of a haptic suit for environmental thermal feedback in virtual reality. Ongoing project.' image-path="/HapticSuit/ironman.png" textcolor="white"/>
  </slide>
  <slide :index="4" class="slide">
    <SlideTmplWhite title="HTML/CSS/JS developpement and self web hosting" routerPath='/web' caption='Creation of websites in HTML/CSS/Vue.js and implementation of network infrastructure to host web sites and services.' image-path="/Hosting/thumbnail.png" textcolor="white"/>
  </slide>
</carousel-3d>
  </div>
  </div>
</template>

<script>

import { Carousel3d, Slide } from 'vue-carousel-3d';
import SlideTmplWhite from '@/components/SlideTmplWhite.vue';

export default {
  data() {
    return {
      heightInPixels: 0,
    };
  },
  mounted() {
    // Calculate 70% of the viewport height in pixels
    const viewportHeight = window.innerHeight;
    this.heightInPixels = Math.floor(viewportHeight * 0.75);
  },
  components: {
    Carousel3d,
    Slide,
    SlideTmplWhite
  }
};
</script>

<style>

.custom-carousel {
  height: 100vh; 
}


.carou{
  position: relative;
  top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 500px;
  height: 800px;
  
  z-index:1000;
}

.home{
  height: 95vh;
  background: linear-gradient(to bottom, #333, #812A89); /* Dark stage gradient background */
  overflow: hidden;
}

.carousel-3d-controls, .prev, .next {
  color: #D88F00 !important;
}

.slide{
  /*box-shadow: 0px 5vh 5vh #bebebebe;*/
  border-radius: 20px;
  left: 10% !important;
  right: 10% !important;
  height: 80% !important;
  width: 80% !important;
  border: transparent;
}

@media (max-width: 750px) {
  .slide{
    height: 80vh !important;

  }

  .carou{
    top:10%;
  }

  .carousel-3d-container{
    height: 90vh !important;
  }
}
</style>