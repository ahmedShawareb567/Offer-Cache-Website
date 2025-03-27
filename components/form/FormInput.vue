<template>
  <div class="text-start">
    <label :for="id" class="  text-sm  font-medium text-gray-900">
      {{ label }}
    </label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :class="inputClasses"
      class="mt-1 block w-full rounded-lg transition-colors duration-200 h-14 px-4"
      :placeholder="placeholder"
      @input="handleInput"
      @blur="$emit('blur')"
    />
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
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: "text",
});

const emit = defineEmits<{
  "update:modelValue": [value: string];
  // eslint-disable-next-line style/quote-props
  blur: [];
  "dirty": [isDirty: boolean];
}>();

const handleInput = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  emit("update:modelValue", value);
  emit("dirty", true);
};

const showError = (error: string | undefined) => computed(() => error && (props.isDirty || props.isBlurred));

const inputClasses = computed(() => ({
  "border border-red-500 focus:border-red-500 focus:ring focus:ring-red-500/15 focus:ring-opacity-50": showError(props.error).value,
  "border border-gray-100 focus:border-blue-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50": !showError(props.error).value,
}));
</script>
