<template>
  <div class="flex flex-row">
    <div class="flex flex-col">
      <div class="pt-24 space-x-3 max-w-md">
        <h1 class="text-8xl text-left font-bold text-indigo-900">
          Hey, I'm a software developer
        </h1>
      </div>
      <p class="max-w-md pt-6 text-left">
        Hi, I'm Promise a freelance web designer/developer from Ghana. I help
        brands turn their ideas into high quality products.
      </p>
      <div class="text-left py-4">
        <input type="email" name="" id="" class="py-4 bg-gray-200 px-4  focus-within:border-indigo-900 focus:border-indigo-900 rounded-lg" placeholder="Email Address">
        <input type="button" value="Subscribe" class="py-4 px-4 text-white bg-indigo-500 rounded-xl -ml-5">
      </div>
      <div class="text-sm text-left opacity-70">
        <p class="">Join my newsletter and get free strategy!</p>
      </div>
    </div>
    <div class="text-right overflow-hidden flex-grow   justify-end">
      <div
        class="
          bg-blue-100
          h-auto
          py-12
        
          rounded-tl-full rounded-bl-full rounded-br-full
        "
      >

      <img
        src="/promise-as-hero.png"
        alt="Promise Hero"
        class="max-h-96 max-w-96 bg-cover object-contain transform scale-150"
        width="100%"
        
      />
      </div>

    </div>
  </div>
  <div class="py-6">
    <div class="text-center text-gray-400 uppercase">My Skills</div>
    <div class="text-6xl font-medium">
      My Expertise
    </div>
  </div>

<div class="grid grid-cols-2 gap-4">
  <div class="p-6 bg-gray-300 shadow-sm rounded-lg">
      <div class="flex pb-6 flex-row">
        <div class="mr-6 rounded-full bg-purple-200 h-16 flex justify-center w-16">
          <img src="/strategies.svg" alt="Strategies icon" class="">
        </div>
        <div class="font-bold text-xl my-auto">Strategy & Direction</div>
      </div>
      <div class="text-left">
        <p>
          <span class="font-bold">Understant First.</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe consequuntur repellendus dignissimos perspiciatis aperiam reiciendis voluptates, quos provident? Repudiandae porro quam aperiam earum nulla quos cum adipisci. Illo, soluta!
        </p>
      </div>
    </div>
  
  
    <div class="p-4">
      <div class="flex flex-row">
        <div class="logo mr-4">Logo</div>
        <div class="">Strategy & Direction</div>
      </div>
      <div class="">
        <p>
          <span class="font-medium">Understant First.</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe consequuntur repellendus dignissimos perspiciatis aperiam reiciendis voluptates, quos provident? Repudiandae porro quam aperiam earum nulla quos cum adipisci. Illo, soluta!
        </p>
      </div>
    </div>
  
</div>
  
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
