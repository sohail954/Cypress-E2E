const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/results",
    overwrite: true,
    html: true,
    json: true,
  },

  e2e: {
    baseUrl: "https://naveenautomationlabs.com/opencart",
    video: true,
    videoCompression: 32,
    setupNodeEvents(on, config) {
      return config;
    },
  },

  env: {
    URL: "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  },
});
