<template>
  <div>
    <div v-for="blog in blogs" :key="blog.slug" class="">
      <blog :blog="blog"></blog>
    </div>
  </div>
</template>

<script>
import Blog from "../components/blog";

export default {
  name: "Blogs",
  components: {Blog},
  data() {
    return {
      blogs: [{
        title: '',
        slug: this.title
      }]
    }
  },
}
</script>

<style scoped>

</style>