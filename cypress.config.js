const { defineConfig } = require("cypress");

module.exports = defineConfig({
    viewportHeight: 1080,
    viewportWidth: 1920,
    watchForFileChanges: false,
  e2e: {
    setupNodeEvents(on, config) {
      config.defaultCommandTimeout = 10000
      config.pageLoadTimeout = 100000
      config.baseUrl = 'http://juice-shop-sanitarskyi.herokuapp.com'
      // implement node event listeners here
    },
  },
});
