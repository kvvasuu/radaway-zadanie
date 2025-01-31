<template>
  <ul
    class="w-[125px] bg-white text-black border-[1px] border-gray-mid rounded-lg"
    ref="dropDownRef"
  >
    <li
      class="cursor-pointer hover:font-medium hover:text-teal-darker w-full pt-2 h-full px-[10px]"
      @click="emits('onSelect', 'bez tytułu')"
    >
      bez tytułu
    </li>
    <li
      class="cursor-pointer hover:font-medium hover:text-teal-darker w-full h-full px-[10px]"
      @click="emits('onSelect', 'Pan')"
    >
      Pan
    </li>
    <li
      class="cursor-pointer hover:font-medium hover:text-teal-darker w-full h-full px-[10px]"
      @click="emits('onSelect', 'Pani')"
    >
      Pani
    </li>
    <li
      class="cursor-pointer hover:font-medium hover:text-teal-darker w-full h-full px-[10px]"
      @click="emits('onSelect', 'Dr')"
    >
      Dr
    </li>
    <li
      class="cursor-pointer hover:font-medium hover:text-teal-darker w-full pb-2 h-full px-[10px]"
      @click="emits('onSelect', 'Prof.')"
    >
      Prof.
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const emits = defineEmits(["onSelect", "close"]);

const dropDownRef = ref<HTMLUListElement | null>(null);

const handleClickOutside = (e: Event) => {
  if (
    dropDownRef.value &&
    e.target instanceof Node &&
    !dropDownRef.value.contains(e.target)
  ) {
    emits("close");
    document.removeEventListener("click", handleClickOutside);
    document.removeEventListener("touch", handleClickOutside);
  }
};

onMounted(() => {
  if (dropDownRef.value) {
    setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 0);
  } else {
    document.removeEventListener("click", handleClickOutside);
  }
});
</script>
