const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {

    "specPattern":"**/*.feature",

    "baseUrl": "https://opensource-demo.orangehrmlive.com",
    //"defaultCommandTimeout":2000,
    //"pageLoadTimeout":120000,
    //"viewportHeight":1840,
    //"viewportWidth":1060,

    "retries":{openMode:1 ,runMode:1 },
    env:{

      "username":"Admin",
      "password":"admin123",
      "loginurl":"https://opensource-demo.orangehrmlive.com"
    },
    "video":true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {downloadFile})
    },
  },
});
