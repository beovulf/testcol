const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#ED2B91", // primary color for all components
      "@link-color": "#1890ff", // link color
      "@success-color": "#1591A0", // success state color
      "@warning-color": "#a00d5b", // warning state color
      "@error-color": "#ED2B91", // error state color
      "@layout-header-background": "#0FA7BA"
    }
  })
);
