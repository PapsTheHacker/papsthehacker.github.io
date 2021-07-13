<template>
  <section class="container mx-auto px-4 md:px-16">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="flex flex-col">
        <div class="md:pt-24 space-x-3 md:max-w-md">
          <h1 class="text-4xl md:text-8xl text-left font-bold">
            Hey, I'm a
            <span class="text-indigo-900">software</span> developer<span
              class="rounded-full"
              >.</span
            >
          </h1>
        </div>
        <p class="md:max-w-md md:pt-6 text-left">
          Hi, I'm Promise a freelance web designer/developer from Ghana. I help
          brands turn their ideas into high quality products
        </p>
        <div class="text-left flex flex-nowrap py-4">
          <input
            type="email"
            name=""
            id=""
            class="
              py-4
              bg-white
              px-4
              w-full
              border border-transparent
              focus:outline-none
              focus:ring-2 focus:ring-purple-600
              focus:border-transparent
              rounded-lg
            "
            placeholder="Email Address"
          />
          <button
            type="submit"
            class="
              py-4
              px-8
              text-white
              bg-purple-600
              hover:bg-purple-700
              focus:outline-none
              focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50
              bg-indigo-500
              rounded-xl
              -ml-5
            "
          >
            Subscribe
          </button>
        </div>
        <div class="text-sm text-left opacity-70">
          <p class="">🎉 Join my newsletter and get free strategies</p>
        </div>
      </div>

      <div class="m overflow-hidden justify-end">
        <div
          class="
            text-right
            bg-pink-300
            h-auto
            ml-auto
            py-12
            w-3/4
            overflow-hidden
            rounded-tl-full rounded-bl-full rounded-br-full
          "
        >
          <img
            src="/promise-as-hero.png"
            alt="Promise Hero"
            class="h-96 w-full bg-cover object-contain transform scale-150"
            width="100%"
          />
        </div>
      </div>
    </div>
    <div class="py-6">
      <div
        class="text-center text-gray-300 uppercase tracking-widest font-bold"
      >
        My Skills
      </div>
      <div class="text-5xl font-bold">My Expertise</div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <section class="p-6 bg-white shadow-sm rounded-lg">
        <div class="flex pb-6 flex-col md:flex-row">
          <div
            class="
              mr-4
              md:mr-6
              rounded-lg
              bg-blue-200
              h-16
              flex
              justify-center
              w-16
            "
          >
            <img src="/strategies.svg" alt="Strategies icon" class="" />
          </div>
          <div class="font-bold pt-4 md:pt-0 text-xl text-left my-auto">
            Strategy & Direction
          </div>
        </div>
        <div class="text-left">
          <p>
            <span class="font-bold">Understand First.</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            saepe consequuntur repellendus dignissimos perspiciatis aperiam
            reiciendis voluptates, quos provident? Repudiandae porro quam
            aperiam earum nulla quos cum adipisci. Illo, soluta!
          </p>
        </div>
      </section>

      <section class="p-6 bg-white shadow-sm rounded-lg">
        <div class="flex pb-6 flex-row">
          <div
            class="mr-6 rounded-lg bg-blue-200 h-16 flex justify-center w-16"
          >
            <i class="my-auto scale-150 transform">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M15,14L21,17V7L15,10V14M9,14L3,17V7L9,10V14M10,10H14V14H10V10Z"
                />
              </svg>
            </i>
          </div>
          <div class="font-bold text-xl my-auto">Branding & Logo</div>
        </div>
        <div class="text-left">
          <p>
            <span class="font-bold">Position the Brand.</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            saepe consequuntur repellendus dignissimos perspiciatis aperiam
            reiciendis voluptates, quos provident? Repudiandae porro quam
            aperiam earum nulla quos cum adipisci. Illo, soluta!
          </p>
        </div>
      </section>

      <section class="p-6 bg-white shadow-sm rounded-lg">
        <div class="flex pb-6 flex-row">
          <div
            class="mr-6 rounded-lg bg-blue-200 h-16 flex justify-center w-16"
          >
            <i class="my-auto transform scale-150">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M4,2C2.89,2 2,2.89 2,4V14H4V4H14V2H4M8,6C6.89,6 6,6.89 6,8V18H8V8H18V6H8M12,10C10.89,10 10,10.89 10,12V20C10,21.11 10.89,22 12,22H20C21.11,22 22,21.11 22,20V12C22,10.89 21.11,10 20,10H12Z"
                />
              </svg>
            </i>
          </div>
          <div class="font-bold text-xl my-auto">Motion & Animation</div>
        </div>
        <div class="text-left">
          <p>
            <span class="font-bold">Communicate to all.</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            saepe consequuntur repellendus dignissimos perspiciatis aperiam
            reiciendis voluptates, quos provident? Repudiandae porro quam
            aperiam earum nulla quos cum adipisci. Illo, soluta!
          </p>
        </div>
      </section>

      <section class="p-6 bg-white shadow-sm rounded-lg">
        <div class="flex pb-6 flex-row">
          <div
            class="mr-6 rounded-lg bg-indigo-200 h-16 flex justify-center w-16"
          >
            <i class="text-center my-auto transform scale-150">
              <svg width="24" height="24" fill="indigo" viewBox="0 0 24 24">
                <path
                  d="M13,19V16H21V19H13M8.5,13L2.47,7H6.71L11.67,11.95C12.25,12.54 12.25,13.5 11.67,14.07L6.74,19H2.5L8.5,13Z"
                />
              </svg>
            </i>
          </div>
          <div class="font-bold text-xl my-auto">Development</div>
        </div>
        <div class="text-left">
          <p>
            <span class="font-bold">Bringing work to life.</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            saepe consequuntur repellendus dignissimos perspiciatis aperiam
            reiciendis voluptates, quos provident? Repudiandae porro quam
            aperiam earum nulla quos cum adipisci. Illo, soluta!
          </p>
        </div>
      </section>
    </div>
  </section>

  <div class="py-24 container mx-auto px-4 md:px-16">
    <div class="text-left text-gray-400 font-bold tracking-widest">
      PORTFOLIO
    </div>
    <div class="text-5xl text-left font-bold py-3">All Creative Works</div>
    <div class="text-right font-medium -mt-12">
      <span class="bg-pink-500 p-2 text-sm text-white rounded-md">New</span>
      Discover all projects on
      <router-link
        to="https://dribbble.com"
        target="_blank"
        class="text-pink-500"
        >Dribbble &rightarrow;</router-link
      >
    </div>
  </div>
  <div class="-mt-48">
    <div
      class="h-96 bg-red-100 w-3/4 ml-auto my-4 rounded-tl-3xl rounded-bl-3xl"
    ></div>
  </div>

  <section>
    <div class="container -mt-64 mx-auto px-16 grid grid-cols-3 gap-6">
      <div class="">
        <div
          class="
            h-96
            bg-white
            p-10
            rounded-2xl
            relative
            overflow-hidden
            group-hover:opacity-100
          "
        >
          <div
            class="
              bg-blue-400
              h-full
              bg-transparent
              flex flex-col
              justify-center
              opacity-0
              hover:opacity-100
              transform
              delay-100
              ease-in-out
              overflow-hidden
              rounded-2xl
              w-full
            "
          >
            <div class="text-2xl text-white text-center pb-4">Project name</div>
            <button
              type="submit"
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
            >
              See on Dribbble
            </button>
          </div>
        </div>
      </div>

      <div class="">
        <div
          class="
            h-96
            bg-white
            p-10
            rounded-2xl
            relative
            overflow-hidden
            group-hover:opacity-100
          "
        >
          <div
            class="
              bg-blue-400
              h-full
              bg-transparent
              flex flex-col
              justify-center
              opacity-0
              hover:opacity-100
              transform
              delay-100
              ease-in-out
              overflow-hidden
              rounded-2xl
              w-full
            "
          >
            <div class="text-2xl text-center text-white pb-4">Project name</div>
            <button
              type="submit"
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
            >
              See on Dribbble
            </button>
          </div>
        </div>
      </div>

      <div class="">
        <div
          class="
            h-96
            bg-white
            
            rounded-2xl
            relative
            overflow-hidden
            group-hover:opacity-100
          "
        >
        <img src="/images/projects/project-sample-1.png" alt="project image 1" class="h-full w-full z-0" >
          <div
            class=" z-10
              bg-blue-400
              h-full
              bg-transparent
              flex flex-col
              justify-center absolute left-0 top-0
              overflow-hidden
              rounded-2xl
              w-full
            "
          >
            <div class="text-2xl text-white text-center pb-4">Project name</div>
            <button
              type="submit"
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
            >
              See on Dribbble
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="relative my-16">
      <div class="w-2/3 bg-pink-100 h-screen rounded-r-3xl"></div>
      <div class="absolute left-0 top-0 w-full">
        <div class="container py-16 md:px-16 mx-auto">
          <div
            class="text-left uppercase text-gray-300 tracking-widest font-bold"
          >
            Nice to meet you.
          </div>
          <div class="py-5 text-left">
            <p class="text-6xl font-bold max-w-xl">
              Hey, I'm Promise, software developer and designer
            </p>
          </div>
          <div class="text-left">
            <p class="pb-6">
              Hi, my name is Promise and I’m a freelance web designer from
              Ghana. I have over 10 years experience in leading teams and
              shipping complex digital products. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. In fermentum, libero id efficitur
              dapibus, nisl metus euismod ex, non elementum quam urna eu risus.
            </p>
            <p class="">
              Vestibulum at pulvinar nisi, non commodo erat. Aliquam lobortis
              posuere magna sed tincidunt. Sed facilisis vestibulum eros eget
              varius. Nam eget velit sed neque dignissim rutrum. Nullam
              efficitur ornare tellus eget condimentum.
            </p>
          </div>
          <div class="my-4 flex flex-row">
            <img
              src="/promise-as-logo.jpg"
              class="rounded-full ring-2 ring-pink-500 p-1"
              alt="Author's Image"
              width="48"
              height="48"
            />
            <div class="flex flex-col pl-5 text-left">
              <p class="font-bold">Promise Atokple</p>
              <p class="text-sm text-opacity-50 text-gray-800">
                Software developer at Tinkerings
              </p>
            </div>
          </div>

          <div class="py-5 grid grid-cols-4 gap-5">
            <div
              class="
                h-56
                flex flex-col
                justify-center
                my-auto
                align-middle
                bg-white 
                rounded-xl
              "
            >
             <img class="mx-auto" src="/images/brands/slack.svg" alt="Slack logo" width="72" height="72">
              <div class="mx-auto pt-3">Slack</div>
            </div>
            <div
              class="
                h-56
                flex flex-col
                justify-center
                my-auto
                align-middle
                bg-white
                rounded-xl
              "
            >
               <img class="mx-auto" src="images/brands/dribbble.svg" alt="Slack logo" width="72" height="72">
                <div class="mx-auto pt-3">Dribbble</div>
            </div>

            <div
              class="
                h-56
                flex flex-col
                justify-center
                my-auto
                align-middle
                bg-white
                rounded-xl
              "
            >
               <img class="mx-auto" src="images/brands/webflow.svg" alt="Slack logo" width="72" height="72">
                <div class="mx-auto pt-3">Webflow</div>
            </div>
            <div
              class="
                h-56
                flex flex-col
                justify-center
                my-auto
                align-middle
                bg-white
                rounded-xl
              "
            >
               <img class="mx-auto" src="images/brands/youtube.svg" alt="Slack logo" width="72" height="72">
               <div class="mx-auto">YouTube</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="relative pt-44">
    <div class="container mx-auto px-16">
        <div class="flex flex-col justify-center text-center">
          <div class="uppercase text-gray-400">Companies</div>
          <div class="font-bold py-3 text-5xl">Customers & Clients</div>
        </div>
        <div class="grid grid-cols-5 gap-5">
          <div class="bg-white p-1 hover:ring-2 hover:ring-pink-500 ring-inset h-44 rounded-xl text-center font-medium text-xl flex flex-col justify-center">Company 1</div>
          <div class="bg-white p-1 hover:ring-2 hover:ring-pink-500 ring-inset h-44 rounded-xl text-center font-medium text-xl flex flex-col justify-center">Company 2</div>
          <div class="bg-white p-1 hover:ring-2 hover:ring-pink-500 ring-inset h-44 rounded-xl text-center font-medium text-xl flex flex-col justify-center">Company 3</div>
          <div class="bg-white p-1 hover:ring-2 hover:ring-pink-500 ring-inset h-44 rounded-xl text-center font-medium text-xl flex flex-col justify-center">Company 4</div>
          <div class="bg-white p-1 hover:ring-2 hover:ring-pink-500 ring-inset h-44 rounded-xl text-center font-medium text-xl flex flex-col justify-center">Company 5</div>
          <div class="bg-white p-1 hover:ring-2 hover:ring-pink-500 ring-inset h-44 rounded-xl text-center font-medium text-xl flex flex-col justify-center">Company 6</div>
          <div class="bg-white p-1 hover:ring-2 hover:ring-pink-500 ring-inset h-44 rounded-xl text-center font-medium text-xl flex flex-col justify-center">Company 7</div>
          <div class="bg-white p-1 hover:ring-2 hover:ring-pink-500 ring-inset h-44 rounded-xl text-center font-medium text-xl flex flex-col justify-center">Company 8</div>
          <div class="bg-white p-1 hover:ring-2 hover:ring-pink-500 ring-inset h-44 rounded-xl text-center font-medium text-xl flex flex-col justify-center">Company 9</div>
          
        </div>
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
