<template>
  <form
    class="w-full max-w-[1200px] h-full flex flex-col items-center py-20 px-9 gap-12"
    onsubmit="return false"
  >
    <header class="w-full flex justify-center items-center gap-6">
      <hr class="grow border-[1px] border-teal-lighter" />
      <h1 class="font-extrabold text-4xl text-center text-teal">
        FORMULARZ ZGŁOSZENIOWY
      </h1>
      <hr class="grow border-[1px] border-teal-lighter" />
    </header>
    <fieldset class="flex flex-col items-start gap-6 w-full">
      <h2 class="font-bold block text-[26px] text-gray-darker">Dane osobowe</h2>
      <div
        class="flex items-center justify-start gap-[10px] w-full text-gray-darker"
      >
        <div class="w-[125px] shrink-0 h-10 relative text-gray-mid">
          <label
            for="title"
            class="text-xxs absolute -top-2 left-2 bg-white z-10 px-[5px]"
            >Tytuł <span class="text-red-500">*</span></label
          >
          <button
            id="title"
            class="w-full h-full border-[1px] border-gray-mid rounded-lg relative cursor-pointer"
          >
            <div
              class="absolute h-full top-0 left-2 px-[5px] flex items-center justify-center italic"
            >
              Wybierz
            </div>
            <div
              class="absolute h-full flex items-center justify-center right-3 top-0"
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
            class="text-xxs absolute -top-2 left-2 bg-white z-10 px-[5px]"
            >Imię <span class="text-red-500">*</span></label
          >
          <input
            id="first-name"
            name="first-name"
            :value="firstName"
            class="w-full h-full border-[1px] border-gray-mid rounded-lg relative px-[13px] py-2.5 placeholder:italic placeholder:text-gray-mid outline-none text-black"
            type="text"
            placeholder="Imię"
          >
          </input>
        </div>
        <div class="w-full h-10 relative text-gray-mid">
          <label
            for="title"
            class="text-xxs absolute -top-2 left-2 bg-white z-10 px-[5px]"
            >Nazwisko <span class="text-red-500">*</span></label
          >
          <input
            id="last-name"
            name="last-name"
            :value="lastName"
            @change=""
            class="w-full h-full border-[1px] border-gray-mid rounded-lg relative px-[13px] py-2.5 placeholder:italic placeholder:text-gray-mid outline-none text-black"
            type="text"
            placeholder="Nazwisko"
          >
          </input>
        </div>
      </div>
    </fieldset>
  </form>
</template>

<script setup lang="ts">
import {ref} from 'vue';

const firstName = ref('');
const lastName = ref('');

const formatFirstName = () =>{
  firstName.value = 
}

</script>
