import { defineConfig } from "vite"; // 帮手函数，不用 jsdoc 注解也可以获取类型提示
import vue from "@vitejs/plugin-vue";
// vite版本3.0.0以上 ，已禁用，使用ES6的import引入
// const { resolve } = require("path");
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  //配置需要使用的插件列表
  plugins: [vue()],

  // 静态资源目录
  publicDir: "public",
  base: "./",

  // 设为false 可以避免 vite 清屏而错过在终端中打印某些关键信息
  clearScreen: false,

  resolve: {
    // 设置文件路径别名
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },

  //本地运行配置，以及反向代理配置
  server: {
    host: "0.0.0.0",
    port: 3000,
    cors: true,             //为开发服务器配置 CORS , 默认启用并允许任何源
    open: true,             //服务启动时自动在浏览器中打开应用
    strictPort: false,      //设为true时端口被占用则直接退出，不会尝试下一个可用端口
  },

  // 打包配置
  build: {
    outDir: "dist",         //指定输出路径
    assetsDir: "assets",    //指定生成静态资源的存放路径
    sourcemap: false,       //是否生产源映射文件
    minify: "terser",       //指定js/css的压缩器，默认terser
    terserOptions: {        //terserOptions的配置项
      compress: {
        drop_console: true, //生产环境移除控制台输出
        drop_debugger: true,//生产环境移除debugger
      },
    },
  },
});
