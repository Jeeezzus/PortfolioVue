<!-- SlideTmpl.vue -->
<template>
  <div class="slide-tmpl">
    <div class="two-column-layout">
      <div class="column1">
        <img :src="imagePath" alt="Slide Image" class="full-image" />
      </div>
      <div class="column2">
        <h2 class="slide-title" :style="{color: titlecolor}">{{ title }}</h2>
      <p class="slidecap">{{ caption }}</p>
      <router-link :to="routerPath">
      <a class="btn btn-1">Hover me</a>
      </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    imagePath: String,
    caption: String,
    titlecolor: String,
    routerPath: String,
  },
};
</script>

<style scoped>
/* Add your CSS styles for the slide template here */
.slide-tmpl {
  color: white;
  background-color: #333;
  position: relative;
  text-align: justify;
  overflow: hidden; /* Ensure the image doesn't overflow the container */
}

/* Style the image container */
.image-container {
  object-fit: cover;
}

/* Style the image to be fullscreen */
.full-image {
  aspect-ratio: 1;
  object-fit: cover;
}

/* Style the title */
.slide-title {
  text-align: justify;
  background-color: transparent;
  margin: 0;
  font-size: 2.5em;
  background-color: hsla(0, 0%, 0%, 0.25);
}

.slidecap {
  background-color: transparent; /* Set the background color to transparent */
  margin-top: 10px;
  font-size: 1.25em;
  background-color: hsla(0, 0%, 0%, 0.25);
}

.two-column-layout {
  object-fit: cover;
  display: flex;
}

.column2 {

  flex: 10;
}

.column1 {
  flex: 15;
}

.btn {
 position: absolute;
  bottom: 30px;
  margin: 10px;
  padding: 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
 }

 .btn:hover {
  background-position: right center; /* change the direction of the change here */
}

.btn-1 {
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%);
}
@media (max-width: 750px) {
  .two-column-layout {
    flex-direction: column; /* Change to vertical layout */
    align-items: top; /* Center horizontally in vertical layout */
  }

  .slide-title{
    height: 80vh;
  }

  .slide-tmpl{
    height: 80vh;
  }

}
</style>
