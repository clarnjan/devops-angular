// karma.conf.js
module.exports = function(config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-jasmine-html-reporter'),
        require('karma-coverage-istanbul-reporter'),
        require('@angular-devkit/build-angular/plugins/karma')
      ],
      client: {
        clearContext: false // leave Jasmine Spec Runner output visible in browser
      },
      coverageIstanbulReporter: {
        dir: require('path').join(__dirname, './coverage/angular-app'),
        reports: ['html', 'lcovonly', 'text-summary'],
        fixWebpackSourcePaths: true
      },
      reporters: ['progress', 'kjhtml'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['ChromeHeadless'],
      customLaunchers: {
        ChromeHeadless: {
          base: 'ChromeHeadless',
          flags: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--remote-debugging-port=9222'
          ]
        }
      },
      singleRun: false,
      restartOnFileChange: true
    });
  };
  