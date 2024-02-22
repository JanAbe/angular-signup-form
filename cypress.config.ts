import { defineConfig } from 'cypress'

export default defineConfig({

  e2e: {
    baseUrl: 'http://localhost:4200',
    video: false,
    viewportWidth: 375,
    viewportHeight: 667,
  },


  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts'
  }

})
