  const cucumber = require('cypress-cucumber-preprocessor').default
//   const fs = require('fs');
// const path = require('path');
const { defineConfig } = require('cypress');
// const path = require('path');
// const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
// const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

      //   // Set up Cucumber preprocessor
      // addCucumberPreprocessorPlugin(on, config)

      // // Set up Mochawesome reporter
      // require('cypress-mochawesome-reporter/plugin')(on)

      // // Handle file preprocessor for Cucumber
      // on('file:preprocessor', createBundler())


      on('task', {
        fileExists(filePath) {
          // Return true if the file exists, otherwise false
          return fs.existsSync(filePath);
        },
      });
      on('after:screenshot', (details) => {
        const screenshotPath = details.path;
        const status = details.state; // "passed" or "failed"

        // Log the screenshot path and status for debugging or handling
        console.log(`Screenshot taken for step: ${screenshotPath}, Status: ${status}`);

        return null; // Returning null keeps the default behavior
      });



      
       on('file:preprocessor', cucumber())
      //   on('before:browser:launch', (browser = {}, launchOptions) => {
      //   if (browser.name === 'chrome') {
      //     launchOptions.args.push('--incognito'); // Add the --incognito flag
      //   }
      //   return launchOptions;
      // });

  
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
            launchOptions.args.push("--incognito");                
            return launchOptions
        }

        if (browser.name === 'electron') {                
            launchOptions.preferences.incognito = true               
            return launchOptions
        }
    })    






      return config;

  
    },
 experimentalModifyObstructiveThirdPartyCode: true,
    chromeWebSecurity: false,
    experimentalRunAllSpecs: true,
     "env": {
    "chromeOptions": {
      "args": [
        "--disable-popup-blocking",
        "--disable-print-preview"
      ]
    }
  },


     defaultCommandTimeout: 20000,

    specPattern: "cypress/e2e/Features/*.feature",
  },
  // env: {
  //   "DISABLE_PRINT_DIALOG": false
  // }
//      video: true,
//     reporter: 'mochawesome',
// reporterOptions: {
//   reportDir: 'cypress/reports/mochawesome', // Directory to store the reports
//   overwrite: false,  // Do not overwrite existing reports
//   html: true,        // Generate HTML report
//   json: true,        // Generate JSON report
// },
});
