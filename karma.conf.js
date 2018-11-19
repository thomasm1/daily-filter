// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html

module.exports = function (config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine', 'jasmine-matchers'],
    preprocessors: [

    ],

    // list of files / patterns to load in the browser
    files: [
 
      'bower_components/jquery/src/jquery.js',
      'bower_components/angular/angular.min.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',  
 
       "lib/jasmine.js" ,
      "lib/jasmine-html.js" ,
      "lib/boot.js" ,
      "lib/jasmine-matchers.js" ,
      "src/custom-matchers.js", 
      
      'src/*.js',  
      'spec/*.js',
      'post-list/*.js'
 
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8888,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'FirefoxHeadless'
      ,'ChromeHeadless'
    ],


    customLaunchers: {
      FirefoxHeadless: {
        base: 'Firefox',
        flags: ['-headless'],
      },
      CustomHeadlessChrome: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },


    // Which plugins to enable
    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-jasmine-matchers',
      'karma-coverage'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true,
    reporters: ['dots'],
    colors: true,
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {type: 'html', subdir: 'html'}
      ]
    },

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
     proxies: {
       '/': 'http://localhost:9000/'
     },
     // URL root prevent conflicts with the site root
    urlRoot: '_karma_'
  });
};
