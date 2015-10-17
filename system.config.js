System.config({
  baseURL: "/ts-learn",
  defaultJSExtensions: true,
  transpiler: "none",
  paths: {
    "*": "src/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  }
});
