<!-- SlideTmpl.vue -->
<template>
  <div class="slide-tmpl">
      <img :src="imagePath" alt="Slide Image" class="full-image" />
    <h2 class="slide-title" :style="{color: titlecolor}">{{ title }}</h2>
    <p class="slidecap">{{ caption }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    imagePath: String,
    caption: String,
    titlecolor: String,
  },
};
</script>

<style scoped>
/* Add your CSS styles for the slide template here */
.slide-tmpl {
  color: white;
  position: relative;
  text-align: center;
  overflow: hidden; /* Ensure the image doesn't overflow the container */
  aspect-ratio: 1;
}

/* Style the image container */
.image-container {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Style the image to be fullscreen */
.full-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Maintain aspect ratio and cover the entire container */
}

/* Style the title */
.slide-title {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  padding: 10px;
  margin: 0;
  font-size: 3em;
  background-color: hsla(0, 0%, 0%, 0.25);
}

.slidecap {
  position: absolute;
  bottom: 0; /* Adjust this value as needed */
  background-color: transparent; /* Set the background color to transparent */
  margin: 0;
  padding: 10px;
  font-size: 1.5em;
  background-color: hsla(0, 0%, 0%, 0.25);
}

.reflection {
  position: absolute;
  bottom: -50%; /* Adjust the reflection position as needed */
  left: 0;
  right: 0;
  height: 50%; /* Height of the reflection */
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0));
  transform: scaleY(-1); /* Flip the reflection content vertically */
  opacity: 0.7; /* Adjust the opacity of the reflection */
}

</style>
