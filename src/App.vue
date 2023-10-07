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
  z-index: 500;
  position: fixed;
  top: 0; /* Fix the navbar at the top of the viewport */
  left: 0;
  width: 100%; /* Make the navbar take the full width of the viewport */
  background-color: #333; /* Set background color of the navbar */
  color: white; /* Set text color of the navbar items */
  padding: 15px; /* Add padding to the navbar items for better visibility */
}

a { text-decoration: none; }

/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #8f54a0 #212121;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    background: linear-gradient(to bottom, #000000, #333333);
    
  }

  *::-webkit-scrollbar-thumb {
    background: linear-gradient(#812A89 0%, #FF6CDC 51%, #EFCA93 100%);
    border-radius: 10px;
    border: 3px none #ffffff;
  }
</style>
