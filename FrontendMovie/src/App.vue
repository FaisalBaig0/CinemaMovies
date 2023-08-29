<template>
  
  <router-view />
</template>
<script>
export default {
  name: "App",
};
</script>

<style>

.nav-icon {
  font-size: 24px;
  color: #fff; 
  margin-right: 8px; 
}

.home-icon {
  color: #d11919; 
}
#app {
  font-family: "Times New Roman", serif, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav-link {
  font-size: 2rem;
  font-weight: 600;
  color: white;
  text-decoration: none;
  position: relative; /* To position the line relative to the link */
  transition: color 0.3s; /* Smooth transition effect */
}

.nav-link:hover {
  color: white;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -5px; /* Adjust this value as needed */
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #66b6e4; /* Line color */
  transform: scaleX(0); /* Initially hide the line */
  transform-origin: left;
  transition: transform 0.3s;
}

.nav-link:hover::after {
  transform: scaleX(1); /* Show the line on hover */
}

.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
}
</style>
