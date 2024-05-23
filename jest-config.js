module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    verbose: true,
    roots: [
      "./tests"
    ],
    modulePaths: [
      "./__stubs__"
    ],
    moduleNameMapper: {
      ".scss$": "scss-stub.js"
    }
  }