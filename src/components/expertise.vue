<template>
  <section class="p-6 bg-white shadow-sm relative overflow-hidden  overflow-ellipsis rounded-lg max-h-64 h-64">
    <div class="flex pb-4  flex-row">
      <div
          class="
              mr-4
              md:mr-6
              rounded-lg
              h-16
              flex
              justify-center
              w-16
            " :class="expertise.color"
      >
        <i class="my-auto scale-150 transform">
          <svg width="24" height="24" viewBox="0 0 24 24" :color="expertise.fill" :fill="expertise.fill">
            <path
                :d="expertise.logo"
            />
          </svg>
        </i>

      </div>
      <div class="font-bold pt-2 md:pt-0 text-xl text-left my-auto">
        {{ expertise.title }}
      </div>
    </div>
    <div class="text-left  overflow-ellipsis">
      <p class="mb-4 overflow-ellipsis text-sm lg:text-base">
        <span class="font-bold">{{ expertise.tagline }}</span>
        {{ expertise.desc }}
      </p>
    </div>
    <div class="h-2 absolute bottom-0 left-0 w-full bg-white">a</div>
  </section>
</template>

<script>
export default {
  name: "expertise",
  props: ['expertise']
}
</script>

<style scoped>

</style>