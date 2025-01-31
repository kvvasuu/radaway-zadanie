<template>
  <div
    class="h-full w-full fixed top-0 left-0 bg-teal-dark/90 flex items-center justify-center z-20"
    ref="modalRef"
    @click="close"
  >
    <div
      class="flex flex-col items-center gap-[10px] bg-white rounded-lg px-[25px] py-[35px] shadow-[-4px_4px_4px_#00000026] z-30 relative"
      @click.stop=""
    >
      <button
        class="absolute top-0 right-0 p-2 cursor-pointer text-black hover:text-teal transition-all duration-300"
        @click="close"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.41424 0L2.9083e-05 1.41421L4.24266 5.65684L0 9.89951L1.41421 11.3137L5.65687 7.07106L9.89952 11.3137L11.3137 9.89949L7.07109 5.65684L11.3137 1.41422L9.89949 1.03665e-05L5.65687 4.24263L1.41424 0Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <h2 class="text-black font-bold text-h2 mb-4">
        Potwierdzenie wysłania formularza
      </h2>
      <ul class="text-black w-full flex flex-col gap-[5px]">
        <li class="w-full flex gap-[10px]">
          <div class="w-1/2 text-right font-bold">Tytuł:</div>
          <div class="w-1/2">{{ data.title }}</div>
        </li>
        <li class="w-full flex gap-[10px]">
          <div class="w-1/2 text-right font-bold">Imię:</div>
          <div class="w-1/2">{{ data.firstName }}</div>
        </li>
        <li class="w-full flex gap-[10px]">
          <div class="w-1/2 text-right font-bold">Nazwisko:</div>
          <div class="w-1/2">{{ data.lastName }}</div>
        </li>
        <li class="w-full flex gap-[10px]">
          <div class="w-1/2 text-right font-bold">Cel podróży:</div>
          <div class="w-1/2">{{ data.travelDestination }}</div>
        </li>
        <li class="w-full flex gap-[10px]">
          <div class="w-1/2 text-right font-bold">Zgoda marketingowa:</div>
          <div class="w-1/2">{{ data.consentMarketing }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Data {
  title: string;
  firstName: string;
  lastName: string;
  travelDestination: string;
  consentMarketing: "tak" | "nie";
}

defineProps<{ data: Data }>();

const emit = defineEmits(["close"]);

const modalRef = ref<HTMLDialogElement | null>(null);

const close = () => {
  emit("close");
};
</script>
