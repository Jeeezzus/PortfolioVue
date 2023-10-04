<template>
  <div class="home">
  <div class="carou">
  <carousel-3d :controls-visible="true" :controls-prev-html="'&#10092; '" :controls-next-html="'&#10093;'" 
               :controls-width="30" :controls-height="60" :height="heightInPixels" :width="heightInPixels*1.75"  >
  <slide :index="0" class="slide">
    <router-link to="/DVB">
    <SlideTmplWhite title="InMoov and Jasper" caption='Development then project management for DavinciBot in the creation of the humanoid robots "InMoov" and "JASPER"' image-path="/DVB/InMoov_Working.png" textcolor="white"/>
    </router-link>
  </slide>
  <slide :index="1" class="slide">
    <router-link to="/ExoTouch">
    <SlideTmplWhite title="ExoTouch haptic gloves" caption='Creation of haptic gloves with force feedback for virtual reality, DIY and inexpensive.' image-path="/ExoTouch/ExoTouchV3.jpeg" textcolor="white"/>
    </router-link>
  </slide>
  <slide :index="2" class="slide">
    <router-link to="/RHIM">
    <SlideTmplWhite title="Robotic haptic interface" caption='Encounter-type haptic robots for desk-size environnement exploration in virtual reality' image-path="/Internship/SDV1.PNG" textcolor="white"/>
    </router-link>
  </slide>
  <slide :index="3" class="slide">
    <router-link to="/HapticSuit">
    <SlideTmplWhite title="Environnemental haptic suit (WIP)" caption='Creation of a haptic suit for environmental thermal feedback in virtual reality. Ongoing project.' image-path="/Internship/SDV1.PNG" textcolor="white"/>
    </router-link>
  </slide>
  <slide :index="4" class="slide">
    <router-link to="/Network">
    <SlideTmplWhite title="HTML/CSS/JS developpement and self web hosting" caption='Creation of websites in HTML/CSS/Vue.js and implementation of network infrastructure to host web sites and services.' image-path="/Hosting/thumbnail.png" textcolor="white"/>
    </router-link>
  </slide>
</carousel-3d>
  </div>
  </div>
</template>

<script>
/*:autoplay="true" :autoplay-timeout="4000"*/

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
  color: white !important;
}

.slide{
  /*box-shadow: 0px 5vh 5vh #bebebebe;*/
  border-radius: 20px;
  left: 10% !important;
  right: 10% !important;
  height: 80% !important;
  width: 80% !important;
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