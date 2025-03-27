<template>
  <div id="why-us" class="container pt-16 md:px-0 pb-32">
    <UiTitle title="لماذا نحن؟" class="mr-4" />
    <div class="flex lg:flex-nowrap flex-wrap justify-center gap-16 mt-12">
      <div class="w-[1000px] h-fit">
        <div class="grid md:grid-cols-7 grid-cols-1 gap-4">
          <div
            v-for="(itme, index) in whyUsData"
            :key="index"
            :class="`${itme.class}   `"
            class="rounded-2xl p-6"
          >
            <div class="w-fit rounded-full p-3" :class="`${itme.color}`">
              <SvgIcon :name="itme.icon" class="size-14 bg" />
            </div>
            <h4 class="font-bold text-darkblback-200 text-lg pt-3 pb-2">
              {{ itme.title }}
            </h4>
            <p class="text-gray-500 leading-relaxed">{{ itme.des }}</p>
          </div>
        </div>
      </div>

      <div class="relative w-fit">
        <span
          class="size-[563px] rounded-full bg-blue-300/10 top-1/2 -translate-y-1/2 absolute right-[8rem]"
        >
        </span>
        <img
          src="@/assets/images/Group 1.webp"
          alt="phone_image"
          class="relative z-10 shrink-0"
        />
        <span
          class="absolute -z-10 inset-0 m-auto size-[363px] rounded-full bg-gray-100"
        ></span>
      </div>
    </div>
  </div>
</template>

<script setup>
const whyUsData = [
  {
    color: "bg-[#F94A4A33]",
    class: "md:col-span-4 bg-[#F94A4A0F]",
    icon: "boxred",
    title: "تنوع المنتجات",
    des: "نقدم منتجات موسمية متنوعة تلبي احتياجات العملاء، مثل الفواكه والخضراوات والتوابل والسلع النادرة.",
  },
  {
    color: "bg-[#FFA32233]",
    class: " md:col-span-3 bg-[#FFA32214]",
    icon: "verify-yellow (1)",
    title: "جودة مضمونة",
    des: "نعمل مع أفضل الموردين والمزارعين لضمان جودة المنتجات",
  },
  {
    color: "bg-[#E232D233]",
    class: "md:col-span-3 bg-[#E232D20F]",
    icon: "light (1)",
    title: "تجربة مبتكرة",
    des: "مع المزادات الحية والبث المباشر، نجعل التسوق ممتعًا وتفاعليًا.",
  },
  {
    color: "bg-[#0169D633]",
    class: " md:col-span-4 bg-[#0169D60F]",
    icon: "verify_blue (1).svg",
    title: "أمان المعاملات",
    des: "نستخدم تقنيات تشفير متقدمة لحماية بيانات المستخدمين وضمان عمليات دفع آمنة.",
  },
];
</script>

<style lang="scss" scoped></style>
