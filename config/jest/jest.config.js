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
  collectCoverageFrom: [
    "src/store/modules/**/(mutations|getters|actions).{js}"
  ],
  snapshotSerializers: ["jest-serializer-vue"]
};
