<template>
  <form
    class="w-full max-w-[1200px] h-full flex flex-col items-center py-20 px-9 gap-12"
    onsubmit="return false"
  >
    <header class="w-full flex justify-center items-center gap-6">
      <hr class="grow h-[2px] border-none bg-teal-lighter" />
      <h1 class="font-extrabold text-h1 text-center text-teal uppercase">
        Formularz zgłoszeniowy
      </h1>
      <hr class="grow h-[2px] border-none bg-teal-lighter" />
    </header>
    <fieldset class="flex flex-col items-start gap-6 w-full" id="personal-data">
      <h2 class="font-bold block text-h2 text-gray-darker">Dane osobowe</h2>
      <div
        class="flex flex-col md:flex-row items-start md:items-center justify-start gap-5 md:gap-[10px] w-full text-gray-darker"
      >
        <div class="w-[125px] shrink-0 h-10 relative text-gray-mid">
          <Transition name="fade">
            <DropDown
              class="absolute top-11 left-0 z-10"
              v-if="isDropdownVisible"
              @onSelect="selectTitle"
              @close="isDropdownVisible = false"
            ></DropDown>
          </Transition>
          <label
            for="title"
            class="text-xxs absolute -top-2 left-2 bg-white z-10 px-[5px] select-none"
            >Tytuł <span class="text-red-500">*</span></label
          >
          <button
            id="title"
            class="w-full h-full border-[1px] border-gray-mid rounded-lg relative cursor-pointer"
            @click="isDropdownVisible = !isDropdownVisible"
          >
            <div
              class="absolute h-full top-0 left-2 px-[5px] flex items-center justify-center italic"
              v-if="!title"
            >
              Wybierz
            </div>
            <div
              class="absolute h-full top-0 left-2 px-[5px] flex items-center justify-center text-black"
              v-else
            >
              {{ title }}
            </div>
            <div
              class="absolute h-full flex items-center justify-center right-3 top-0 transition-all duration-300"
              :class="{ 'rotate-180': isDropdownVisible }"
            >
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 0.5L7 6.5L13 0.5" stroke="black" />
              </svg>
            </div>
          </button>
        </div>
        <div class="w-full h-10 relative text-gray-mid">
          <label
            for="title"
            class="text-xxs absolute -top-2 left-2 bg-white z-10 px-[5px] select-none"
            >Imię <span class="text-red-500">*</span></label
          >
          <input
            id="first-name"
            name="first-name"
            autocomplete="off"
            v-model.trim="firstName"
            @change="() => (firstName = formatName(firstName))"
            class="w-full h-full border-[1px] border-gray-mid rounded-lg relative px-[13px] py-2.5 placeholder:italic placeholder:text-gray-mid outline-none text-black"
            type="text"
            placeholder="Imię"
          />
        </div>
        <div class="w-full h-10 relative text-gray-mid">
          <label
            for="title"
            class="text-xxs absolute -top-2 left-2 bg-white z-10 px-[5px] select-none"
            >Nazwisko <span class="text-red-500">*</span></label
          >
          <input
            id="last-name"
            name="last-name"
            autocomplete="off"
            v-model.trim="lastName"
            @change="() => (lastName = formatName(lastName))"
            class="w-full h-full border-[1px] border-gray-mid rounded-lg relative px-[13px] py-2.5 placeholder:italic placeholder:text-gray-mid outline-none text-black"
            type="text"
            placeholder="Nazwisko"
          />
        </div>
      </div>
    </fieldset>
    <fieldset
      class="flex flex-col items-start gap-6 w-full"
      id="travel-destination"
    >
      <h2 class="font-bold block text-h2 text-gray-darker">Cel podróży</h2>

      <h4 class="text-black">
        Proszę wybrać miejsce docelowe. <span class="text-red-500">*</span>
      </h4>

      <div
        class="max-w-full w-full flex justify-center md:justify-between gap-x-10 md:gap-x-2 gap-y-6 flex-wrap"
      >
        <Card
          :place="place"
          v-model="travelDestination"
          v-for="place in PLACES"
        ></Card>
      </div>
    </fieldset>
    <fieldset class="flex flex-col items-start gap-6 w-full" id="consents">
      <h2 class="font-bold block text-h2 text-gray-darker">Zgody</h2>

      <label
        class="inline-flex w-full gap-6 items-center justify-start cursor-pointer select-none"
      >
        <input
          type="checkbox"
          class="sr-only peer"
          v-model="consentData"
          true-value="tak"
          false-value="nie"
          name="consent-data-checkbox"
        />
        <div
          class="shrink-0 relative w-7 h-[18px] bg-white border-[1px] border-gray-mid rounded-full peer peer-checked:after:translate-x-[calc(100%-4px)] after:content-[''] after:absolute after:top-[calc(50%-7px)] after:start-[1px] after:bg-gray-mid after:rounded-full after:h-[14px] after:w-[14px] after:transition-all after:duration-300 transition-all duration-300 peer-checked:after:bg-teal peer-checked:border-teal"
        ></div>
        <div class="flex flex-col gap-[5px] w-full items-start">
          <div class="w-full flex justify-center items-center gap-[10px]">
            <p
              class="text-sm font-bold"
              :class="consentData ? 'text-teal-darker' : 'text-gray-darker'"
            >
              Zgoda na przetwarzanie danych <span class="text-red-500">*</span>
            </p>
            <hr
              class="grow h-[1px] border-none"
              :class="consentData ? 'bg-teal-lighter' : 'bg-gray-lighter'"
            />
          </div>
          <div class="text-xs text-black text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </label>

      <label
        class="inline-flex w-full gap-6 items-center justify-start cursor-pointer select-none"
      >
        <input
          type="checkbox"
          class="sr-only peer"
          v-model="consentMarketing"
          true-value="tak"
          false-value="nie"
          name="consent-marketing-checkbox"
        />
        <div
          class="shrink-0 relative w-7 h-[18px] bg-white border-[1px] border-gray-mid rounded-full peer peer-checked:after:translate-x-[calc(100%-4px)] after:content-[''] after:absolute after:top-[calc(50%-7px)] after:start-[1px] after:bg-gray-mid after:rounded-full after:h-[14px] after:w-[14px] after:transition-all after:duration-300 transition-all duration-300 peer-checked:after:bg-teal peer-checked:border-teal"
        ></div>
        <div class="flex flex-col gap-[5px] w-full items-start">
          <div class="w-full flex justify-center items-center gap-[10px]">
            <p
              class="text-sm font-bold"
              :class="
                consentMarketing ? 'text-teal-darker' : 'text-gray-darker'
              "
            >
              Zgody marketingowe
            </p>
            <hr
              class="grow h-[1px] border-none"
              :class="consentMarketing ? 'bg-teal-lighter' : 'bg-gray-lighter'"
            />
          </div>
          <div class="text-xs text-black text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </label>
    </fieldset>
    <hr class="w-full h-[2px] border-none bg-teal-lighter" />
    <button
      class="uppercase rounded-md py-[10px] px-[13px] text-white text-sm font-bold transition-colors duration-300"
      :class="
        isFormValid
          ? 'bg-teal hover:bg-teal-dark cursor-pointer'
          : 'cursor-not-allowed bg-gray-lighter'
      "
      :disabled="!isFormValid"
      @click.prevent="submitForm"
    >
      Wyślij Zgłoszenie
    </button>
  </form>
  <Transition name="fade">
    <Teleport to="body">
      <SummaryModal
        v-if="isSummaryModalVisible"
        :data="{
          title,
          firstName,
          lastName,
          travelDestination,
          consentMarketing,
        }"
        @close="isSummaryModalVisible = false"
      ></SummaryModal>
    </Teleport>
  </Transition>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import type { Title } from "./main.ts";
import DropDown from "./components/DropDown.vue";
import Card from "./components/Card.vue";
import SummaryModal from "./components/SummaryModal.vue";
import { PLACES } from "./main.ts";

const title = ref<Title | "">("");
const selectTitle = (selectedTitle: Title) => {
  title.value = selectedTitle;
  isDropdownVisible.value = false;
};

const isDropdownVisible = ref(false);

const firstName = ref("");
const lastName = ref("");

const formatName = (name: string) => name.replace(/[^\p{L}]/gu, "");

const travelDestination = ref("");

const consentData = ref<"tak" | "nie">("nie");
const consentMarketing = ref<"tak" | "nie">("nie");

const isFormValid = computed(() => {
  if (
    firstName.value.length < 3 ||
    lastName.value.length < 3 ||
    !title.value ||
    consentData.value === "nie" ||
    !travelDestination.value
  ) {
    return false;
  } else {
    return true;
  }
});

const isSummaryModalVisible = ref(false);

const submitForm = () => {
  if (isFormValid.value) {
    isSummaryModalVisible.value = true;
  }
};
</script>
