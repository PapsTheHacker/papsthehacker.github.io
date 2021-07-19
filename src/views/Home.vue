<template>
  <section class="container mx-auto px-4 lg:px-16">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="flex flex-col">
        <div class="lg:pt-24 space-x-3 md:max-w-md">
          <h1 class="text-4xl lg:text-8xl text-left font-bold">
            Hey, I'm a
            <span class="text-black animate-bounce">software</span> developer<span
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
              name=""
              placeholder="Email Address"
              type="email"
          />
          <button
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
              type="submit"
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
              alt="Promise Hero"
              class="lg:h-96 h-56 w-full bg-cover object-contain transform scale-150"
              src="/promise-as-hero.png"
              width="100%"
          />
        </div>
      </div>
    </div>
    <div class="py-12">
      <div
          class="text-center text-gray-400 uppercase tracking-widest font-bold"
      >
        My Skills
      </div>
      <div class="text-5xl pb-10 text-center font-bold">My Expertise</div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div v-for="expertise in expertises" :key="expertise.title" class="">
        <expertise :expertise="expertise"></expertise>
      </div>
    </div>
  </section>

  <div class="pb-28 mt-16 container mx-auto px-4 lg:px-16">
    <div class="text-left -mb-16 text-gray-400 font-bold tracking-widest">
      PORTFOLIO
    </div>
    <div class="flex justify-between">
      <div class="text-3xl lg:pt-20 lg:text-5xl text-left font-bold">All Creative Works</div>
      <div class="text-right font-medium lg:pt-24">
        <span class="bg-pink-500 p-2 text-sm text-white rounded-md">New</span>
        Discover all projects on
        <router-link
            class="text-pink-500"
            target="_blank"
            to="https://dribbble.com"
        >Dribbble &rightarrow;
        </router-link
        >
      </div>
    </div>

  </div>
  <div class="-mt-48">
    <div
        class="h-96 bg-red-100 w-3/4 ml-auto my-4 rounded-tl-3xl rounded-bl-3xl"
    ></div>
  </div>

  <section>
    <div class="container -mt-64 mx-auto px-4 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="project in projects" :key="project.name">
        <project :project="project"></project>
      </div>
    </div>
  </section>

  <section>
    <div class="relative my-16">
      <div class="w-2/3 bg-pink-100 h-screen rounded-r-3xl"></div>
      <div class="absolute left-0 top-0 w-full">
        <div class="container py-16 px-4 lg:px-16 mx-auto">
          <div
              class="text-left uppercase text-gray-300 tracking-widest font-bold"
          >
            Nice to meet you.
          </div>
          <div class="py-5 text-left">
            <p class="text-4xl lg:text-6xl font-bold max-w-xl">
              Hey, I'm Promise, software developer and designer
            </p>
          </div>
          <div class="text-left">
            <p class="pb-6">
              Hi, my name is Promise and I’m a freelance web designer from
              Ghana. I have over 2 years experience in leading teams and
              shipping complex digital products. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. In fermentum, libero id efficitur
              dapibus, nisl metus euismod ex, non elementum quam urna eu risus.
            </p>
            <p class="hidden lg:block">
              Vestibulum at pulvinar nisi, non commodo erat. Aliquam lobortis
              posuere magna sed tincidunt. Sed facilisis vestibulum eros eget
              varius. Nam eget velit sed neque dignissim rutrum. Nullam
              efficitur ornare tellus eget condimentum.
            </p>
          </div>
          <div class="my-4 flex flex-row">
            <img
                alt="Author's Image"
                class="rounded-full ring-2 ring-pink-500 p-1"
                height="48"
                src="/promise-as-logo.jpg"
                width="48"
            />
            <div class="flex flex-col pl-5 text-left">
              <p class="font-bold">Promise Atokple</p>
              <p class="text-sm text-opacity-50 text-gray-800">
                Software developer at Tinkerings
              </p>
            </div>
          </div>

          <div class="py-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <div
                class="
                h-56
                flex flex-col
                justify-center
                my-auto
                align-middle
                bg-white 
                rounded-xl
                transition duration-500 border-2 cursor-pointer hover:border-purple-600
              "
            >
              <img alt="Slack logo" class="mx-auto" height="72" src="/images/brands/slack.svg" width="72">
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
                transition duration-500 border-2 cursor-pointer hover:border-purple-600
              "
            >
              <img alt="Slack logo" class="mx-auto" height="72" src="images/brands/dribbble.svg" width="72">
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
                transition duration-500 border-2 cursor-pointer hover:border-purple-600
              "
            >
              <img alt="Slack logo" class="mx-auto" height="72" src="images/brands/webflow.svg" width="72">
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
                transition duration-500 border-2 cursor-pointer hover:border-purple-600
              "
            >
              <img alt="Slack logo" class="mx-auto" height="72" src="images/brands/youtube.svg" width="72">
              <div class="mx-auto">YouTube</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="relative pt-96 lg:pt-44">
    <div class="container mx-auto px-4 lg:px-16">
      <div class="flex flex-col justify-center text-center">
        <div class="uppercase text-gray-400">Companies</div>
        <div class="font-bold pt-3 pb-16 text-5xl">Customers & Clients</div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        <div
            class="hover:bg-white bg-blue-50 p-1 transition duration-500 border-2 cursor-pointer hover:border-purple-600 h-44 rounded-xl text-center font-medium text-xl flex flex-col justify-center">
          Company 1
        </div>
        <div
            class="hover:bg-white bg-blue-50 p-1 transition duration-500 border-2 cursor-pointer hover:border-purple-600 h-44 rounded-xl text-center font-medium text-xl flex flex-col justify-center">
          Company 2
        </div>
        <div
            class="hover:bg-white bg-blue-50 p-1 transition duration-500 border-2 cursor-pointer hover:border-purple-600 h-44 rounded-xl text-center font-medium text-xl flex flex-col justify-center">
          Company 3
        </div>
        <div
            class="hover:bg-white bg-blue-50 p-1 transition duration-500 border-2 cursor-pointer hover:border-purple-600 h-44 rounded-xl text-center font-medium text-xl flex flex-col justify-center">
          Company 4
        </div>

        <div
            class="hover:bg-white cursor-pointer transition duration-500 border-2  disabled hover:border-purple-600 flex flex-col flex-nowrap p-1   h-44 rounded-xl text-center font-medium text-xl my-auto  justify-center">
          <a href="#" class="flex flex-row justify-center">
            <span>See all companies</span>
            <i class="transform my-auto scale-75">
              <svg height="24" viewBox="0 0 24 24" width="24">
                <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"/>
              </svg>
            </i>
          </a>

        </div>
      </div>
    </div>
  </section>

  <section class="pt-32">
    <div class="container px-4 lg:px-16 mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div>
          <div class="text-start text-gray-500">BLOG</div>
          <div class="text-6xl font-bold md:max-w-md">My Blog and News</div>
        </div>
        <div>
          <ul v-for="blog in blogs" :key="blog.title">
            <li class="hover:bg-white my-6 cursor-pointer rounded-lg py-6 px-6">
              <a class="flex flex-col" href="#">
                <div class="text-gray-400 flex pb-6 flex-row">
                  <svg fill-opacity=".2" height="24" viewBox="0 0 24 24" width="24">
                    <path
                        d="M19,4H18V2H16V4H8V2H6V4H5C3.89,4 3,4.9 3,6V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V6A2,2 0 0,0 19,4M19,20H5V10H19V20M19,8H5V6H19V8Z"/>
                  </svg>
                  <div class="pl-2">July 6, 2021</div>
                </div>
                <div class="flex flex-row">
                  <div class="text-3xl pb-3 font-bold  tracking-wide">
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

  <section class="container mt-12 relative overflow-hidden px-4 lg:px-16 mx-auto">
    <div class="rounded-3xl h-96 bg-blue-200">
      <div class="text-center pt-16">
        <div class="uppercase pb-6 text-lg text-gray-500">Contact me</div>
        <div class="text-4xl font-bold">Got a Project? Let's Talk</div>
        <div class="flex flex-row justify-center pt-6">
          <div class="">
            <svg class="transform scale-150" fill="purple" height="24" viewBox="0 0 24 24" width="24">
              <path
                  d="M2 6V20H20V22H2C.895 22 0 21.11 0 20V6H2M24 4C24 2.9 23.1 2 22 2H6C4.9 2 4 2.9 4 4V16C4 17.1 4.9 18 6 18H22C23.1 18 24 17.1 24 16V4M22 4L14 9L6 4H22M22 16H6V6L14 11L22 6V16Z"/>
            </svg>
          </div>
          <div class="pl-6 text-xl text-gray-500">
            <a class="" href="mailto:promiseatokple@outlook.com">promiseatokple@outlook.com</a>
          </div>
        </div>
        <div class="container mx-auto px-10">

          <div class="flex w-full pt-16  pb-12 flex-row justify-between">
            <div class="">
              <img alt="Logo" class="rounded-full" height="50" src="/promise-as-logo.jpg" width="50">
            </div>
            <div class="my-auto ml-auto">
              <ul class="flex flex-row my-auto">
                <li><a class="pr-8" href="#">About</a></li>
                <li><a class="pr-8" href="#">Work</a></li>
                <li><a class="pr-8" href="#">Service</a></li>
                <li><a class="pr-8" href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
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
        intro: "Hi, I'm Promise a freelance web designer/developer from Ghana. I help\n" +
            "          brands turn their ideas into high quality products",
        first: "",
        second: ""
      },
      expertises: [
        {
          title: 'Digital Marketing',
          tagline: 'Understand First',
          color: 'bg-pink-100',
          fill: 'pink',
          desc: " the promotion of brands to connect with potential customers using the internet and other forms of digital communication. This includes not only email, social media, and web-based advertising, but also text and multimedia messages as a marketing channel.",
          logo: 'M12,8H4A2,2 0 0,0 2,10V14A2,2 0 0,0 4,16H5V20A1,1 0 0,0 6,21H8A1,1 0 0,0 9,20V16H12L17,20V4L12,8M21.5,12C21.5,13.71 20.54,15.26 19,16V8C20.53,8.75 21.5,10.3 21.5,12Z',
        },
        {
          title: 'Branding & Logo ',
          tagline: 'Position the Brand',
          color: 'bg-blue-100',
          fill: 'blue',
          desc: "to shape your audiences’ (customers, clients, employees, etc.) perceptions. It is a process and strategy that encompasses the steps you take to give meaning to your product and organization. Branding aims to establish a significant and differentiated presence in the market that attracts and retains loyal customers.",
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
      }]
    }
  },
  components: {Expertise, Project},
};
</script>
