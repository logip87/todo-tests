const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 3000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  scrollBehavior: "center",
  watchForFileChanges: false,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/report",
    reportFilename: "index",
    reportPageTitle: "Cypress - Report",
    overwrite: true,
    html: false,
    json: true,
    cdn: true,
    video: false,
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  e2e: {
    baseUrl: "https://todomvc.com/examples/react/#/",
    specPattern: "cypress/e2e",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
