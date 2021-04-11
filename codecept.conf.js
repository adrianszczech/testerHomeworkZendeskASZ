const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://app.futuresimple.com',
      show: true,
      windowSize: '1920x1080',
      restart: false,
      keepCookies: true,
      "chrome": {
        "args": ['--start-maximized']
      },
    }
  },
  include: {
    I: './steps_file.js',
    loginSubdomainPage: './pages/loginSubdomainPage.js',
    loginAccountPage: './pages/loginAccountPage.js',
    createLeadPage: './pages/createLeadPage.js',
    leadStatusPage: './pages/leadStatusPage.js',
    homeworkStep: './steps/homeworkStep.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'testerHomeworkZendesk',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}