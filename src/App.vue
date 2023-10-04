<template>
  <div id="app">
    <div class="navbarapp">
    <NavBar/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {

  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

body, html{
  background: linear-gradient(to bottom, #000000, #333333); 
}

.navbarapp{
  position: fixed;
  top: 0; /* Fix the navbar at the top of the viewport */
  left: 0;
  width: 100%; /* Make the navbar take the full width of the viewport */
  background-color: #333; /* Set background color of the navbar */
  color: white; /* Set text color of the navbar items */
  padding: 15px; /* Add padding to the navbar items for better visibility */
}
</style>
