// // ***********************************************************
// // This example support/e2e.js is processed and
// // loaded automatically before your test files.
// //
// // This is a great place to put global configuration and
// // behavior that modifies Cypress.
// //
// // You can change the location of this file or turn off
// // automatically serving support files with the
// // 'supportFile' configuration option.
// //
// // You can read more here:
// // https://on.cypress.io/configuration
// // ***********************************************************

// // Import commands.js using ES2015 syntax:
import './commands';
import 'cypress-file-upload';
import 'cypress-xpath'
import 'cypress-cucumber-attach-screenshots-to-failed-steps'

// // afterEach(() => {
// //   const screenshotsFolder = Cypress.config("screenshotsFolder");
  
// //   // Ensure cucumberJson and testState are available
// //   if (window.cucumberJson?.generate) {
// //     const testState = window.testState;
// //     const stepResult = testState.runTests[testState.currentScenario.name][testState.currentStep];

// //     if (stepResult?.status === "failed") {
// //       // Create a screenshot filename
// //       const screenshotFileName = `${testState.feature.name} -- ${testState.currentScenario.name} (failed).png`;
      
// //       // Build the full path to the screenshot
// //       const screenshotPath = `${screenshotsFolder}/${Cypress.spec.name}/${screenshotFileName}`;

// //       // Read the screenshot as a base64 string
// //       cy.readFile(screenshotPath, 'base64').then((imgData) => {
// //         // Attach the screenshot to the failed test step
// //         stepResult.attachment = {
// //           data: imgData,
// //           media: { type: "image/png" },
// //           index: testState.currentStep,
// //           testCase: testState.formatTestCase(testState.currentScenario),
// //         };
// //       });
// //     }
// //   }
// // });














// // // afterEach hook
// // afterEach(() => {
// //   const screenshotsFolder = Cypress.config('screenshotsFolder');
// //   const stepStatus = Cypress.mocha.getRunner().stats.failures > 0 ? 'failed' : 'passed'; // Determine pass/fail status

// //   // Check if cucumberJson and testState are available
// //   if (window.cucumberJson?.generate && window.testState) {
// //     const testState = window.testState;
// //     const currentScenario = testState.currentScenario;
// //     const currentStep = testState.currentStep;
// //     const stepResult = testState.runTests[currentScenario.name][currentStep];

// //     // Determine the step status (pass, fail, or skip)
// //     const status = stepResult ? stepResult.status : 'skipped'; // 'skipped' if step result does not exist

// //     // Create a screenshot filename based on the test status (pass, fail, or skip)
// //     const screenshotFileName = `${testState.feature.name} -- ${currentScenario.name} (${status}).png`;

// //     // Build the full path to the screenshot
// //     const screenshotPath = `${screenshotsFolder}/${Cypress.spec.name}/${screenshotFileName}`;

// //     // Check if the screenshot exists before trying to read it
// //     cy.task('fileExists', screenshotPath).then((fileExists) => {
// //       if (fileExists) {
// //         // If the file exists, read the screenshot as a base64 string and attach it to the step result
// //         cy.readFile(screenshotPath, 'base64').then((imgData) => {
// //           // Attach the screenshot to the step result, regardless of pass, fail, or skip
// //           stepResult.attachment = {
// //             data: imgData,
// //             media: { type: 'image/png' },
// //             index: currentStep,
// //             testCase: testState.formatTestCase(currentScenario),
// //           };

// //           cy.log('Screenshot attached successfully');
// //         });
// //       } else {
// //         cy.log(`Screenshot not found: ${screenshotPath}`);
// //       }
// //     });
// //   } else {
// //     cy.log('CucumberJson or testState not available, skipping screenshot attachment.');
// //   }

// //   // Explicitly take screenshots for passed and skipped steps as well
// //   if (stepStatus === 'passed') {
// //     // Explicitly capture a screenshot for passed steps
// //     cy.screenshot(`${Cypress.spec.name} -- passed`, { capture: 'viewport' });
// //   } else if (stepStatus === 'skipped') {
// //     // Explicitly capture a screenshot for skipped steps
// //     cy.screenshot(`${Cypress.spec.name} -- skipped`, { capture: 'viewport' });
// //   }
// // });










// afterEach(() => {
//   const screenshotsFolder = Cypress.config("screenshotsFolder");
  
//   // Ensure cucumberJson and testState are available
//   if (window.cucumberJson?.generate) {
//     const testState = window.testState;
//     const stepResult = testState.runTests[testState.currentScenario.name][testState.currentStep];

//     if (stepResult?.status === "failed") {
//       // Create a screenshot filename
//       const screenshotFileName = `${testState.feature.name} -- ${testState.currentScenario.name} (failed).png`;
      
//       // Build the full path to the screenshot
//       const screenshotPath = `${screenshotsFolder}/${Cypress.spec.name}/${screenshotFileName}`;

//       // Read the screenshot as a base64 string
//       cy.readFile(screenshotPath, 'base64').then((imgData) => {
//         // Attach the screenshot to the failed test step
//         stepResult.attachment = {
//           data: imgData,
//           media: { type: "image/png" },
//           index: testState.currentStep,
//           testCase: testState.formatTestCase(testState.currentScenario),
//         };
//       });
//     }
//   }
// });
