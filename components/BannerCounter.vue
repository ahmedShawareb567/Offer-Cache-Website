<template>
  <div ref="container" class="bg-darkblue-500 relative py-16">
    <SvgIcon
      name="arrowsShape"
      class="w-[50px] absolute z-10 top-[2.5rem] h-6 left-14"
    />
    <div
      class="container grid lg:grid-cols-4 md:grid-cols-2 gap-6 grid-cols-1 z-20"
    >
      <div
        v-for="(item, index) in CounterData"
        :key="index"
        class="py-6 flex flex-col items-center"
      >
        <div class="size-24 rounded-full p-3 bg-darkblback-100">
          <img :src="item.img" :alt="item.title + index" class="" />
        </div>
        <h2 class="text-white font-bold text-3xl pt-6 pb-3">
          {{ animatedValues[index] }}{{ item.unit || "" }}
        </h2>
        <p class="text-white font-medium text-lg">{{ item.title }}</p>
      </div>
    </div>
    <img
      src="@/assets/images/bannerCounter/two.webp"
      alt="vector-one"
      class="absolute left-0 bottom-0"
    />
    <img
      src="@/assets/images/bannerCounter/one.webp"
      alt="vector-one"
      class="absolute right-0 top-0"
    />
    <SvgIcon
      name="arrowsShape"
      class="w-[50px] absolute bottom-[2.5rem] h-6 right-14 z-10"
    />
  </div>
</template>

<script setup lang="ts">
import four from "@/assets/images/bannerCounter/court.webp";
import two from "@/assets/images/bannerCounter/hands.webp";
import one from "@/assets/images/bannerCounter/people.webp";
import three from "@/assets/images/bannerCounter/star.webp";

interface TCount {
  img: string;
  num: number;
  title: string;
  unit: string;
}

const CounterData = [
  {
    img: one,
    num: 50000, // Changed from "50,000+" to number
    title: "عدد المستخدمين النشطين",
    unit: "+", // Added separate unit
  },
  {
    img: four,
    num: 10000,
    title: "عدد المزادات المكتملة",
    unit: "+",
  },
  {
    img: three,
    num: 96,
    title: "معدل رضا العملاء",
    unit: "%",
  },
  {
    img: two,
    num: 200,
    title: "عدد الشركاء شريك محلي وعالمي",
    unit: "+",
  },
];

const animatedValues = ref(CounterData.map((_item: TCount) => 0));
const container = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | null = null;

const animateCounters = () => {
  const duration = 2000;
  const startTime = performance.now();

  const step = (timestamp: number) => {
    const progress = timestamp - startTime;
    const percentage = Math.min(progress / duration, 1);

    CounterData.forEach((item, index) => {
      animatedValues.value[index] = Math.floor(item.num * percentage);
    });

    if (percentage < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

const initObserver = () => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
          observer?.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );

  if (container.value) {
    observer.observe(container.value);
  }
};

onMounted(() => {
  initObserver();
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<style scoped>
.count-up {
  animation: count-up 0.5s ease-out forwards;
}

@keyframes count-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
