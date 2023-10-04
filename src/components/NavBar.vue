<!-- AppNavbar.vue -->
<template>
    <div class="navbar">
      <div class="logo">
        <router-link to="/"> <!-- Use Vue Router to navigate to the main page -->
          <img src="../assets/logo.png" alt="Logo" class="logo-img" />
        </router-link>
      </div>
      <div class="name">Gauthier GENDREAU</div>
      <div class="buttons">
        <router-link to="/academic">Academic Projects</router-link>
        <router-link to="/hobby">Hobbies</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  };
  </script>
  
  <style scoped>
  /* Add your CSS styles for the navbar here */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    padding-right: 30px;
    background-color: #333;
    color: #fff;
  }
  
  .logo {
    display: flex;
    align-items: center; /* Center the logo vertically */
  }
  
  .logo-img {
    max-width: 40px;
  }
  
  .name {
    font-size: 1.2em;
    font-weight: bold;
  }
  
  .buttons {
    display: flex;
    gap: 20px;
  }
  
  .buttons a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
  }
  </style>
  