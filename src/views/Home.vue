<template>
  <section class="container mx-auto px-16 ">
    <div class="grid grid-cols-2 gap-6">
      <div class="flex flex-col">
        <div class="pt-24 space-x-3 max-w-md">
          <h1 class="text-8xl text-left font-bold">
            Hey, I'm a <span class="text-indigo-900">software</span> developer<span class="rounded-full">.</span>
          </h1>
        </div>
        <p class="max-w-md pt-6 text-left">
          Hi, I'm Promise a freelance web designer/developer from Ghana. I help
          brands turn their ideas into high quality products
        </p>
        <div class="text-left flex flex-nowrap py-4">
          <input type="email" name="" id=""
                 class="py-4 bg-white px-4 w-full  border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-lg"
                 placeholder="Email Address">
          <button type="submit"
                  class="py-4 px-8 text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 bg-indigo-500 rounded-xl -ml-5">
            Subscribe
          </button>
        </div>
        <div class="text-sm text-left opacity-70">
          <p class="">🎉 Join my newsletter and get free strategies</p>
        </div>
      </div>

      <div class="m overflow-hidden   justify-end">
        <div
            class=" text-right
          bg-pink-300
          h-auto ml-auto
          py-12 w-3/4
        overflow-hidden
          rounded-tl-full rounded-bl-full rounded-br-full
        "
        >

          <img
              src="/promise-as-hero.png"
              alt="Promise Hero"
              class="h-96 w-full  bg-cover object-contain transform scale-150"
              width="100%"

          />
        </div>

      </div>
    </div>
    <div class="py-6">
      <div class="text-center text-gray-300 uppercase tracking-widest font-bold">My Skills</div>
      <div class="text-5xl font-bold">
        My Expertise
      </div>
    </div>

    <div class="grid grid-cols-2 gap-5">
      <section class="p-6 bg-white shadow-sm rounded-lg">
        <div class="flex pb-6 flex-row">
          <div class="mr-6 rounded-lg bg-blue-200 h-16 flex justify-center w-16">
            <img src="/strategies.svg" alt="Strategies icon" class="">
          </div>
          <div class="font-bold text-xl my-auto">Strategy & Direction</div>
        </div>
        <div class="text-left">
          <p>
            <span class="font-bold">Understand First.</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe consequuntur repellendus dignissimos
            perspiciatis aperiam reiciendis voluptates, quos provident? Repudiandae porro quam aperiam earum nulla quos
            cum adipisci. Illo, soluta!
          </p>
        </div>
      </section>

      <section class="p-6 bg-white shadow-sm rounded-lg">
        <div class="flex pb-6 flex-row">
          <div class="mr-6 rounded-lg bg-blue-200 h-16 flex justify-center w-16">
            <i class="my-auto scale-150 transform">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M15,14L21,17V7L15,10V14M9,14L3,17V7L9,10V14M10,10H14V14H10V10Z"/>
              </svg>
            </i>
          </div>
          <div class="font-bold text-xl my-auto">Branding & Logo</div>
        </div>
        <div class="text-left">
          <p>
            <span class="font-bold">Position the Brand.</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe consequuntur repellendus dignissimos
            perspiciatis aperiam reiciendis voluptates, quos provident? Repudiandae porro quam aperiam earum nulla quos
            cum adipisci. Illo, soluta!
          </p>
        </div>
      </section>

      <section class="p-6 bg-white shadow-sm rounded-lg">
        <div class="flex pb-6 flex-row">
          <div class="mr-6 rounded-lg bg-blue-200 h-16 flex justify-center w-16">
            <i class="my-auto transform scale-150">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                    d="M4,2C2.89,2 2,2.89 2,4V14H4V4H14V2H4M8,6C6.89,6 6,6.89 6,8V18H8V8H18V6H8M12,10C10.89,10 10,10.89 10,12V20C10,21.11 10.89,22 12,22H20C21.11,22 22,21.11 22,20V12C22,10.89 21.11,10 20,10H12Z"/>
              </svg>
            </i>
          </div>
          <div class="font-bold text-xl my-auto">Motion & Animation</div>
        </div>
        <div class="text-left">
          <p>
            <span class="font-bold">Communicate to all.</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe consequuntur repellendus dignissimos
            perspiciatis aperiam reiciendis voluptates, quos provident? Repudiandae porro quam aperiam earum nulla quos
            cum adipisci. Illo, soluta!
          </p>
        </div>
      </section>

      <section class="p-6 bg-white shadow-sm rounded-lg">
        <div class="flex pb-6 flex-row">
          <div class="mr-6 rounded-lg bg-indigo-200 h-16 flex justify-center w-16">
            <i class="text-center my-auto transform scale-150">
              <svg width="24" height="24" fill="indigo" viewBox="0 0 24 24">
                <path
                    d="M13,19V16H21V19H13M8.5,13L2.47,7H6.71L11.67,11.95C12.25,12.54 12.25,13.5 11.67,14.07L6.74,19H2.5L8.5,13Z"/>
              </svg>
            </i>
          </div>
          <div class="font-bold text-xl my-auto">Development</div>
        </div>
        <div class="text-left">
          <p>
            <span class="font-bold">Bringing work to life.</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe consequuntur repellendus dignissimos
            perspiciatis aperiam reiciendis voluptates, quos provident? Repudiandae porro quam aperiam earum nulla quos
            cum adipisci. Illo, soluta!
          </p>
        </div>
      </section>

    </div>

  </section>

  <div class="py-24 container mx-auto px-16">
    <div class="text-left  text-gray-400 font-bold tracking-widest">PORTFOLIO</div>
    <div class="text-5xl text-left font-bold py-3">All Creative Works</div>
    <div class="text-right font-medium -mt-12"><span class="bg-pink-500 p-2 text-white rounded-md">New</span> Discover
      all projects on <router-link to="https://dribbble.com" target="_blank" class="text-pink-500">Dribbble &rightarrow;</router-link>
    </div>
  </div>
  <div class="-mt-48">
    <div class="h-96 bg-red-100 w-3/4 ml-auto my-4 rounded-tl-3xl rounded-bl-3xl">

    </div>
  </div>
  
  <section>
    <div class="container mx-auto px-16 grid grid-cols-3 gap-6">
      <div class="">
        <div class="placeholder">1</div>
      </div>
      <div class="">2</div>
      <div class="">3</div>
      <div class="">4</div>
      <div class="">5</div>
      <div class="">6</div>
    </div>
    
  </section>

</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
