<template>
  <div id="wrapper" class="bg-gray-200 box-border  font-sans">
    <div class="w-full">
      <div id="" class="md:container  md:relative bg-white md:bg-transparent px-4 lg:px-16 md:mx-auto py-6 lg:py-12">
        <Navbar></Navbar>
      </div>
      <router-view/>
      <div @click="top" class="fixed cursor-pointer hover:shadow-xl shadow-md bg-white p-3 rounded-full right-0 m-2 bottom-0">
        <svg height="24" viewBox="0 0 24 24" width="24">
          <path d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"/>
        </svg>
      </div>
    </div>
  </div>


</template>

<style>
#wrapper {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #130f49;

}

</style>
<script>
import Navbar from "./components/Navbar";

export default {
  components: {Navbar},
  methods: {
    top(){
      window.scrollTo({top:0, behavior:"smooth"})
    }
  }
}
</script>