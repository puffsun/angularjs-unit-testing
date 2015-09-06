// Karma configuration
// Generated on Sun Sep 06 2015 11:33:08 GMT+0800 (CST)

module.exports = function(config) {
  "use strict";

  config.set({

    // base path used to resolve all patterns (e.g. files, exclude)
    basePath: '',

    // frameworks to use
    frameworks: ['mocha', 'sinon-chai'],

    // list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/*.js',
      'test/*_spec.js'
    ],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    preprocessors: {
      'src/*.js': ['coverage']
    },

    coverageReporter: {
      type: 'text-summary',
      dir: 'coverage/'
    },

    // test results reporter to use
    reporters: ['progress', 'coverage'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests on file changes
    autoWatch: true,

    // start these browsers
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
