<template>
<div class="bg-gray-200 box-border pb-32 font-sans" id="wrapper">
  <div class="">
    <div id="" class="container px-16 mx-auto py-12">
      <Navbar></Navbar>
    </div>
    <router-view/>
  </div>
</div>


</template>

<style>
#wrapper {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

</style>
<script>
import Navbar from "./components/Navbar";
export default {
  components: {Navbar}
}
</script>