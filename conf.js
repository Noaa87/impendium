exports.config = {
  framework: 'jasmine',
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['login.js'],
  multiCapabilities: [{
    browserName: 'chrome'
  }],
  // using browser driver directly
  directConnect: 'true',
  onPrepare: function() 
  {
      browser.ignoreSynchronization = true;
      browser.driver.manage().window().maximize();
  }
}