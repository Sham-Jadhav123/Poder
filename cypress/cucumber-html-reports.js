



const report = require('multiple-cucumber-html-reporter');
 
report.generate({
    jsonDir: 'cypress/cucumber-json',
    reportPath: './reports/multiple-cucumber-report.html',
    metadata:{
        browser: {
            name: 'chrome',
            version: '134'
        },
        device: 'Local test machine',
        platform: {
            name: 'MacBookPro',
            
        }
    },
  customData: {
    title: "Test Report",
    data: [
      { label: "Project", value: "Poder_Automation (Shyam)" },
      { label: "Version", value: "1.0.0" },
      { label: "Executed On", value: new Date() },
    ],
  },

});
 













// const report = require("multiple-cucumber-html-reporter");
// const fs = require("fs");
// const path = require("path");
// const getScreenshotPath = (screenshotName) => {
//   return path.join('file://', path.resolve('cypress/screenshots', screenshotName));
// }
// report.generate({
// jsonDir: "cypress/cucumber-json",  // ** Path of .json file **//
// reportPath: "./reports/cucumber-htmlreport.html",
// metadata: {
// browser: {
// name: "chrome",
// version: "81",
// },
// device: "Local test machine",
// platform: {
// name: "mac",
// version: "Catalina",
// },
  
// },
// // screenshots: {
// //     path: "cypress/screenshots",  // Path to where screenshots are stored
// //     capture: "fullPage" ,
// //     addScreenshotToReport: true, // Capture full page screenshots, or 'viewport' for just the visible area
// //   },
// //   displayDuration: true,  // Show duration for each step
// //   displaySuccesses: true, // Show successes in the report


// screenshots: {
//     path: "cypress/screenshots",  // Path to screenshots folder
//     addScreenshotToReport: true,  // Add screenshots to the report
//     screenshotFunction: getScreenshotPath,  // Attach screenshots to the report
//   },
//   customData: {
//     title: "Test Report",
//     data: [
//       { label: "Project", value: "Poder Automation" },
//       { label: "Version", value: "1.0.0" },
//       { label: "Executed On", value: new Date() },
//     ],
//   },
// });