const allureWriter = require ('@shelex/cypress-allure-plugin/writer');

module.exports = {

  projectId: "2vh5pi",
  watchForFileChanges: false,
  downloadsFolder: "cypress/downloads",
  videosFolder: "cypress/videos",
  screenshotOnRunFailure: false,
  //screenshotFolder: "cypress/screenshots",
  scrollBehavior: "center",
  reporter: "cypress-multi-reporters",
  reporterOptions: {
      configFile: "reporter-config.json"
  },

  e2e: {
    supportFile: false,
    specPattern: [ "cypress/e2e/**/*.cy.js", "cypress/e2e/**/*.api.cy.js"],
    experimentalRunAllSpecs: true,
    watchForFileChanges: false,
    viewportWidth: 1280,
    viewportHeight: 768,

    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },

    env: {
      allure: true,
      allureReuseAfterSpec: true,
      allureResultPath:'test_results/allure-results',

    }

  
  },
};
