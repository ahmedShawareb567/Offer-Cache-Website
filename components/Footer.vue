<template>
  <footer class="pt-16 bg-gray-700">
    <div
      class="container border-b border-gray-300 pb-20 flex justify-between flex-wrap gap-y-14 items-start"
    >
      <div class="max-w-[399px]">
        <img src="@/assets/images/logo.webp" alt="logo" />
        <p class="font-medium text-gray-300 pt-4 leading-relaxed">
          التسوق لم يكن يومًا بهذه التفاعلية تسوق الآن عبر المزادات المباشرة
          وأكثر واستمتع بالتجربة."
        </p>
      </div>
      <div class="shrink-0">
        <h2 class="font-bold text-lg text-gray-800 pb-4">روابط سريعة</h2>
        <div class="inline-block space-y-2">
          <p class="font-medium text-gray-300">الصفحة الرئيسية</p>
          <p class="font-medium text-gray-300">عن المنصة</p>
        </div>
        <div class="inline-block mx-6 space-y-2">
          <p class="font-medium text-gray-300">الشروط والأحكام</p>
          <p class="font-medium text-gray-300">الأسئلة الشائعه</p>
        </div>
      </div>
      <div>
        <h2 class="font-bold text-lg text-gray-800 pb-4">
          وسائل التواصل الإجتماعي
        </h2>
        <div class="flex gap-x-4">
          <a
            v-for="(item, index) in socialLinks"
            :key="index"
            :href="item.path"
            target="_blank"
          >
            <SvgIcon :name="item.icon" class="size-6" />
          </a>
        </div>
      </div>
    </div>
    <p class="text-center py-6 font-medium text-gray-200/50">
      جميع الحقوق محفوظة <span class="text-gray-200">@ عرض ونقد 2024</span>
    </p>
  </footer>
</template>

<script setup lang="ts">
const socialLinks = [
  {
    path: "",
    icon: "x-icon",
  },
  {
    path: "",
    icon: "facebook",
  },
  {
    path: "",
    icon: "linkedin",
  },
];
</script>
