import { App } from "vue";
import SFCButton from "./button/index.vue";


export { SFCButton };


// 编写一个插件，实现一个install方法
export default {
    install(app: App): void {
        app.component(SFCButton.name, SFCButton);
    },
};