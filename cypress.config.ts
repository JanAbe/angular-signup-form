import { defineConfig } from 'cypress'
import {addCucumberPreprocessorPlugin} from "@badeball/cypress-cucumber-preprocessor";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  e2e: {
    specPattern: '**/*.feature',
    baseUrl: 'http://localhost:4200',
    video: false,
    viewportWidth: 375,
    viewportHeight: 667,
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    }
  },
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
  }

})
