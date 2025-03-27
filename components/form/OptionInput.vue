<template>
  <div class="text-start">
    <label :for="id" class="text-sm  font-medium text-gray-900">
      {{ label }}
    </label>
    <select
      :id="id"
      :value="modelValue"
      :class="inputClasses"
      class="mt-1 block w-full rounded-lg transition-colors text-gray-900 duration-200 h-14 px-4"
      @change="handleInput"
      @blur="$emit('blur')"
    >
      <option value="" disabled selected class="text-gray-900">{{ placeholder }}</option>
      <option value="اقتراح" class=" text-gray-900">اقتراح</option>
      <option value="شكوي" class=" text-gray-900">شكوي</option>
    </select>
    <p v-if="showError(props.error)" class="mt-1 text-sm text-red-500">
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  id: string;
  placeholder: string;
  modelValue: string;
  type?: string;
  error?: string;
  isDirty?: boolean;
  isBlurred?: boolean;
  label?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: "select", // Changed default type to select
});

const emit = defineEmits<{
  "update:modelValue": [value: string];
  // eslint-disable-next-line style/quote-props
  blur: [];
  "dirty": [isDirty: boolean];
}>();

const handleInput = (event: Event) => {
  const value = (event.target as HTMLSelectElement).value;
  emit("update:modelValue", value);
  emit("dirty", true);
};

const showError = (error: string | undefined) => computed(() => error && (props.isDirty || props.isBlurred));

const inputClasses = computed(() => ({
  "border border-red-500 focus:border-red-500 focus:ring focus:ring-red-500/15 focus:ring-opacity-50": showError(props.error).value,
  "border border-gray-100 focus:border-blue-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50": !showError(props.error).value,
}));
</script>
