// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// config/unocss.ts
import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";
var types = ["blue", "yellow", "red", "green", "gray"];
var safelist = [
  "text-white",
  ...types.map((t) => `border-${t}-400`),
  ...types.map((t) => `border-${t}-500`),
  ...types.map((t) => `hover:border-${t}-500`),
  ...types.map((t) => `bg-${t}-100`),
  ...types.map((t) => `bg-${t}-200`),
  ...types.map((t) => `bg-${t}-400`),
  ...types.map((t) => `hover:bg-${t}-500`),
  ...types.map((t) => `text-${t}-400`),
  ...types.map((t) => `text-${t}-600`),
  "hover:text-white",
  ...Array.from({ length: 8 }, (_, i) => `px-${i + 1}`),
  ...Array.from({ length: 8 }, (_, i) => `py-${i + 1}`),
  ...Array.from({ length: 14 }, (_, i) => `p-r-${i + 1}`),
  ...Array.from({ length: 14 }, (_, i) => `p-l-${i + 1}`),
  ...["rounded-full", "rounded-lg"],
  ...["xs", "sm", "base", "lg", "xl", "2xl", "3xl"].map((v) => `text-${v}`),
  ...[
    "search",
    "edit",
    "check",
    "message",
    "star-off",
    "delete",
    "add",
    "share",
    "ic:outline-cancel"
  ].map((v) => `i-ic-baseline-${v}`),
  ...[
    "cancel"
  ].map((v) => `i-ic-outline-${v}`)
];
var unocss_default = () => Unocss({
  safelist,
  presets: [presetUno(), presetAttributify(), presetIcons()]
});
{
}

// vite.config.ts
var rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue"
    },
    exports: "named",
    assetFileNames: `assets/[name].[ext]`
  }
};
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueJsx({}),
    unocss_default()
  ],
  build: {
    rollupOptions,
    minify: "terser",
    sourcemap: true,
    brotliSize: true,
    cssCodeSplit: true,
    lib: {
      entry: "./src/entry.ts",
      name: "MeowUI",
      fileName: "meow-ui",
      formats: ["es", "umd", "iife"]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiY29uZmlnL3Vub2Nzcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXDg2MTMzXFxcXERlc2t0b3BcXFxcY2F0LXVpLXZpdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXDg2MTMzXFxcXERlc2t0b3BcXFxcY2F0LXVpLXZpdGVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLzg2MTMzL0Rlc2t0b3AvY2F0LXVpLXZpdGUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcclxuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xyXG5pbXBvcnQgeyBwcmVzZXRVbm8sIHByZXNldEF0dHJpYnV0aWZ5LCBwcmVzZXRJY29ucyB9IGZyb20gXCJ1bm9jc3NcIjtcclxuaW1wb3J0IFVub2NzcyBmcm9tIFwiLi9jb25maWcvdW5vY3NzXCI7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5jb25zdCByb2xsdXBPcHRpb25zID0ge1xyXG5cclxuICAgIGV4dGVybmFsOiBbXCJ2dWVcIiwgXCJ2dWUtcm91dGVyXCJdLFxyXG4gICAgb3V0cHV0OiB7XHJcbiAgICAgICAgZ2xvYmFsczoge1xyXG4gICAgICAgICAgICB2dWU6IFwiVnVlXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBleHBvcnRzOiAnbmFtZWQnLFxyXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiBgYXNzZXRzL1tuYW1lXS5bZXh0XWAsXHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgICB2dWUoKSwgICAgLy8gXHU2REZCXHU1MkEwSlNYXHU2M0QyXHU0RUY2XHJcbiAgICAgICAgdnVlSnN4KHtcclxuICAgICAgICAgICAgLy8gb3B0aW9ucyBhcmUgcGFzc2VkIG9uIHRvIEB2dWUvYmFiZWwtcGx1Z2luLWpzeFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIFVub2NzcygpXHJcbiAgICBdLFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgICByb2xsdXBPcHRpb25zLFxyXG4gICAgICAgIG1pbmlmeTogJ3RlcnNlcicsXHJcbiAgICAgICAgc291cmNlbWFwOiB0cnVlLCAvLyBcdThGOTNcdTUxRkFcdTUzNTVcdTcyRUMgc291cmNlXHU2NTg3XHU0RUY2XHJcbiAgICAgICAgYnJvdGxpU2l6ZTogdHJ1ZSwgIC8vIFx1NzUxRlx1NjIxMFx1NTM4Qlx1N0YyOVx1NTkyN1x1NUMwRlx1NjJBNVx1NTQ0QVxyXG4gICAgICAgIGNzc0NvZGVTcGxpdDogdHJ1ZSxcclxuICAgICAgICBsaWI6IHtcclxuICAgICAgICAgICAgZW50cnk6IFwiLi9zcmMvZW50cnkudHNcIixcclxuICAgICAgICAgICAgbmFtZTogXCJNZW93VUlcIixcclxuICAgICAgICAgICAgZmlsZU5hbWU6IFwibWVvdy11aVwiLFxyXG4gICAgICAgICAgICAvLyBcdTVCRkNcdTUxRkFcdTZBMjFcdTU3NTdcdTY4M0NcdTVGMEZcclxuICAgICAgICAgICAgZm9ybWF0czogW1wiZXNcIiwgXCJ1bWRcIiwgXCJpaWZlXCJdLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59KTsiLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXDg2MTMzXFxcXERlc2t0b3BcXFxcY2F0LXVpLXZpdGVcXFxcY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFw4NjEzM1xcXFxEZXNrdG9wXFxcXGNhdC11aS12aXRlXFxcXGNvbmZpZ1xcXFx1bm9jc3MudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLzg2MTMzL0Rlc2t0b3AvY2F0LXVpLXZpdGUvY29uZmlnL3Vub2Nzcy50c1wiO2ltcG9ydCB7IHByZXNldFVubywgcHJlc2V0QXR0cmlidXRpZnksIHByZXNldEljb25zIH0gZnJvbSBcInVub2Nzc1wiO1xyXG5pbXBvcnQgVW5vY3NzIGZyb20gXCJ1bm9jc3Mvdml0ZVwiO1xyXG5cclxuLy8gY29uc3QgdHlwZXMgPSBbJ3ByaW1hcnknLCAnd2FybmluZycsICdkYW5nZXInLCAnc3VjY2VzcyddXHJcblxyXG5jb25zdCB0eXBlcyA9IFsnYmx1ZScsICd5ZWxsb3cnLCAncmVkJywgJ2dyZWVuJywgJ2dyYXknXTtcclxuXHJcbmNvbnN0IHNhZmVsaXN0ID0gW1xyXG4gICAgJ3RleHQtd2hpdGUnLFxyXG4gICAgLi4udHlwZXMubWFwKHQgPT4gYGJvcmRlci0ke3R9LTQwMGApLFxyXG4gICAgLi4udHlwZXMubWFwKHQgPT4gYGJvcmRlci0ke3R9LTUwMGApLFxyXG4gICAgLi4udHlwZXMubWFwKHQgPT4gYGhvdmVyOmJvcmRlci0ke3R9LTUwMGApLFxyXG5cclxuICAgIC4uLnR5cGVzLm1hcCh0ID0+IGBiZy0ke3R9LTEwMGApLFxyXG4gICAgLi4udHlwZXMubWFwKHQgPT4gYGJnLSR7dH0tMjAwYCksXHJcbiAgICAuLi50eXBlcy5tYXAodCA9PiBgYmctJHt0fS00MDBgKSxcclxuICAgIC4uLnR5cGVzLm1hcCh0ID0+IGBob3ZlcjpiZy0ke3R9LTUwMGApLFxyXG5cclxuICAgIC4uLnR5cGVzLm1hcCh0ID0+IGB0ZXh0LSR7dH0tNDAwYCksXHJcbiAgICAuLi50eXBlcy5tYXAodCA9PiBgdGV4dC0ke3R9LTYwMGApLFxyXG5cclxuICAgICdob3Zlcjp0ZXh0LXdoaXRlJyxcclxuXHJcbiAgICAuLi5BcnJheS5mcm9tKHsgbGVuZ3RoOiA4IH0sIChfLCBpKSA9PiBgcHgtJHtpICsgMX1gKSxcclxuICAgIC4uLkFycmF5LmZyb20oeyBsZW5ndGg6IDggfSwgKF8sIGkpID0+IGBweS0ke2kgKyAxfWApLFxyXG4gICAgLi4uQXJyYXkuZnJvbSh7IGxlbmd0aDogMTQgfSwgKF8sIGkpID0+IGBwLXItJHtpICsgMX1gKSxcclxuICAgIC4uLkFycmF5LmZyb20oeyBsZW5ndGg6IDE0IH0sIChfLCBpKSA9PiBgcC1sLSR7aSArIDF9YCksXHJcbiAgICAuLi5bXCJyb3VuZGVkLWZ1bGxcIiwgXCJyb3VuZGVkLWxnXCJdLFxyXG4gICAgLi4uW1wieHNcIiwgXCJzbVwiLCBcImJhc2VcIiwgXCJsZ1wiLCBcInhsXCIsIFwiMnhsXCIsIFwiM3hsXCJdLm1hcCgodikgPT4gYHRleHQtJHt2fWApLFxyXG4gICAgLi4uW1xyXG4gICAgICAgIFwic2VhcmNoXCIsXHJcbiAgICAgICAgXCJlZGl0XCIsXHJcbiAgICAgICAgXCJjaGVja1wiLFxyXG4gICAgICAgIFwibWVzc2FnZVwiLFxyXG4gICAgICAgIFwic3Rhci1vZmZcIixcclxuICAgICAgICBcImRlbGV0ZVwiLFxyXG4gICAgICAgIFwiYWRkXCIsXHJcbiAgICAgICAgXCJzaGFyZVwiLFxyXG4gICAgICAgICdpYzpvdXRsaW5lLWNhbmNlbCdcclxuICAgIF0ubWFwKCh2KSA9PiBgaS1pYy1iYXNlbGluZS0ke3Z9YCksXHJcbiAgICAuLi5bXHJcbiAgICAgICAgJ2NhbmNlbCdcclxuICAgIF0ubWFwKCh2KSA9PiBgaS1pYy1vdXRsaW5lLSR7dn1gKSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+XHJcbiAgICBVbm9jc3Moe1xyXG4gICAgICAgIHNhZmVsaXN0LFxyXG4gICAgICAgIHByZXNldHM6IFtwcmVzZXRVbm8oKSwgcHJlc2V0QXR0cmlidXRpZnkoKSwgcHJlc2V0SWNvbnMoKV1cclxuICAgIH0pO1xyXG57IH0iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtTLFNBQVMsb0JBQW9CO0FBQy9ULE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7OztBQ0Y0UixTQUFTLFdBQVcsbUJBQW1CLG1CQUFtQjtBQUN6VyxPQUFPLFlBQVk7QUFJbkIsSUFBTSxRQUFRLENBQUMsUUFBUSxVQUFVLE9BQU8sU0FBUyxNQUFNO0FBRXZELElBQU0sV0FBVztBQUFBLEVBQ2I7QUFBQSxFQUNBLEdBQUcsTUFBTSxJQUFJLE9BQUssVUFBVSxPQUFPO0FBQUEsRUFDbkMsR0FBRyxNQUFNLElBQUksT0FBSyxVQUFVLE9BQU87QUFBQSxFQUNuQyxHQUFHLE1BQU0sSUFBSSxPQUFLLGdCQUFnQixPQUFPO0FBQUEsRUFFekMsR0FBRyxNQUFNLElBQUksT0FBSyxNQUFNLE9BQU87QUFBQSxFQUMvQixHQUFHLE1BQU0sSUFBSSxPQUFLLE1BQU0sT0FBTztBQUFBLEVBQy9CLEdBQUcsTUFBTSxJQUFJLE9BQUssTUFBTSxPQUFPO0FBQUEsRUFDL0IsR0FBRyxNQUFNLElBQUksT0FBSyxZQUFZLE9BQU87QUFBQSxFQUVyQyxHQUFHLE1BQU0sSUFBSSxPQUFLLFFBQVEsT0FBTztBQUFBLEVBQ2pDLEdBQUcsTUFBTSxJQUFJLE9BQUssUUFBUSxPQUFPO0FBQUEsRUFFakM7QUFBQSxFQUVBLEdBQUcsTUFBTSxLQUFLLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxHQUFHLE1BQU0sTUFBTSxJQUFJLEdBQUc7QUFBQSxFQUNwRCxHQUFHLE1BQU0sS0FBSyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsR0FBRyxNQUFNLE1BQU0sSUFBSSxHQUFHO0FBQUEsRUFDcEQsR0FBRyxNQUFNLEtBQUssRUFBRSxRQUFRLEdBQUcsR0FBRyxDQUFDLEdBQUcsTUFBTSxPQUFPLElBQUksR0FBRztBQUFBLEVBQ3RELEdBQUcsTUFBTSxLQUFLLEVBQUUsUUFBUSxHQUFHLEdBQUcsQ0FBQyxHQUFHLE1BQU0sT0FBTyxJQUFJLEdBQUc7QUFBQSxFQUN0RCxHQUFHLENBQUMsZ0JBQWdCLFlBQVk7QUFBQSxFQUNoQyxHQUFHLENBQUMsTUFBTSxNQUFNLFFBQVEsTUFBTSxNQUFNLE9BQU8sS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLFFBQVEsR0FBRztBQUFBLEVBQ3hFLEdBQUc7QUFBQSxJQUNDO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNKLEVBQUUsSUFBSSxDQUFDLE1BQU0saUJBQWlCLEdBQUc7QUFBQSxFQUNqQyxHQUFHO0FBQUEsSUFDQztBQUFBLEVBQ0osRUFBRSxJQUFJLENBQUMsTUFBTSxnQkFBZ0IsR0FBRztBQUNwQztBQUVBLElBQU8saUJBQVEsTUFDWCxPQUFPO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUyxDQUFDLFVBQVUsR0FBRyxrQkFBa0IsR0FBRyxZQUFZLENBQUM7QUFDN0QsQ0FBQztBQUNMO0FBQUU7OztBRDNDRixJQUFNLGdCQUFnQjtBQUFBLEVBRWxCLFVBQVUsQ0FBQyxPQUFPLFlBQVk7QUFBQSxFQUM5QixRQUFRO0FBQUEsSUFDSixTQUFTO0FBQUEsTUFDTCxLQUFLO0FBQUEsSUFDVDtBQUFBLElBQ0EsU0FBUztBQUFBLElBQ1QsZ0JBQWdCO0FBQUEsRUFDcEI7QUFDSjtBQUVBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLFNBQVM7QUFBQSxJQUNMLElBQUk7QUFBQSxJQUNKLE9BQU8sQ0FFUCxDQUFDO0FBQUEsSUFDRCxlQUFPO0FBQUEsRUFDWDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0g7QUFBQSxJQUNBLFFBQVE7QUFBQSxJQUNSLFdBQVc7QUFBQSxJQUNYLFlBQVk7QUFBQSxJQUNaLGNBQWM7QUFBQSxJQUNkLEtBQUs7QUFBQSxNQUNELE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUVWLFNBQVMsQ0FBQyxNQUFNLE9BQU8sTUFBTTtBQUFBLElBQ2pDO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==