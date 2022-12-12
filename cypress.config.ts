import { defineConfig } from 'cypress'

export default defineConfig({
  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
  },

  e2e: {
    baseUrl: 'http://localhost:3000',
    video: true,
    videoUploadOnPasses: false,
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
