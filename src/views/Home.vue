<template>
  <section class="paps-container pt-6 md:pt-0 ">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="flex flex-col">
        <div class="lg:pt-14 w-full " data-aos="zoom-in" data-aos-easing="ease-in-out">
          <h1 class="text-4xl lg:text-8xl text-left  font-bold">
            Hey, I'm a
            <span class="text-black">software</span>
            developer<span
              class="rounded-full"
          >.</span
          >
          </h1>
        </div>
        <p class="md:max-w-md md:pt-6 text-left">
          {{ profile.intro }}
        </p>
        <div class="text-left flex flex-nowrap py-4">
          <input
              id=""
              class="
              lg:py-4
              bg-white
              px-2
              lg:px-4
              w-full
              border border-transparent
              focus:outline-none
              focus:ring-2 focus:ring-blue-600
              focus:border-transparent
              rounded-lg
            "
              name=""
              placeholder="Email Address"
              type="email"
          />
          <button
              class="
              lg:py-4
              py-2
              px-8
              text-white
              bg-blue-600
              hover:bg-blue-700
              focus:outline-none
              focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50
              bg-indigo-500
              rounded-lg
              -ml-5
            "
              type="submit"
          >
            Subscribe
          </button>
        </div>
        <div class="text-sm text-left opacity-70">
          <p class="">🎉 Join my newsletter and get free strategies</p>
        </div>
      </div>

      <div class="overflow-hidden hidden md:block justify-end">
        <div style="max-height: 28rem"
            class="
            text-right
            bg-blue-300
            h-auto
            md:mt-16
            ml-auto
             my-auto

            md:w-3/4
            overflow-hidden
            rounded-tl-full rounded-bl-full rounded-br-full
          "
        >
          <img
              id="image" alt="Promise Hero"
              class="w-full bg-cover h-full"
              src="/promise-as-hero.png"
              width="100%"
          />
        </div>
      </div>
    </div>
    <div class=" py-6 md:py-12">
      <div
          class="text-center text-sm text-gray-300 uppercase tracking-widest font-bold"
      >
        My Skills
      </div>
      <div id="my-experience" class="text-3xl md:text-5xl md:pb-10 text-center font-bold">My Expertise</div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 mb-6 md:mb-0 gap-5">
      <div v-for="expertise in expertises" :key="expertise.title" class="" data-aos="fade-up"
           data-aos-easing="ease-in-out">
        <expertise :expertise="expertise" class="max-w-lg"></expertise>
      </div>
    </div>
  </section>

  <section id="portfolio" class="bg-white pb-10 overflow-hidden">
    <div class="pb-12 lg:pb-16 mt-16 paps-container">
      <div class="text-left  text-gray-300 font-bold tracking-widest">
        PORTFOLIO
      </div>
      <div class="flex flex-col lg:flex-row  justify-between">
        <div class="text-xl md:text-3xl lg:pt-4 lg:text-5xl text-left font-bold">All Creative Works</div>
        <div class="text-left truncate text-xs lg:text-right md:text-sm font-medium pt-2 pb-1 lg:pt-4 ">
          <span class="bg-pink-500  mr-1 p-1 md:p-2  text-white rounded-md">New</span>
          Discover all projects on
          <a
              class="text-pink-500 ml-1"
              href="https://dribbble.com/papsthehacker"
              target="_blank"
          >Dribbble &rightarrow;
          </a
          >
        </div>
      </div>

    </div>
    <div class="-mt-48">
      <div
          class="h-96 bg-red-100 w-3/4 ml-auto my-4 rounded-tl-3xl rounded-bl-3xl"
      ></div>
    </div>

    <div class="overflow-hidden paps-container  -mt-64 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="project in projects" :key="project.name" class="overflow-hidden md:pb-6" data-aos="fade-right" data-aos-easing="ease-in-out">
        <project :project="project"></project>
      </div>
    </div>

  </section>
  <section id="about" class="overflow-hidden">

    <div class="relative  md:mt-16">
      <!--      <div class="w-2/3 bg-pink-100 h-screen  z-auto rounded-r-3xl"></div>-->
      <div class="w-full z-20">
        <div class="paps-container pt-10 md:pt-16 ">
          <div
              class="text-left uppercase text-gray-400 opacity-70 tracking-widest font-bold"
          >
            Nice to meet you.
          </div>

          <div class="flex justify-between" data-aos="fade-up" data-aos-easing="ease-out-cubic">
            <div class="flex-auto">
              <div class="pb-1 md:pb-4 text-left">
                <p class="text-2xl  lg:text-6xl font-bold ">
                  Hey, I'm Promise, software developer and designer
                </p>
              </div>
              <!--          region todo about me -->
              <div class="text-left  flex justify-between">
                <div class="flex opacity-70 flex-col">
                  <p class="pb-6 max-w-2xl ">
                    Hi, my name is Promise and I’m a fullstack web developer from
                    Ghana. I have over 2 years experience in building responsive SPAs and
                    shipping performant products. <br class="lg:hidden"> As a web developer, I enjoy using my obsessive
                    attention to detail, my
                    unequivocal love for making things, and my mission-driven work ethic to literally change the world.
                  </p>

                  <p class="hidden lg:block max-w-2xl">
                    I’ve always sought out opportunities and challenges that are meaningful to me. Although my
                    professional
                    path has taken many twists and turns, I've never stopped
                    engaging my passion to help others and solve problems.
                  </p>
                </div>
                <!--            <div :style="{backgroundImage: developerImage}" class="">

                            </div>-->

              </div>
              <!--          endregion-->
              <div class="my-4 flex flex-row">
                <img
                    alt="Author's Image"
                    class="rounded-full max-h-12 ring-2 ring-pink-500 p-1 h-12 w-12"
                    src="/promise-as-logo.jpg"
                />
                <div class="flex flex-col pl-5 text-left">
                  <p class="font-bold">Promise Atokple</p>
                  <p class="text-sm text-opacity-50 text-gray-800">
                    Fullstack Software Developer
                  </p>
                  <a class="flex" target="_blank" href="/resume.pdf">
                    <svg height="24" viewBox="0 0 24 24" width="24" fill-opacity=".5">
                      <path
                          d="M8,13H10.55V10H13.45V13H16L12,17L8,13M19.35,10.04C21.95,10.22 24,12.36 24,15A5,5 0 0,1 19,20H6A6,6 0 0,1 0,14C0,10.91 2.34,8.36 5.35,8.04C6.6,5.64 9.11,4 12,4C15.64,4 18.67,6.59 19.35,10.04M19,18A3,3 0 0,0 22,15C22,13.45 20.78,12.14 19.22,12.04L17.69,11.93L17.39,10.43C16.88,7.86 14.62,6 12,6C9.94,6 8.08,7.14 7.13,8.97L6.63,9.92L5.56,10.03C3.53,10.24 2,11.95 2,14A4,4 0 0,0 6,18H19Z"/>
                    </svg>
                    <span class="ml-2">Download my CV</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="hidden  lg:block">
              <div class="">
                <img alt="coding image" src="/images/coding.svg">
              </div>
            </div>
          </div>

          <div class="text-center lg:text-right" >
            <div class="text-2xl lg:text-5xl font-bold">Tech Stack</div>
          </div>
          <div class="py-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5" data-aos="fade-up" data-aos-easing="ease-in-out">
            <div class="tech-stack border border-red-200 shadow-lg" >

              <i class="text-center mx-auto transform scale-150">
                <svg fill="#F83F37" height="50" viewBox="0 0 24 24" width="50">
                  <path
                      d="M21.7 6.53C21.71 6.55 21.71 6.58 21.71 6.61V10.9C21.71 11 21.65 11.12 21.56 11.17L17.95 13.25V17.36C17.95 17.47 17.9 17.57 17.8 17.63L10.28 21.96C10.26 21.97 10.24 22 10.22 22L10.2 22C10.15 22 10.09 22 10.04 22C10.03 22 10 22 10 22C10 22 10 21.97 9.96 21.96L2.44 17.63C2.35 17.58 2.29 17.47 2.29 17.36V4.5C2.29 4.45 2.29 4.42 2.3 4.4C2.3 4.39 2.31 4.38 2.31 4.37C2.31 4.35 2.32 4.34 2.33 4.32C2.33 4.31 2.34 4.3 2.35 4.29C2.36 4.28 2.37 4.27 2.38 4.26C2.39 4.25 2.4 4.24 2.41 4.23C2.42 4.22 2.43 4.21 2.44 4.21L6.2 2.04C6.3 2 6.42 2 6.5 2.04L10.28 4.21H10.28C10.29 4.22 10.3 4.22 10.31 4.23C10.32 4.24 10.33 4.25 10.34 4.26C10.35 4.27 10.36 4.28 10.37 4.29C10.38 4.3 10.39 4.31 10.39 4.32C10.4 4.34 10.41 4.35 10.41 4.37C10.41 4.38 10.42 4.39 10.42 4.4C10.43 4.43 10.43 4.45 10.43 4.5V12.5L13.57 10.72V6.61C13.57 6.58 13.57 6.55 13.58 6.53L13.59 6.5C13.59 6.5 13.6 6.47 13.61 6.45C13.61 6.44 13.62 6.43 13.63 6.42C13.64 6.41 13.65 6.4 13.66 6.39C13.67 6.38 13.68 6.37 13.69 6.36C13.7 6.35 13.71 6.34 13.72 6.34L17.5 4.17C17.58 4.11 17.7 4.11 17.8 4.17L21.56 6.34C21.57 6.34 21.58 6.35 21.59 6.36L21.62 6.39C21.63 6.4 21.64 6.41 21.65 6.42C21.66 6.43 21.66 6.44 21.67 6.45C21.68 6.47 21.68 6.5 21.69 6.5C21.7 6.5 21.7 6.5 21.7 6.53M21.09 10.72V7.15L17.95 8.95V12.5L21.09 10.72M17.33 17.18V13.6L10.43 17.54V21.15L17.33 17.18M2.91 5V17.18L9.81 21.15V17.54L6.21 15.5L6.2 15.5L6.2 15.5C6.19 15.5 6.18 15.5 6.17 15.47C6.16 15.47 6.15 15.46 6.14 15.45V15.45C6.13 15.44 6.12 15.43 6.11 15.42C6.1 15.41 6.1 15.4 6.09 15.39V15.39C6.08 15.37 6.08 15.36 6.07 15.35C6.07 15.33 6.06 15.32 6.06 15.31C6.05 15.3 6.05 15.28 6.05 15.27C6.05 15.25 6.05 15.24 6.05 15.23V6.82L2.91 5M6.36 2.68L3.23 4.5L6.36 6.28L9.5 4.5L6.36 2.68M9.81 12.88V5L6.67 6.82V14.69L9.81 12.88M17.64 4.8L14.5 6.61L17.64 8.41L20.77 6.61L17.64 4.8M17.33 8.95L14.19 7.15V10.72L17.33 12.5V8.95M10.12 17L17 13.06L13.88 11.26L7 15.23L10.12 17Z"/>
                </svg>
              </i>
              <div class="mx-auto pt-3">Laravel</div>
            </div>
            <div class="tech-stack border border-green-200 shadow-lg" >
              <i class="text-center mx-auto transform scale-150">
                <svg fill="#689F63" height="50" viewBox="0 0 24 24" width="50">
                  <path
                      d="M12,1.85C11.73,1.85 11.45,1.92 11.22,2.05L3.78,6.35C3.3,6.63 3,7.15 3,7.71V16.29C3,16.85 3.3,17.37 3.78,17.65L5.73,18.77C6.68,19.23 7,19.24 7.44,19.24C8.84,19.24 9.65,18.39 9.65,16.91V8.44C9.65,8.32 9.55,8.22 9.43,8.22H8.5C8.37,8.22 8.27,8.32 8.27,8.44V16.91C8.27,17.57 7.59,18.22 6.5,17.67L4.45,16.5C4.38,16.45 4.34,16.37 4.34,16.29V7.71C4.34,7.62 4.38,7.54 4.45,7.5L11.89,3.21C11.95,3.17 12.05,3.17 12.11,3.21L19.55,7.5C19.62,7.54 19.66,7.62 19.66,7.71V16.29C19.66,16.37 19.62,16.45 19.55,16.5L12.11,20.79C12.05,20.83 11.95,20.83 11.88,20.79L10,19.65C9.92,19.62 9.84,19.61 9.79,19.64C9.26,19.94 9.16,20 8.67,20.15C8.55,20.19 8.36,20.26 8.74,20.47L11.22,21.94C11.46,22.08 11.72,22.15 12,22.15C12.28,22.15 12.54,22.08 12.78,21.94L20.22,17.65C20.7,17.37 21,16.85 21,16.29V7.71C21,7.15 20.7,6.63 20.22,6.35L12.78,2.05C12.55,1.92 12.28,1.85 12,1.85M14,8C11.88,8 10.61,8.89 10.61,10.39C10.61,12 11.87,12.47 13.91,12.67C16.34,12.91 16.53,13.27 16.53,13.75C16.53,14.58 15.86,14.93 14.3,14.93C12.32,14.93 11.9,14.44 11.75,13.46C11.73,13.36 11.64,13.28 11.53,13.28H10.57C10.45,13.28 10.36,13.37 10.36,13.5C10.36,14.74 11.04,16.24 14.3,16.24C16.65,16.24 18,15.31 18,13.69C18,12.08 16.92,11.66 14.63,11.35C12.32,11.05 12.09,10.89 12.09,10.35C12.09,9.9 12.29,9.3 14,9.3C15.5,9.3 16.09,9.63 16.32,10.66C16.34,10.76 16.43,10.83 16.53,10.83H17.5C17.55,10.83 17.61,10.81 17.65,10.76C17.69,10.72 17.72,10.66 17.7,10.6C17.56,8.82 16.38,8 14,8Z"/>
                </svg>
              </i>
              <div class="mx-auto pt-3">Node.js</div>
            </div>

            <div class="tech-stack border border-red-200 shadow-lg">
              <i class="text-center mx-auto transform scale-150">
                <svg fill="#FA6E39" height="50" viewBox="0 0 24 24" width="50">
                  <path
                      d="M21.94 13.11L20.89 9.89C20.89 9.86 20.88 9.83 20.87 9.8L18.76 3.32C18.65 3 18.33 2.75 17.96 2.75C17.6 2.75 17.28 3 17.17 3.33L15.17 9.5H8.84L6.83 3.33C6.72 3 6.4 2.75 6.04 2.75H6.04C5.67 2.75 5.35 3 5.24 3.33L3.13 9.82C3.13 9.82 3.13 9.83 3.13 9.83L2.06 13.11C1.9 13.61 2.07 14.15 2.5 14.45L11.72 21.16C11.89 21.28 12.11 21.28 12.28 21.15L21.5 14.45C21.93 14.15 22.1 13.61 21.94 13.11M8.15 10.45L10.72 18.36L4.55 10.45M13.28 18.37L15.75 10.78L15.85 10.45H19.46L13.87 17.61M17.97 3.94L19.78 9.5H16.16M14.86 10.45L13.07 15.96L12 19.24L9.14 10.45M6.03 3.94L7.84 9.5H4.23M3.05 13.69C2.96 13.62 2.92 13.5 2.96 13.4L3.75 10.97L9.57 18.42M20.95 13.69L14.44 18.42L14.46 18.39L20.25 10.97L21.04 13.4C21.08 13.5 21.04 13.62 20.95 13.69"/>
                </svg>
              </i>
              <div class="mx-auto pt-3">GitLab CI</div>
            </div>
            <div class="tech-stack border border-gray-400 shadow-lg">
              <i class="text-center mx-auto transform scale-150">
                <svg height="50" viewBox="0 0 24 24" width="50">
                  <path
                      d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z"/>
                </svg>
              </i>
              <div class="mx-auto pt-3">MySQL</div>
            </div>
          </div>

          <ul class="md:grid grid-cols-3 hidden overflow-hidden md:grid-cols-6 lg:grid-cols-10 gap-5"
              data-aos="fade-left">

            <li class="bg-white mx-auto rounded-xl p-2">
              <svg :fill="colors[Math.floor(Math.random()*colors.length)]" height="24" viewBox="0 0 24 24" width="24">
                <path
                    d="M20,18.69L12.7,22.74C12.2,23 11.7,23 11.2,22.74L4,18.69L17.05,5.54L17.4,5.44C17.7,5.44 17.87,5.57 17.9,5.84L20,18.69M9.35,5.74L4.8,13.29L6.7,1.34C6.73,1.07 6.9,0.94 7.2,0.94C7.4,0.94 7.53,1 7.6,1.19L9.75,5.14L9.35,5.74M13.85,7L4.3,16.59L11.55,4.29C11.65,4.09 11.8,4 12,4C12.2,4 12.33,4.09 12.4,4.29L13.85,7Z"/>
              </svg>
            </li>
            <li class="bg-white mx-auto rounded-xl p-2">
              <svg :fill="colors[Math.floor(Math.random()*colors.length)]" height="24" viewBox="0 0 24 24" width="24">
                <path
                    d="M16.5,6.08C16.5,6.08 9.66,7.79 12.94,11.56C13.91,12.67 12.69,13.67 12.69,13.67C12.69,13.67 15.14,12.42 14,10.82C12.94,9.35 12.14,8.62 16.5,6.08M12.03,7.28C16.08,4.08 14,2 14,2C14.84,5.3 11.04,6.3 9.67,8.36C8.73,9.76 10.13,11.27 12,13C11.29,11.3 8.78,9.84 12.03,7.28M9.37,17.47C6.29,18.33 11.25,20.1 15.16,18.43C14.78,18.28 14.41,18.1 14.06,17.89C12.7,18.2 11.3,18.26 9.92,18.07C8.61,17.91 9.37,17.47 9.37,17.47M14.69,15.79C12.94,16.17 11.13,16.26 9.35,16.05C8.04,15.92 8.9,15.28 8.9,15.28C5.5,16.41 10.78,17.68 15.5,16.3C15.21,16.19 14.93,16 14.69,15.79M18.11,19.09C18.11,19.09 18.68,19.56 17.5,19.92C15.22,20.6 8.07,20.81 6.09,19.95C5.38,19.64 6.72,19.21 7.14,19.12C7.37,19.06 7.6,19.04 7.83,19.04C7.04,18.5 2.7,20.14 5.64,20.6C13.61,21.9 20.18,20 18.11,19.09M15.37,14.23C15.66,14.04 15.97,13.88 16.29,13.74C16.29,13.74 14.78,14 13.27,14.14C11.67,14.3 10.06,14.32 8.46,14.2C6.11,13.89 9.75,13 9.75,13C8.65,13 7.57,13.26 6.59,13.75C4.54,14.75 11.69,15.2 15.37,14.23M16.27,16.65C16.25,16.69 16.23,16.72 16.19,16.75C21.2,15.44 19.36,12.11 16.96,12.94C16.83,13 16.72,13.08 16.65,13.19C16.79,13.14 16.93,13.1 17.08,13.07C18.28,12.83 20,14.7 16.27,16.65M16.4,21.26C13.39,21.78 10.31,21.82 7.28,21.4C7.28,21.4 7.74,21.78 10.09,21.93C13.69,22.16 19.22,21.8 19.35,20.1C19.38,20.11 19.12,20.75 16.4,21.26Z"/>
              </svg>
            </li>
            <li class="bg-white mx-auto rounded-xl p-2">
              <svg :fill="colors[Math.floor(Math.random()*colors.length)]" height="24" viewBox="0 0 24 24" width="24">
                <path
                    d="M16.61 15.15C16.15 15.15 15.77 14.78 15.77 14.32S16.15 13.5 16.61 13.5H16.61C17.07 13.5 17.45 13.86 17.45 14.32C17.45 14.78 17.07 15.15 16.61 15.15M7.41 15.15C6.95 15.15 6.57 14.78 6.57 14.32C6.57 13.86 6.95 13.5 7.41 13.5H7.41C7.87 13.5 8.24 13.86 8.24 14.32C8.24 14.78 7.87 15.15 7.41 15.15M16.91 10.14L18.58 7.26C18.67 7.09 18.61 6.88 18.45 6.79C18.28 6.69 18.07 6.75 18 6.92L16.29 9.83C14.95 9.22 13.5 8.9 12 8.91C10.47 8.91 9 9.24 7.73 9.82L6.04 6.91C5.95 6.74 5.74 6.68 5.57 6.78C5.4 6.87 5.35 7.08 5.44 7.25L7.1 10.13C4.25 11.69 2.29 14.58 2 18H22C21.72 14.59 19.77 11.7 16.91 10.14H16.91Z"/>
              </svg>
            </li>
            <li class="bg-white mx-auto rounded-xl p-2">
              <svg :fill="colors[Math.floor(Math.random()*colors.length)]" height="24" viewBox="0 0 24 24" width="24">
                <path
                    d="M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z"/>
              </svg>
            </li>
            <li class="bg-white mx-auto rounded-xl p-2">
              <svg :fill="colors[Math.floor(Math.random()*colors.length)]" height="24" viewBox="0 0 24 24" width="24">
                <path
                    d="M5,3L4.35,6.34H17.94L17.5,8.5H3.92L3.26,11.83H16.85L16.09,15.64L10.61,17.45L5.86,15.64L6.19,14H2.85L2.06,18L9.91,21L18.96,18L20.16,11.97L20.4,10.76L21.94,3H5Z"/>
              </svg>
            </li>
            <li class="bg-white mx-auto rounded-xl p-2">
              <svg :fill="colors[Math.floor(Math.random()*colors.length)]" height="24" viewBox="0 0 24 24" width="24">
                <path
                    d="M14.62,8.35C14.2,8.63 12.87,9.39 12.67,9.54C12.28,9.85 11.92,9.83 11.53,9.53C11.33,9.37 10,8.61 9.58,8.34C9.1,8.03 9.13,7.64 9.66,7.42C11.3,6.73 12.94,6.78 14.57,7.45C15.06,7.66 15.08,8.05 14.62,8.35M21.84,15.63C20.91,13.54 19.64,11.64 18,9.97C17.47,9.42 17.14,8.8 16.94,8.09C16.84,7.76 16.77,7.42 16.7,7.08C16.5,6.2 16.41,5.3 16,4.47C15.27,2.89 14,2.07 12.16,2C10.35,2.05 9,2.81 8.21,4.4C8,4.83 7.85,5.28 7.75,5.74C7.58,6.5 7.43,7.29 7.25,8.06C7.1,8.71 6.8,9.27 6.29,9.77C4.68,11.34 3.39,13.14 2.41,15.12C2.27,15.41 2.13,15.7 2.04,16C1.85,16.66 2.33,17.12 3.03,16.96C3.47,16.87 3.91,16.78 4.33,16.65C4.74,16.5 4.9,16.6 5,17C5.65,19.15 7.07,20.66 9.24,21.5C13.36,23.06 18.17,20.84 19.21,16.92C19.28,16.65 19.38,16.55 19.68,16.65C20.14,16.79 20.61,16.89 21.08,17C21.57,17.09 21.93,16.84 22,16.36C22.03,16.1 21.94,15.87 21.84,15.63"/>
              </svg>
            </li>
            <li class="bg-white mx-auto rounded-xl p-2">
              <svg :fill="colors[Math.floor(Math.random()*colors.length)]" height="24" viewBox="0 0 24 24" width="24">
                <path
                    d="M3.42,12C3.42,10.76 3.69,9.58 4.16,8.5L8.26,19.72C5.39,18.33 3.42,15.4 3.42,12M17.79,11.57C17.79,12.3 17.5,13.15 17.14,14.34L16.28,17.2L13.18,8L14.16,7.9C14.63,7.84 14.57,7.16 14.11,7.19C14.11,7.19 12.72,7.3 11.82,7.3L9.56,7.19C9.1,7.16 9.05,7.87 9.5,7.9L10.41,8L11.75,11.64L9.87,17.27L6.74,8L7.73,7.9C8.19,7.84 8.13,7.16 7.67,7.19C7.67,7.19 6.28,7.3 5.38,7.3L4.83,7.29C6.37,4.96 9,3.42 12,3.42C14.23,3.42 16.27,4.28 17.79,5.67H17.68C16.84,5.67 16.24,6.4 16.24,7.19C16.24,7.9 16.65,8.5 17.08,9.2C17.41,9.77 17.79,10.5 17.79,11.57M12.15,12.75L14.79,19.97L14.85,20.09C13.96,20.41 13,20.58 12,20.58C11.16,20.58 10.35,20.46 9.58,20.23L12.15,12.75M19.53,7.88C20.2,9.11 20.58,10.5 20.58,12C20.58,15.16 18.86,17.93 16.31,19.41L18.93,11.84C19.42,10.62 19.59,9.64 19.59,8.77L19.53,7.88M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,21.54C17.26,21.54 21.54,17.26 21.54,12C21.54,6.74 17.26,2.46 12,2.46C6.74,2.46 2.46,6.74 2.46,12C2.46,17.26 6.74,21.54 12,21.54Z"/>
              </svg>
            </li>
            <li class="bg-white mx-auto rounded-xl p-2">
              <svg :fill="colors[Math.floor(Math.random()*colors.length)]" height="24" viewBox="0 0 24 24" width="24">
                <path
                    d="M7 7H5A2 2 0 0 0 3 9V17H5V13H7V17H9V9A2 2 0 0 0 7 7M7 11H5V9H7M14 7H10V17H12V13H14A2 2 0 0 0 16 11V9A2 2 0 0 0 14 7M14 11H12V9H14M20 9V15H21V17H17V15H18V9H17V7H21V9Z"/>
              </svg>
            </li>
            <li class="bg-white mx-auto rounded-xl p-2">
              <svg :fill="colors[Math.floor(Math.random()*colors.length)]" height="24" viewBox="0 0 24 24" width="24">
                <path d="M2,3H5.5L12,15L18.5,3H22L12,21L2,3M6.5,3H9.5L12,7.58L14.5,3H17.5L12,13.08L6.5,3Z"/>
              </svg>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </section>

  <section id="blogs" class="pt-4 lg:pt-32">
    <div class="paps-container">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="mb-6">
          <div class="text-2xl lg:text-6xl font-bold md:max-w-md">My Blog and News</div>
          <div class="">
            <button
                class="ring-2 hidden md:block p-2 text-2xl mt-3 hover:bg-blue-500 hover:text-white transition duration-500 rounded-lg">
              Find out more &longrightarrow;
            </button>
          </div>

        </div>
        <div>
          <ul v-for="blog in blogs" :key="blog.title" class="overflow-hidden">
            <li class="hover:bg-white md:bg-transparent bg-white my-2 lg:my-6 cursor-pointer rounded-lg py-3 md:py-6 px-2 md:px-6 "
                data-aos="slide-left">
              <a class="flex flex-col" href="#">
                <div class="text-gray-400 flex pb-2 lg:pb-6 flex-row">
                  <svg fill-opacity=".2" height="24" viewBox="0 0 24 24" width="24">
                    <path
                        d="M19,4H18V2H16V4H8V2H6V4H5C3.89,4 3,4.9 3,6V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V6A2,2 0 0,0 19,4M19,20H5V10H19V20M19,8H5V6H19V8Z"/>
                  </svg>
                  <div class="pl-2">July 6, 2021</div>
                </div>
                <div class="flex flex-row justify-between">
                  <div class="text-lg lg:text-3xl pb-3 font-bold leading-tight  tracking-wide">
                    {{ blog.title }}
                  </div>
                  <div class="my-auto">
                    <svg fill-opacity=".2" height="24" viewBox="0 0 24 24" width="24">
                      <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"/>
                    </svg>
                  </div>
                </div>


              </a>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="paps-container mt-12 relative overflow-hidden" data-aos="fade-up"
           data-aos-easing="ease-in-out">
    <div class="rounded-t-lg lg:rounded-3xl overflow-hidden h-48 lg:h-96 bg-blue-200">
      <div class="text-center pt-8 lg:pt-16">
        <div class="uppercase pb-2 lg:pb-6 text-lg  text-gray-400">Contact me</div>
        <div class="text-2xl px-2 lg:px-0 lg:text-4xl font-bold">Got a Project? Let's Talk</div>
        <div class="flex flex-row justify-center pt-6">
          <div class="">
            <svg class="transform scale-150" fill="purple" height="24" viewBox="0 0 24 24" width="24">
              <path
                  d="M2 6V20H20V22H2C.895 22 0 21.11 0 20V6H2M24 4C24 2.9 23.1 2 22 2H6C4.9 2 4 2.9 4 4V16C4 17.1 4.9 18 6 18H22C23.1 18 24 17.1 24 16V4M22 4L14 9L6 4H22M22 16H6V6L14 11L22 6V16Z"/>
            </svg>
          </div>
          <div class="pl-4 md:pl-6 text-md md:text-xl mb-6  text-gray-500">
            <a class="" href="mailto:promiseatokple@outlook.com">promiseatokple@outlook.com</a>
          </div>
        </div>
        <div class="container  mx-auto px-10">

          <div class="hidden lg:flex w-full pt-16  pb-12 flex-row justify-between">
            <div class="max-h-16 pb-10">
              <img alt="Logo" class="rounded-full  h-10 lg:h-14 w-10 lg:w-14" src="/promise-as-logo.jpg">
            </div>
            <div class="my-auto ml-auto">
              <ul class="flex flex-row my-auto">
                <li><a class="pr-4 lg:pr-8 " href="#about">About</a></li>
                <li><a class="pr-4 lg:pr-8" href="#portfolio">Work</a></li>
                <li><a class="pr-4 lg:pr-8" href="#services">Service</a></li>
                <li><a class="pr-4 lg:pr-8" href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  <section class="paps-container py-4">
    <div class="flex flex-row justify-center lg:justify-between">
      <div class="text-black text-opacity-50">&copy;&ensp; {{ new Date().getFullYear() }} Promise Atokple</div>
      <div class="text-black hidden lg:block text-opacity-50">Thank you</div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

import Project from "../components/project";
import Expertise from "../components/expertise";

export default {
  name: "Home",
  data() {
    return {
      projects: [{name: 'Dashboard Interface UI', image: 'url(/images/projects/project-sample-1.png)'},
        {
          name: 'OpenCourseWare',
          image: 'url(/images/projects/project-sample-2.png)'
        },
        {name: 'Task Manager', image: 'url(/images/projects/project-sample-3.png)'},],
      profile: {
        intro: "Hi, I'm Promise. A  web designer/developer from Ghana. I help\n" +
            "brands turn their ideas into high quality products",
        first: "",
        second: ""
      },
      expertises: [
        {
          title: 'Digital Marketing',
          tagline: 'Understand First',
          color: 'bg-red-200',
          fill: 'red',
          desc: " the promotion of brands to connect with potential customers using the internet and other forms of digital communication. This includes not only email, social media, and web-based advertising, but also text and multimedia messages as a marketing channel.",
          logo: 'M12,8H4A2,2 0 0,0 2,10V14A2,2 0 0,0 4,16H5V20A1,1 0 0,0 6,21H8A1,1 0 0,0 9,20V16H12L17,20V4L12,8M21.5,12C21.5,13.71 20.54,15.26 19,16V8C20.53,8.75 21.5,10.3 21.5,12Z',
        },
        {
          title: 'Branding & Logo ',
          tagline: 'Position the Brand',
          color: 'bg-blue-100',
          fill: 'blue',
          extra: 'Branding aims to establish a significant and differentiated presence in the market that attracts and retains loyal customers' +
              '.',
          desc: "to shape your audiences’ (customers, clients, employees, etc.) perceptions. It is a process and strategy that encompasses the steps you take to give meaning to your product and organization.",
          logo: 'M15,14L21,17V7L15,10V14M9,14L3,17V7L9,10V14M10,10H14V14H10V10Z',
        },
        {
          title: 'Software Consultancy',
          tagline: 'Communicate to All',
          color: 'bg-red-100',
          fill: 'red',
          desc: "If you need help identifying the technology barriers that stand between you and a more profitable business, our software consultants can help.",
          logo: 'M4,2C2.89,2 2,2.89 2,4V14H4V4H14V2H4M8,6C6.89,6 6,6.89 6,8V18H8V8H18V6H8M12,10C10.89,10 10,10.89 10,12V20C10,21.11 10.89,22 12,22H20C21.11,22 22,21.11 22,20V12C22,10.89 21.11,10 20,10H12Z',
        },
        {
          title: 'Software Development',
          tagline: 'Bringing work to life',
          color: 'bg-purple-100',
          fill: 'purple',
          desc: "with activities dedicated to the process of creating, designing, deploying and supporting software",
          logo: 'M13,19V16H21V19H13M8.5,13L2.47,7H6.71L11.67,11.95C12.25,12.54 12.25,13.5 11.67,14.07L6.74,19H2.5L8.5,13Z',
        },
      ],

      blogs: [{
        title: '12 unique examples of portfolio websites',
        slug: '',
      }, {
        title: 'How do you use time tracking for your projects?',
        slug: '',
      }, {
        title: 'How Vue.JS helped my business and career',
        slug: '',
      }],
      companies: ['Universal Technologies', 'Scynett Ghana', 'Koforidua Technical University', '3DGhana'],
      colors: ['red', 'blue', 'indigo', 'orange',],


    }
  },
  components: {Expertise, Project},
  computed: {
    developerImage: 'url(/images/developer.svg)'
  },
  methods: {
    inView(element, classes) {
      let el = document.querySelector(element)
      let observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          if (classes.length) {
            classes.forEach(cls => {
              entry.target.classList.toggle(cls)
            })
          }
          // entry.target.classList.toggle(...classes)
          console.log('entered: ', entry.isIntersecting, 'classes:', entry.target.classList.toString())

        } else {
          // entry.target.classList.remove(...classes)
          // console.log('removed: ', entry.isIntersecting, 'classes:', entry.target.classList.toString())

        }

      }, {})
      observer.observe(el)
    },
  },
  mounted() {
    this.inView(
        '#portfolio',
        ['animate__animated', 'animate__backInUp',]
    )
    this.inView(
        '#image',
        ['animate__animated', 'animate__slideInRight',]
    )
    this.inView(
        '#my-experience',
        ['animate__animated', 'animate__rubberBand',]
    )
  }
};
</script>

<style>
.typing {
  width: 100%;
  display: block;
  animation: typing 2s steps(22), blink .5s step-end alternate;
  white-space: nowrap;
  overflow: hidden;


}

@keyframes typing {
  from {
    border-right: 3px solid;
    width: 0
  }
  to {
    border-right: 0 solid;
  }
}

@keyframes blink {
  50% {
    border-color: transparent
  }
}

</style>