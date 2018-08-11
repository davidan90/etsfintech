module.exports = {
  verbose: true,
  testURL: "http://localhost/",
  rootDir: "../../",
  moduleNameMapper: {
    "^vue$": "vue/dist/vue.common.js",
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/jest-vue-preprocessor"
  },
  collectCoverageFrom: ["src/**/*.{vue}"],
  snapshotSerializers: ["jest-serializer-vue"]
};
