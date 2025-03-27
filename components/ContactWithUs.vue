<template>
  <div class="bg-gray-700 py-16">
    <div class="container">
      <ui-title title="تواصل معنا" class="mr-4" />
      <div class="grid md:grid-cols-3 grid-cols-1 gap-6 mt-12">
        <div class="  col-span-1 bg-white rounded-lg py-12 px-6 space-y-6">
          <h2 class="font-bold text-gray-800 text-lg mb-6">معلومات التواصل</h2>
          <div
            v-for="(item, index) in contactInfo"
            :key="index"
            class="flex items-start gap-3"
          >
            <SvgIcon :name="item.icon" class="size-6 mt-1 text-darkblue-500" />
            <div>
              <a
                :href="`${item.href}:${item.value}`"
                class="text-gray-300 hover:text-darkblue-500 transition-colors"
              >
                {{ item.value }}
              </a>
            </div>
          </div>
        </div>
        <div class="md:col-span-2 bg-white rounded-lg py-12 px-6">
          <h2 class="text-lg font-bold text-gray-800 mb-6">
            لديك اقتراح أو شكوى؟ تواصل معنا!
          </h2>
          <FormContactForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const contactInfo = [
  {
    href: "tel",
    value: "+123456789",
    icon: "phone",
  },
  {
    href: "mailto",
    value: "info@example.com",
    icon: "mail",
  },
  {
    value: "123 شارع التسوق، المدينة",
    icon: "address",
  },
];
</script>
