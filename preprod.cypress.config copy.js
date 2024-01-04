const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": "https://opensource-demo.orangehrmlive.com",
    "defaultCommandTimeout":2000,
    "pageLoadTimeout":120000,
    "viewportHeight":1920,
    "viewportWidth":1080,

    "retries":{openMode:3 ,runMode:1 },
    env:{

      "username":"Admgggddrf",
      "password":"admin1ffdd3",
      "loginurl":"https://preprod.opensource-demo.orangehrmlive.com"
    },
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
