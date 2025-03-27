<template>
  <div id="our-services" class="container  md:py-16  py-10  ">
    <UiTitle title="خدماتنا" class=" mr-4" />
    <div class=" grid md:grid-cols-3 grid-cols-1 pt-12 gap-5  ">
      <div v-for="(service, index) in OurServicesData" :key="index" class=" text-center rounded-2xl shadow-md shadow-blue-600 py-8 px-6 hover:border-2  min-h-[296px] border-0 transition-color ease-in-out duration-100 hover:border-blue-700">
        <img :src="service.image" :alt="service.title" class="  mx-auto">
        <h3 class="mt-6 mb-4 font-bold  text-lg text-darkblback-200 ">{{ service.title }}</h3>
        <p class=" text-gray-200">{{ service.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import one from '@/assets/images/services/one.webp'
import three from '@/assets/images/services/three.webp'
import two from '@/assets/images/services/two.webp'

const OurServicesData = [
  {
    image: one,
    title: "المزادات المباشرة",
    desc: "توفر المنصة تجربة مزادات حية عبر بث حي تتيح للمشترين التفاعل المباشر مع البائعين.",
  },
  {
    image: two,
    title: 'المزادات الغير المباشرة',
    desc: "منتجات موسمية عالية الجودة متاحة للمزايدة خلال فترة معينة.",
  },
  {
    image: three,
    title: "البيع المباشر",
    desc: "إمكانية الشراء المباشر لمنتجات مختلفة ومميزة دون الحاجة للمشاركة في المزادات.",
  },
];
</script>
