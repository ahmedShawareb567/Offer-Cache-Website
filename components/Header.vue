<template>
  <div class="container  flex  flex-wrap  md:justify-start  justify-center  gap-x-14  gap-y-5  py-10">
    <h1 class="text-darkblue-500 font-bold md:text-2xl text-xl ">عرض و نقد</h1>
    <ul class="flex items-center md:gap-x-6  gap-x-4 text-gray-500  md:text-base text-sm">
      <li
        v-for="(link, index) in NavLinks"
        :key="index"
        class="text-current font-medium cursor-pointer"
        @click="scrollToNextSection(link.section)"
      >
        {{ link.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const NavLinks = [
  {
    title: "الرئيسية",
    section: "",
  },
  {
    title: "نبذة عنا",
    section: "about-us",
  },
  {
    title: "خدماتنا",
    section: "our-services",
  },
  {
    title: "لماذا نحن؟",
    section: "why-us",
  },
];
function scrollToNextSection(sectionName: string) {
  const nextSection = document.getElementById(sectionName);
  if (nextSection) {
    window.scrollTo({
      top: nextSection.offsetTop,
      behavior: "smooth",
    });
  }
}
</script>
