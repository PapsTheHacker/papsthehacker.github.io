<template>
<div class="bg-gray-200  min-h-screen min-w-full">
  <div class="bg-gray-200">
    <div id="" class="container px-16 mx-auto py-12">
      <Navbar></Navbar>
    </div>
    <router-view/>
  </div>
</div>


</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import Navbar from "./components/Navbar";
export default {
  components: {Navbar}
}
</script>