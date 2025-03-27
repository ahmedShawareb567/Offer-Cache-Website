<template>
  <div>
    <client-only>
      <div class="relative currentSwiper">
        <div :class="{ 'lg:px-0': arrows }">
          <Swiper
            :modules="[
              SwiperAutoplay,
              SwiperNavigation,
              SwiperPagination,
              SwiperEffectFade,
            ]"
            :slides-per-view="currentProps?.slidesPerView"
            :loop="currentProps?.loop"
            :autoplay="currentProps?.autoPlay"
            :space-between="currentProps?.spaceBetween"
            :breakpoints="currentProps?.breakpoints"
            :centered-slides="currentProps?.centeredSlides"
            v-bind="mapCurrentProps"
            :items="items"
            :effect="currentProps?.effect"
            :options="options"
            @swiper="onSwiperLoad"
            @slide-change="onSlideChange"
          >
            <SwiperSlide
              v-for="(item, index) in items"
              :key="item?.id || index"
              class="!h-auto"
              :class="{ 'active-slide': index === swiper?.activeIndex }"
            >
              <slot :item="item" />
            </SwiperSlide>
            <div
              v-if="arrows"
              class="hidden absolute w-full h-fit z-10 top-1/2 -translate-y-1/2 md:flex arrow justify-between rtl:space-x-reverse"
            >
              <button
                class="bg-[#022344] text-white size-10 flex justify-center items-center rounded-full transition-colors"
                @click="swiper?.slidePrev()"
              >
                <svg-icon name="arrow-right" class="text-current" />
              </button>

              <button
                class="bg-[#022344] size-10 text-white flex justify-center items-center rounded-full disabled:cursor-not-allowed transition-colors"
                @click="swiper?.slideNext()"
              >
                <svg-icon name="arrow-right" class="text-current rotate-180" />
              </button>
            </div>
          </Swiper>
        </div>
      </div>
      <template #fallback>
        <slot name="fallback" />
      </template>
    </client-only>
  </div>
</template>

<script setup lang="ts">
type SlideItem = {
  id?: string | number;
  [key: string]: any;
};

type OptionsType = {
  slidesPerView?: number;
  loop?: boolean;
  autoPlay?:
    | {
        delay?: number;
        disableOnInteraction?: boolean;
      }
    | boolean;
  centeredSlides?: boolean;
  spaceBetween?: number;
  effect?: "slide" | "fade" | "cube" | "coverflow" | "flip";
  breakpoints?: Record<
    number,
    {
      slidesPerView?: number;
      spaceBetween?: number;
      centeredSlides?: boolean;
    }
  >;
  pagination?: boolean;
  grid?: {
    rows: number;
    fill?: "row" | "column";
  };
};

interface Props {
  items: SlideItem[];
  options?: OptionsType;
  arrows?: boolean;
  gridRows?: number;
}

const props = withDefaults(defineProps<Props>(), {
  options: () => ({
    slidesPerView: 1,
    loop: true,
    autoPlay: false,
    spaceBetween: 30,
    pagination: false,
    centeredSlides: false,
    breakpoints: {},
    grid: undefined,
  }),
  arrows: false,
  gridRows: 1,
});
const emit = defineEmits(["slide-change"]);
const currentProps = computed(() => {
  return {
    ...props?.options,
  };
});

const mapCurrentProps = computed(() => {
  return {
    ...(currentProps.value?.pagination && {
      pagination: { clickable: true },
    }),
  };
});

const swiper = ref();

type SwiperInstance = {
  slideNext?: () => void;
  slidePrev?: () => void;
  activeIndex?: number;
  realIndex?: number;
};

const onSwiperLoad = (value: SwiperInstance) => {
  swiper.value = value;
};

const onSlideChange = (swiperInstance: SwiperInstance) => {
  swiper.value = swiperInstance;
  // eslint-disable-next-line vue/custom-event-name-casing
  emit("slide-change", swiperInstance.realIndex); // استخدام الفهرس الحقيقي في وضع الحلقة
};

const next = () => {
  swiper.value?.slideNext();
};

const prev = () => {
  swiper.value?.slidePrev();
};

const slideTo = (index: number) => {
  if (swiper.value) {
    swiper.value.slideTo(index);
  }
};

defineExpose({
  next,
  prev,
  slideTo,
});
</script>

<style lang="postcss">
.currentSwiper {
  .swiper {
    &-pagination {
      @apply relative flex mt-10 !bottom-0 items-center justify-center;
      &-bullet {
        @apply !w-2 !h-2   bg-darkblue-500/60;
        &-active {
          @apply bg-darkblue-500;
        }
      }
    }
  }
}

.active-slide {
  transition: opacity 0.4s ease-in-out;
  opacity: 1;
}
.active-button {
  background-color: white;
  color: #9747ff;
}
</style>
