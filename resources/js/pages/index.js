import { registerPlugins } from "@/plugins";
import { createApp } from "vue";
import Index from "../components/Index.vue";

const app = createApp(Index);
registerPlugins(app);
app.mount("#app");
