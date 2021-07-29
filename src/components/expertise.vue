<template>
  <section class="p-4 md:p-6 transition duration-500 bg-white md:bg-transparent hover:bg-white  relative overflow-hidden  overflow-ellipsis rounded-lg max-h-64 h-64">
    <div class="flex pb-4  flex-row">
      <div
          class="
              mr-4
              md:mr-6
              rounded-lg
              h-14 md:h-16
              flex
              justify-center
             w-14 md:w-16
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
      <div class="font-bold leading-tight  md:pt-0 text-lg md:text-xl text-left my-auto">
        {{ expertise.title }}
      </div>
    </div>
    <div class="text-left  overflow-clip">
      <p class="mb-4 overflow-ellipsis text-sm lg:text-base">
        <span class="font-bold">{{ expertise.tagline }}</span>
        {{ expertise.desc }} <span class="hidden md:block">{{expertise.extra !== null ? expertise.extra: ''}}</span>
      </p>
    </div>
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