<script setup lang="ts">
import { ref } from "vue";

const skills = ref([
  "Microsoft Excel",
  "AutoCAD",
  "SolidWorks",
  "Autodesk Fusion",
]);

const showBorder = ref(false);
</script>

<template>
  <div class="page" :class="{ 'show-page-border': showBorder }">
    <div class="flex mb-4">
      <div class="profile-pic bg-slate-500 rounded-xl mr-4"></div>
      <div class="flex flex-col justify-start py-4">
        <span class="text-2xl font-bold">Muhammad Fakhruddin Bin Mutussin</span>
        <span class="text-base text-slate-500">Mechanical Engineer</span>
        <span class="text-sm text-justify"
          >Passionate mechanical engineer experienced in designing and
          optimizing systems. Skilled in CAD, project management, and delivering
          high-quality results in fast-paced environments. Continuously
          expanding knowledge and tackling complex challenges for innovative
          solutions.</span
        >
      </div>
    </div>
    <div
      class="bg-slate-200 min-w-[10in] relative left-[50%] flex justify-center items-center"
      style="transform: translateX(-50%)"
    >
      <div class="flex justify-center items-start w-[7.25in] px-4 py-2">
        <div class="flex w-[100%] justify-between">
          <div class="flex justify-start items-center my-1">
            <svg
              class="w-6 h-6 primary-text mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              ></path>
            </svg>
            <span class="text-sm">fakhruddinmutussin@gmail.com</span>
          </div>
          <div class="flex justify-start items-center my-1">
            <svg
              class="w-6 h-6 primary-text mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <span class="text-sm">Kulim, Kedah</span>
          </div>
          <div class="flex justify-start items-center my-1">
            <svg
              class="w-6 h-6 primary-text mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              ></path>
            </svg>
            <span class="text-sm">60198017296</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-start items-start px-4 pt-4">
      <span class="text-xl font-bold primary-text mb-2">Work Experience</span>
      <ol class="relative border-l border-gray-200 space-y-2">
        <li class="section ml-4">
          <div
            class="absolute w-3 h-3 primary-bg rounded-full mt-1 -left-1.5 border border-white"
          ></div>
          <div
            class="flex justify-between items-center mb-2 primary-text text-sm"
          >
            <span class="leading-5">April, 2024 - Present</span>
            <div class="flex items-center">
              <svg
                class="w-3 h-3 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <span>Penang</span>
            </div>
          </div>
          <div class="flex flex-col">
            <span class="leading-5 text-base font-bold"
              >Mechanical Engineer - Packing Department</span
            >
            <span class="leading-5 text-lg font-light"
              >SIBS Sdn Bhd</span
            >
            <ul class="list-disc pl-4 text-sm text-justify">
              <li>
                Oversee mechanical engineering functions and material planning in the packing department within a modular construction manufacturing environment.
              </li>
              <li>
                Design, maintain, and optimize mechanical systems and tools used for packing modular units, ensuring efficiency and compliance with safety standards.
              </li>
              <li>
                Plan, monitor, and control packing materials inventory, ensuring timely availability and minimizing shortages or overstock situations.
              </li>
              <li>
                Collaborate with procurement, warehouse, and production teams to forecast material needs based on project schedules and production capacity.
              </li>
              <li>
                Troubleshoot equipment issues and implement preventive maintenance to reduce machine downtime and increase operational reliability.
              </li>
              <li>
                Analyze packing workflows and propose improvements aligned with SIBS Production System (SPS) principles to increase productivity and reduce waste.
              </li>
              <li>
                Coordinate with suppliers and internal departments for material planning, delivery tracking, and resolving supply issues.
              </li>
            </ul>
          </div>
        </li>
        <li class="section ml-4">
          <div
            class="absolute w-3 h-3 primary-bg rounded-full mt-1 -left-1.5 border border-white"
          ></div>
          <div
            class="flex justify-between items-center mb-2 primary-text text-sm"
          >
            <span class="leading-5">April, 2020 - March, 2024</span>
            <div class="flex items-center">
              <svg
                class="w-3 h-3 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <span>Kota Kinabalu, Sabah</span>
            </div>
          </div>
          <div class="flex flex-col">
            <span class="leading-5 text-base font-bold"
              >Site Engineer / Supervisor M&E</span
            >
            <span class="leading-5 text-lg font-light"
              >Eng Han Engineering</span
            >
            <ul class="list-disc pl-4 text-sm text-justify">
              <li>
                Monitored and reviewed the construction process to ensure that
                all specifications of the item/material were based on customer
                requirements.
              </li>
              <li>
                Supervised by setting goals for performance and deadlines in
                ways that comply with the company's plan and vision.
              </li>
              <li>
                Organized the workflow and ensured that contractors understood
                their duties or delegated tasks.
              </li>
              <li>
                Monitored employee productivity and provided constructive
                feedback.
              </li>
              <li>
                Participated in preliminary conceptual planning for all
                development.
              </li>
              <li>
                Reviewed consultant designs to ensure they are cost-effective,
                satisfying authorities' requirements, and assisted in obtaining
                authorities' approval.
              </li>
              <li>
                Coordinated and supervised operatives' activities, allocated
                tasks, and enforced safety procedures to maintain safety.
              </li>
              <li>
                Inspected construction sites, checked building progress, and
                implemented corrective actions to prevent completion delays.
              </li>
              <li>
                Provided detailed reports and timely updates, keeping clients
                updated on project progress and compliance.
              </li>
            </ul>
          </div>
        </li>
        <li class="section ml-4">
          <div
            class="absolute w-3 h-3 primary-bg rounded-full mt-1 -left-1.5 border border-white"
          ></div>
          <div
            class="flex justify-between items-center mb-2 primary-text text-sm"
          >
            <span class="leading-5">June, 2018 - September, 2018</span>
            <div class="flex items-center">
              <svg
                class="w-3 h-3 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <span>Kota Kinabalu, Sabah</span>
            </div>
          </div>
          <div class="flex flex-col">
            <span class="leading-5 text-base font-bold">Internship</span>
            <span class="leading-5 text-lg font-light"
              >Sabah Electricity Sdn Bhd (Melawa Power Station)</span
            >
            <ul class="list-disc pl-4 text-sm text-justify">
              <li>
                Monitored and reviewed the specifications of raw materials,
                equipment, processes, and finished products at every stage of
                electricity processing.
              </li>
              <li>
                Collaborated with technicians to install a mobile generator in a
                specific location, ensuring it aligned with customer
                requirements and coordinating the installation process
                effectively.
              </li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
    <div class="flex flex-wrap justify-around mt-4 mb-3">
      <span
        v-for="(skill, i) of skills"
        :key="i"
        class="primary-bg text-sm font-semibold px-3.5 py-2 rounded mb-2"
        >{{ skill }}</span
      >
    </div>
    <div class="flex flex-col justify-start items-start px-4">
      <span class="text-xl font-bold primary-text mb-2">Education</span>
      <ol class="grid grid-cols-2 gap-8 border-t-2 border-gray-200 mt-4">
        <li class="flex flex-col justify-start">
          <div class="relative bottom-3.5 flex items-center">
            <div
              class="flex z-10 justify-center items-center w-6 h-6 bg-blue-100 rounded-full shrink-0"
            >
              <svg
                class="w-4 h-4 primary-text"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </div>
            <div class="hidden w-full border-t-2 border-gray-200 h-0"></div>
          </div>
          <div class="flex flex-col justify-start items-start">
            <span class="leading-5 text-base font-bold">Matriculation</span>
            <span class="leading-5 text-sm font-light"
              >Kolej Matrikulasi Labuan</span
            >
            <span class="leading-5 text-xs font-light"
              >May, 2014 - April, 2015</span
            >
            <p class="leading-5 text-sm text-justify">CGPA: 3.67</p>
          </div>
        </li>
        <li class="flex flex-col justify-start">
          <div class="relative bottom-3.5 flex items-center">
            <div
              class="flex z-10 justify-center items-center w-6 h-6 bg-blue-100 rounded-full shrink-0"
            >
              <svg
                class="w-4 h-4 primary-text"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </div>
            <div class="hidden w-full border-t-2 border-gray-200 h-0"></div>
          </div>
          <div class="flex flex-col justify-start items-start">
            <span class="leading-5 text-base font-bold"
              >Bachelor in Mechanical Engineering</span
            >
            <span class="leading-5 text-sm font-light"
              >Universiti Teknikal Melaka</span
            >
            <span class="leading-5 text-xs font-light"
              >September, 2015 - June, 2019</span
            >
            <p class="leading-5 text-sm text-justify">CGPA: 3.34</p>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,600;1,700;1,900&display=swap");

.page {
  @apply w-[7.25in] h-[10.75in] mx-auto;
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
  background-image: url("./assets/passport.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #4BB2DB;
  width: 450px;
}
</style>
