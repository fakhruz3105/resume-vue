<script setup lang="ts">
import { ref } from 'vue';

const skills = ref([
  'VueJS', 'NestJS', 'Typescript', 'Javascript', 'Python',
  'Java', 'SpringBoot', 'Bash', 'Docker', 'Linux', 'MySQL', 'Sqlite', 'Git', 'Electron',
  'Postgres', 'Firebase', 'ReactJS', 'React Native',
  'NextJS', 'MongoDB', 'Azure', 'AWS', 'Pocketbase', 'Go'
])

const showBorder = ref(false)
</script>

<template>
  <div
    class="page"
    :class="{ 'show-page-border': showBorder }"
  >
    <div class="flex">
      <div class="profile-pic bg-slate-500 rounded-xl w-[80%] m-4"></div>
      <div class="flex flex-col justify-start py-4">
        <span class="text-2xl font-bold">Muhammad Fakhruz Razi Bin Mutussin</span>
        <span class="text-base text-slate-500">Software Engineer</span>
        <span class="text-sm">Enthusiastic and passionate programmer with 5 years of experience in full stack web and mobile development with high rates of project delivery in a fast-paced and deadline-driven environment. I love solving problems, am eager to learn, self-taught, and always looking forward to experiencing new work cultures. Code maintainability is a principle I build into every project.</span>
      </div>
    </div>
    <div
      class="bg-slate-200 min-w-[10in] relative left-[50%] flex justify-center items-center"
      style="transform: translateX(-50%);"
    >
      <div class="flex justify-center items-start w-[7.25in] px-4 py-2">
        <div class="w-[50%] flex flex-col justify-start items-start">
          <div class="flex justify-start items-center my-1">
            <svg class="w-6 h-6 primary-text mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
            <span class="text-sm">fakhruz3105@gmail.com</span>
          </div>
          <div class="flex justify-start items-center my-1">
            <svg class="w-6 h-6 primary-text mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <span class="text-sm">W.P. Putrajaya, Malaysia</span>
          </div>
          <div class="flex justify-start items-center my-1">
            <svg class="w-6 h-6 primary-text mr-2 fill-[#4BB2DB]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M477.5 128C463 103.05 285.13 0 256.16 0S49.25 102.79 34.84 128s-14.49 230.8 0 256 192.38 128 221.32 128S463 409.08 477.49 384s14.51-231 .01-256zM316.13 414.22c-4 0-40.91-35.77-38-38.69.87-.87 6.26-1.48 17.55-1.83 0-26.23.59-68.59.94-86.32 0-2-.44-3.43-.44-5.85h-79.93c0 7.1-.46 36.2 1.37 72.88.23 4.54-1.58 6-5.74 5.94-10.13 0-20.27-.11-30.41-.08-4.1 0-5.87-1.53-5.74-6.11.92-33.44 3-84-.15-212.67v-3.17c-9.67-.35-16.38-1-17.26-1.84-2.92-2.92 34.54-38.69 38.49-38.69s41.17 35.78 38.27 38.69c-.87.87-7.9 1.49-16.77 1.84v3.16c-2.42 25.75-2 79.59-2.63 105.39h80.26c0-4.55.39-34.74-1.2-83.64-.1-3.39.95-5.17 4.21-5.2 11.07-.08 22.15-.13 33.23-.06 3.46 0 4.57 1.72 4.5 5.38C333 354.64 336 341.29 336 373.69c8.87.35 16.82 1 17.69 1.84 2.88 2.91-33.62 38.69-37.58 38.69z"/></svg>
            <span class="text-sm">hackerrank.com/fakhruz3105</span>
          </div>
        </div>
        <div class="w-[50%] flex flex-col justify-start items-start">
          <div class="flex justify-start items-center my-1">
            <svg class="w-6 h-6 primary-text mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
            <span class="text-sm">60142720349</span>
          </div>
          <div class="flex justify-start items-center my-1">
            <svg class="w-6 h-6 primary-text mr-2 fill-[#4BB2DB]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
            <span class="text-sm">github.com/fakhruz3105</span>
          </div>
          <div class="flex justify-start items-center my-1">
            <svg class="w-6 h-6 primary-text mr-2 fill-[#4BB2DB]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
            <span class="text-sm">linkedin.com/in/fakhruz3105</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-start items-start px-4 pt-4">
      <span class="text-xl font-bold primary-text mb-2">Work Experience</span>
      <ol class="relative border-l border-gray-200 space-y-2">
        <li class="section ml-4">
          <div class="absolute w-3 h-3 primary-bg rounded-full mt-1 -left-1.5 border border-white"></div>
          <div class="flex justify-between items-center mb-2 primary-text text-sm">
            <span class="leading-5">October, 2023 - Present</span>
            <div class="flex items-center">
              <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span>Kuala Lumpur</span>
            </div>
          </div>
          <div class="flex flex-col">
            <span class="leading-5 text-base font-bold">Senior Software Engineer</span>
            <span class="leading-5 text-lg font-light">Muslimtravelbug Sdn Bhd</span>
            <ul class="list-disc pl-4 text-sm text-justify">
              <li>
                Bridged gaps between frontend and backend teams, minimizing handover errors through improved systemization. Enhanced communication protocols eliminated critical errors that could have resulted in thousands of ringgit in losses.
              </li>
              <li>
                Created an end-to-end travel management platform with <strong>Laravel</strong>, <strong>NodeJS</strong>, <strong>MySQL</strong>, and <strong>VueJS</strong> that centralizes package inventory, booking processes, payment handling, passenger data, and ticketing operations in one integrated system, enabling efficient tour package management and customer transactions.
              </li>
              <li>
                Developed a <strong>NodeJS</strong> and <strong>ReactJS</strong> application with full <strong>Facebook Graph API</strong> integration to connect sales teams with ad-generated leads. The system automatically syncs campaign lead data, delivers real-time notifications, and presents detailed prospect information in a unified dashboard, significantly improving response times and conversion efficiency.
              </li>
              <li>
                Implemented a WhatsApp-based chatbot assistant using <strong>NodeJS</strong>, <strong>Python</strong>, <strong>LlamaIndex</strong>, and <strong>ChatGPT</strong> that maintains prospect engagement when sales team members are unavailable. The chatbot integrates with the company's travel system to provide context-aware responses, answer customer inquiries, and sustain prospect interest until salespeople return.
              </li>
              <li>
                Developed an HR system using <strong>ReactJS</strong> and <strong>Supabase</strong> to manage staff details, including entry and exit forms, leave applications, and other HR-related processes, streamlining internal operations.
              </li>
              <li>
                Engineered a comprehensive car rental management system using <strong>Pocketbase</strong> and <strong>Go</strong> that enables the sales team to track vehicle availability in real-time, process bookings efficiently, and handle payment transactions securely. This solution streamlines fleet management operations and enhances the customer reservation experience through an optimized backend architecture.
              </li>
              <li>
                Configured, deployed and manage server infrastructure (Digital Ocean) to support backend services and applications.
              </li>
              <li>
                Cut tech expenses by over RM1,000/month by eliminating unnecessary subscriptions and server costs without disrupting operations.
              </li>
            </ul>
          </div>
        </li>
        <li class="section ml-4">
          <div class="absolute w-3 h-3 primary-bg rounded-full mt-1 -left-1.5 border border-white"></div>
          <div class="flex justify-between items-center mb-2 primary-text text-sm">
            <span class="leading-5">September, 2022 - October, 2023</span>
            <div class="flex items-center">
              <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span>Kuala Lumpur</span>
            </div>
          </div>
          <div class="flex flex-col">
            <span class="leading-5 text-base font-bold">Software Engineer</span>
            <span class="leading-5 text-lg font-light">Lizard Global</span>
            <ul class="list-disc pl-4 text-sm text-justify">
              <li>
                Improved and managed a collaborative document editor and a remote signing platform that leverage blockchain technology through <strong>Firebase</strong> and <strong>ReactJS</strong>. This platforms enable users to collaboratively create and edit contracts online in real-time, culminating in the secure signing and preservation of contracts on the blockchain.
              </li>
              <li>
                Developed and consistently maintained e-hailing application for both mobile and web platforms using a tech stack comprising <strong>ExpressJS</strong>, <strong>GraphQL</strong>, <strong>React Native</strong>, and <strong>NextJS</strong>. Proficiently managed the continuous integration and continuous deployment (CI/CD) pipeline through <strong>Azure</strong>. This platform enables users with the convenience to effortlessly schedule taxi rides from anywhere within the Netherlands.
              </li>
              <li>
                Introduced <strong>Typescript</strong> to the project code base to have type safety within the large project. Improved project quality and reduced compile-time errors to 100%.
              </li>
              <li>
                Improved unit test coverage of the codebase from 10% to 40%.
              </li>
            </ul>
          </div>
        </li>
        <li class="section ml-4">
          <div class="absolute w-3 h-3 primary-bg rounded-full mt-1 -left-1.5 border border-white"></div>
          <div class="flex justify-between items-center mb-2 primary-text text-sm">
            <span class="leading-5">March, 2020 - September, 2022</span>
            <div class="flex items-center">
              <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span>Remote</span>
            </div>
          </div>
          <div class="flex flex-col">
            <span class="leading-5 text-base font-bold">Software Engineer</span>
            <span class="leading-5 text-lg font-light">Wen Consulting Pte. Ltd. (Singapore)</span>
            <ul class="list-disc pl-4 text-sm text-justify">
              <li>
                Developed a robust remote signing platform leveraging <strong>ExpressJS</strong>, <strong>VueJS</strong>, and <strong>Java</strong>, enabling users to perform <strong>digital signatures on PDF documents</strong> through the SingPass application, in full compliance with Singaporean legal requirements. This innovative solution significantly enhanced document verification rates, particularly during the challenging times of the COVID-19 pandemic. Leveraged <strong>AWS Serverless functions</strong> for efficient and scalable backend deployment.
              </li>
              <li>
                Built and maintained a module in the company's main product that handles user commission calculation and commission report generation using <strong>NestJS</strong>, <strong>PuppeteerJS</strong> and <strong>VueJS</strong>.
              </li>
              <li>
                Refactored <strong>NestJS</strong> and <strong>Java</strong> backend code base using object-oriented <strong>SOLID</strong> principles to optimize application performance and to improve code customizability and maintainability, reducing customization time for new clients more than 50%.
              </li>
              <li>
                Improved code base unit test coverage from 20% to 50%.
              </li>
            </ul>
          </div>
        </li>
        <li class="section ml-4">
          <div class="absolute w-3 h-3 primary-bg rounded-full mt-1 -left-1.5 border border-white"></div>
          <div class="flex justify-between items-center mb-2 primary-text text-sm">
            <span class="leading-5">March, 2018 - October, 2019</span>
            <div class="flex items-center">
              <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span>Singapore</span>
            </div>
          </div>
          <div class="flex flex-col">
            <span class="leading-5 text-base font-bold">Site Geologist</span>
            <span class="leading-5 text-lg font-light">Geomotion Pte. Ltd. (Singapore)</span>
            <ul class="list-disc pl-4 text-sm text-justify">
              <li>
                Supervised soil investigation works on-site to handle logistics requirements, ensured safety protocols were followed, and met project deadlines—achieving a 100% success rate in delivering projects on time.
              </li>
              <li>
                Prepared borelog reports based on soil and rock samples and conducted downhole seismic data acquisition for MRT station and tunnel construction in Singapore.
              </li>
            </ul>
          </div>
        </li>
        <li class="section ml-4">
          <div class="absolute w-3 h-3 primary-bg rounded-full mt-1 -left-1.5 border border-white"></div>
          <div class="flex justify-between items-center mb-2 primary-text text-sm">
            <span class="leading-5">October, 2016 - October, 2017</span>
            <div class="flex items-center">
              <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span>Kuala Lumpur, Malaysia</span>
            </div>
          </div>
          <div class="flex flex-col">
            <span class="leading-5 text-base font-bold">Mudlogger</span>
            <span class="leading-5 text-lg font-light">Geolog International (Malaysia)</span>
            <ul class="list-disc pl-4 text-sm text-justify">
              <li>
                Analyzed rock cutting samples collected from drilling operations in real time to ensure oil exploration subsurface targets and objectives were achieved.
              </li>
              <li>
                Monitored real time drilling parameters and gas reading to ensure the safety of drilling operation.
              </li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
    <div class="flex flex-col justify-start items-start px-4 pt-4">
      <span class="text-xl font-bold primary-text mb-2">Education</span>
      <ol class="grid grid-cols-2 gap-8 border-t-2 border-gray-200 mt-4">
        <li class="flex flex-col justify-start">
          <div class="relative bottom-3.5 flex items-center">
            <div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-100 rounded-full shrink-0">
                <svg class="w-4 h-4 primary-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
            </div>
            <div class="hidden w-full border-t-2 border-gray-200 h-0"></div>
          </div>
          <div class="flex flex-col justify-start items-start">
            <span class="leading-5 text-base font-bold">BTech in Petroleum Geoscience</span>
            <span class="leading-5 text-sm font-light">Universiti Teknologi PETRONAS</span>
            <span class="leading-5 text-xs font-light">May, 2010 - Oct, 2014</span>
            <p class="leading-5 text-sm text-justify">Major in Petroleum Exploration Geophysics.</p>
          </div>
        </li>
        <li class="flex flex-col justify-start">
          <div class="relative bottom-3.5 flex items-center">
            <div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-100 rounded-full shrink-0">
              <svg class="w-4 h-4 primary-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
            </div>
            <div class="hidden w-full border-t-2 border-gray-200 h-0"></div>
          </div>
          <div class="flex flex-col justify-start items-start">
            <span class="leading-5 text-base font-bold">MSc in Petroleum Geology</span>
            <span class="leading-5 text-sm font-light">Universiti Malaya</span>
            <span class="leading-5 text-xs font-light">Jun, 2015 - Oct, 2016</span>
            <p class="leading-5 text-sm text-justify">Graduate with Distinction and one of the recipients of the ConocoPhillips Scholarship.</p>
          </div>
        </li>
      </ol>
    </div>
    <div class="flex flex-col justify-start items-start px-4 pt-4">
      <span class="text-xl font-bold primary-text mb-2">Technical Skills</span>
      <div class="flex flex-wrap justify-around">
        <span
          v-for="(skill, i) of skills"
          :key="i"
          class="primary-bg text-sm font-semibold px-3 py-2 rounded mb-3"
        >{{ skill }}</span>
      </div>
    </div>
    <div class="flex flex-col justify-start items-start px-4 pt-4">
      <span class="text-xl font-bold primary-text mb-2">Personal Projects</span>
      <div class="flex flex-col space-y-2">
        <div class="flex flex-col mb-2">
          <span class="leading-5 text-base font-bold">Stock Management and Checkout System for Grocery Store (2021)</span>
          <div class="flex space-x-2 flex-wrap my-2">
            <span class="primary-bg text-xs font-semibold px-2.5 py-0.5 rounded">Electron</span>
            <span class="primary-bg text-xs font-semibold px-2.5 py-0.5 rounded">VueJS</span>
            <span class="primary-bg text-xs font-semibold px-2.5 py-0.5 rounded">Sqlite</span>
            <span class="primary-bg text-xs font-semibold px-2.5 py-0.5 rounded">Javascript</span>
          </div>
          <ul class="list-disc pl-4 text-sm text-justify">
            <li>
              Using skills in software development to help a family member in developing an application with features that record in-and-out items, calculating the store cash flows, generate analytics to help in determining future stock planning, and generate financial statements that can be use for tax filing.
            </li>
            <li>
              The application was built using the combination of Electron and VueJS javascript framework and sqlite3 database.
            </li>
          </ul>
        </div>
        <div class="flex flex-col">
          <span class="leading-5 text-base font-bold">Automated Garden Watering System (2022)</span>
          <div class="flex space-x-2 flex-wrap my-2">
            <span class="primary-bg text-xs font-semibold px-2.5 py-0.5 rounded">NestJS</span>
            <span class="primary-bg text-xs font-semibold px-2.5 py-0.5 rounded">VueJS</span>
            <span class="primary-bg text-xs font-semibold px-2.5 py-0.5 rounded">Python</span>
            <span class="primary-bg text-xs font-semibold px-2.5 py-0.5 rounded">Typescript</span>
            <span class="primary-bg text-xs font-semibold px-2.5 py-0.5 rounded">Postgres</span>
          </div>
          <ul class="list-disc pl-4 text-sm text-justify">
            <li>
              Built an automated garden watering system using Raspberry Pi, soil moisture sensor and analog signal converter.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,600;1,700;1,900&display=swap');

.page {
  @apply w-[7.25in] h-[10.75in] m-auto;
  page-break-after: always !important;
}

.section {
  page-break-inside: avoid;
  break-inside: avoid;
}

.primary-bg {
  @apply text-white bg-[#4BB2DB];
}

.primary-text {
  @apply text-[#4BB2DB];
}

.show-page-border {
  @apply border-2 border-gray-600;
}

.profile-pic {
  background-image: url('./assets/passport.jpg');
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>