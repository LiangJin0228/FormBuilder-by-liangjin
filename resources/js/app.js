import "./bootstrap";

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./components/App.vue";

// Composables
import { createApp } from "vue";

const app = createApp(App);

registerPlugins(app);

app.mount("#app");
