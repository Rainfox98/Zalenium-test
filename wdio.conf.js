const { join } = require('path');
const { TimelineService } = require('wdio-timeline-reporter/timeline-service');

exports.config = {
    runner: 'local',
    hostname: 'localhost',
    port: 4444,
    path: '/wd/hub',
    specs: ['./test/e2e/specs/*.spec.js'],
    suites: {
        login: ['./test/e2e/specs/login.spec.js'],
        smokeTest: ['./test/e2e/specs/Smoke.spec.js'],
        development: ['./test/e2e/specs/UserPageTest.spec.js'],
    },
    maxInstances: 1,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            'goog:chromeOptions': {
                // to run chrome headless the following flags are required
                // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
                // args: ['--headless', '--disable-gpu'],
            },
            'zal:recordVideo': true,
            'zal:name': 'Demo Integration Tests',
            'zal:build': 'WebDriverIO',
        },
        {
            maxInstances: 1,
            browserName: 'firefox'
        }, 
    ],
    logLevel: 'trace',
    outputDir: './test-report/output',
    bail: 0,
    baseUrl: 'https://dev.mentalstack.com:3030/login',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: [
        'dot',
        'spec',
        [
            'allure',
            {
                outputDir: './test-report/allure-result/',
                disableWebdriverStepsReporting: false,
                disableWebdriverScreenshotsReporting: false,
            },
        ],
        ['timeline', { outputDir: './test-report/timeline' }],
    ],
    mochaOpts: {
        ui: 'bdd',
        compilers: ['js:@babel/register'],
        timeout: 60000,
    },
    services: [
        [
            'image-comparison',
            {
                baselineFolder: join(process.cwd(), './screenshots/reference/'),
                formatImageName: '{tag}-{logName}-{width}x{height}',
                screenshotPath: join(process.cwd(), './screenshots/'),
                savePerInstance: true,
                autoSaveBaseline: true,
                blockOutStatusBar: true,
                blockOutToolBar: true,
            },
        ],
        [TimelineService],
        // Uncomment to run tests with Selenium Standalone, if you have JDK installed.
         // ['selenium-standalone'],
    ],
    before() {
        browser.setWindowSize(1920, 1080);
    },
};
