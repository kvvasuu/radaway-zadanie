<template>
  <label
    class="w-[235px] rounded-lg flex flex-col items-center justify-start relative overflow-hidden transition-all duration-300 cursor-pointer"
    :class="
      !isChecked ? 'bg-gray-light shadow-small' : 'bg-teal-light shadow-big'
    "
  >
    <input
      type="radio"
      v-model="model"
      :value="place.name"
      class="sr-only peer"
    />

    <div
      class="absolute flex box-content items-center justify-center top-[10px] right-[10px] w-4 h-4 bg-white border-[1px] rounded-md transition-all duration-300 z-10"
      :class="!isChecked ? 'border-gray-mid' : 'border-teal'"
    >
      <div
        class="w-2 h-2 bg-teal rounded-xs transition-all duration-300"
        :class="!isChecked ? 'opacity-0' : 'opacity-100'"
      ></div>
    </div>

    <img
      :src="`/${place.name.toLowerCase()}.png`"
      :alt="place.name"
      class="w-full h-[195px] select-none"
      draggable="false"
      :class="{ grayscale: !isChecked }"
    />
    <article
      class="flex flex-col items-start gap-[10px] py-[10px] px-[15px] transition-all duration-300"
      :class="!isChecked ? 'text-black' : 'text-teal-dark'"
    >
      <h4 class="font-extrabold uppercase">
        {{ place.name }}
      </h4>
      <div class="text-sm">{{ place.description }}</div>
    </article>
  </label>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Place } from "../main";

const props = defineProps<{ place: Place }>();
const model = defineModel();

const isChecked = computed(() => model.value == props.place.name);
</script>
