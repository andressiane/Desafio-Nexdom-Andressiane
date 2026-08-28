const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'https://nexdom.tec.br',

    setupNodeEvents(on, config) {

      return config;
    },
  },
});