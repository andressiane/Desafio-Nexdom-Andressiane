const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'https://nexdom.tec.br',
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
