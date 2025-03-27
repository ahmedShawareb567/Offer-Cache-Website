<template>
  <div class="py-16">
    <div class="container">
      <UiTitle title="آراء عملائنا" class="mr-4" />
      <swiper-wrapper
        class="mt-12 relative"
        :items="slideItems"
        :options="swiperOptions"
        :arrows="true"
      >
        <template #default="">
          <div
            class="max-w-[580px] mx-auto p-8 rounded-2xl bg-gray-150/50 flex flex-col text-center items-center"
          >
            <img
              src="https://i.scdn.co/image/ab6761610000e5eb52c3678aba6b9122afebc341"
              alt="client_img"
              class="size-24 rounded-full"
            />
            <h2 class="font-bold text-darkblback-200 mt-5">محمود رمضان</h2>
            <h3 class="text-gray-600 mb-4 mt-2">رئيس مجلس ادارة شركة العطاء</h3>
            <p class="text-gray-300">
              عرض ونقد" هي منصة إلكترونية حديثة تدمج بين اساليب البيع المختلفة
              والمتنوعة مثل المزادات الحية والبث المباشر، لخلق تجربة تسوق فريدة
              وآمنة. نحن متخصصون في تقديم المنتجات الموسمية والسلع المتنوعة
              محليًا وعالميًا."
            </p>
          </div>
        </template>
      </swiper-wrapper>
    </div>
  </div>
</template>

<script setup lang="ts">
const swiperOptions = {
  autoPlay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    2500: {
      slidesPerView: 1,
      spaceBetween: 16,
      centeredSlides: true,
    },
    1081: {
      slidesPerView: 1,
      spaceBetween: 16,
      centeredSlides: true,
    },
    991: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
  },
  pagination: true,
};

const slideItems = [
  { id: 1, content: "Slide 1" },
  { id: 2, content: "Slide 2" },
  { id: 3, content: "Slide 3" },
  { id: 4, content: "Slide 4" },
  { id: 5, content: "Slide 5" },
];
</script>

<style scoped></style>
