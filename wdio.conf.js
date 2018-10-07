const del = require('del');

exports.config = {
    port: '9515',
    path: '/',
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './features/*.feature'
    ],
    exclude: [
    ],
    // ============
    // Capabilities
    // ============
    maxInstances: 3,
    capabilities: [{
        maxInstances: 3,
        browserName: 'chrome'
    }],
    // ===================
    // Test Configurations
    // ===================
    sync: true,
    logLevel: 'error',
    coloredLogs: true,
    deprecationWarnings: true,
    // bail (default is 0 - don't bail, run all tests).
    bail: 1,
    // Saves a screenshot to a given path if a command fails.
    screenshotPath: './errorShots/',
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    baseUrl: 'https://www.w3.org/TR/wai-aria-practices-1.1/',
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 90000,
    // Default request retries count
    connectionRetryCount: 3,
    // Test runner services
    services: ['chromedriver'],
    // Framework you want to run your specs with.
    framework: 'cucumber',
    // Test reporter for stdout.
    reporters: ['spec'],
    cucumberOpts: {
        require: [
            './features/step-definitions/given.js',
            './features/step-definitions/then.js',
            './features/step-definitions/when.js',
            './features/step-definitions/radio_group_steps.js',
            './features/step-definitions/listbox_steps.js',
        ],        // <string[]> (file/dir) require files before executing features
        backtrace: false,   // <boolean> show full backtrace for errors
        compiler: [],       // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        dryRun: false,      // <boolean> invoke formatters without executing steps
        failFast: false,    // <boolean> abort the run on first failure
        format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        colors: true,       // <boolean> disable colors in formatter output
        snippets: true,     // <boolean> hide step definition snippets for pending steps
        source: true,       // <boolean> hide source uris
        profile: [],        // <string[]> (name) specify the profile to use
        strict: true,      // <boolean> fail if there are any undefined or pending steps
        tags: [],           // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        timeout: 200000000,     // <number> timeout for step definitions
        ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
    },
    // =====
    // Hooks
    // =====
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    onPrepare: function (config, capabilities) {
        del(['errorShots']);
    },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    before: function (capabilities, specs) {
      expect = require('chai').expect;
    },
}
