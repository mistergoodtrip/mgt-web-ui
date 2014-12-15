/* jshint node: true */

module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'mgt-web-ui',
    environment:  environment,
    baseURL:      '/',
    locationType: 'auto',
    EmberENV:     {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      defaultLocale: 'en'
    },

    googleMap:           {
      //key: ''
    },
    marked:              {
      // marked settings
      //version: '0.3.2', // default version, used when the js is not specified
      //js: false, // disable inclusion of the javascript (can be the URL to some other CDN)
      // highlight.js settings
      highlightjs: { // <== set to false to disable totally the inclusion of highlightjs
        //version: '8.3', // default version, used when the js and/or css are not specified
        //js: false, // disable inclusion of the javascript (can be the URL to some other CDN)
        //css: false, // disable inclusion of the css (can be the URL to some other CDN)
      }
    },
    emberCliFontAwesome: {includeFontAwesomeAssets: false}
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.googleAnalytics = {
      webPropertyId: 'UA-57652710-1'
    };
  }

  return ENV;
};
