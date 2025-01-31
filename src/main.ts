import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

export type Title = "bez tytułu" | "Pan" | "Pani" | "Dr" | "Prof";

createApp(App).mount("#app");
