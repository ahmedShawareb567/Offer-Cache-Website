<template>
  <div>
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: () => ({
    dir: "rtl",
    lang: "ar",
  }),
  meta: [
    { property: "og:title", content: "عرض و نقد" },
    { property: "og:description", content: "عرض و نقد" },
    { property: "og:image", content: "/og-image.png" },
  ],
});
</script>
