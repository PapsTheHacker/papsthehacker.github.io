<template>
  <div class="">
    <div class="">
      <div
          :style="{backgroundImage: project.image}"
          class="
            md:h-72 h-60
bg-cover shadow-xl
pa-10
            rounded-2xl
            relative
            overflow-hidden
          "
      >
        <div
            class="
              bg-blue-500
              h-full opacity-0
              hover:opacity-90
              bg-transparent
              flex flex-col transition duration-500
              justify-center
              ease-in-out bg-cover
              overflow-hidden
              rounded-2xl

            "

        >
          <div class="text-xl md:text-2xl text-white text-center pb-4">{{ project.name }}</div>
          <button
              class="
                ring-2
                text-pink-500
                ring-pink-500
                hover:bg-pink-200
                max-w-max
                text-center
                mx-auto
                rounded-lg
                p-2
                text-lg
              "
              type="submit"
          >
            See on Dribbble
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "project",
  props: ['project']
}
</script>

<style scoped>

</style>