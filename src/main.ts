import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

export type Title = "bez tytułu" | "Pan" | "Pani" | "Dr" | "Prof.";
export interface Place {
  name: string;
  description: string;
}

export const PLACES: Place[] = [
  {
    name: "Auckland",
    description:
      "Miasto w Nowej Zelandii, położone w północno-zachodniej części Wyspy Północnej.",
  },
  {
    name: "Berlin",
    description: "Stolica, największe miasto Niemiec i zarazem kraj związkowy.",
  },
  {
    name: "Toronto",
    description:
      "Największe miasto w Kanadzie i stolica prowincji Ontario. Położone w południowej części Ontario, na północno-zachodnim brzegu jeziora Ontario.",
  },
  {
    name: "Shanghai",
    description:
      "Miasto we wschodnich Chinach, przy ujściu rzeki Jangcy, jedno z czterech miast wydzielonych Chińskiej Republiki Ludowej. ",
  },
];

createApp(App).mount("#app");
