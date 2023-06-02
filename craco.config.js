const path = require("path");
const CracoLessPlugin = require("craco-less");

const resolve = (pathname) => path.resolve(__dirname, pathname);

module.exports = {
  //   配置craco less
  plugins: [{ plugin: CracoLessPlugin }],

  //配置webpack
  webpack: {
    // 配置别名
    alias: {
      "@": resolve("src"),
    },
  },
};
