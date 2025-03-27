<template>
  <h2 :class="cn(` font-bold  text-3xl  after:size-[76px] w-fit   after:absolute  after:rounded-full  after:top-1/2 after:-translate-y-1/2  after:-right-4 after:-z-10 z-20 relative  after:bg-blue-300`, customClass)">
    {{ title }}
  </h2>
</template>

<script setup>
import { cn } from '@/lib/utils'; // Adjust the path as needed

// eslint-disable-next-line unused-imports/no-unused-vars
const props = defineProps({
  title: {
    type: String, // Prop type
    required: true, // Prop is required
  },
  customClass: {
    type: String, // Prop type
    default: '', // Default value if not provided
  },
});
</script>
