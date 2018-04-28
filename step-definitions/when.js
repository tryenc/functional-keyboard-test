const {When} = require('cucumber');

When(/^I type "([^"]*)?"$/, key => {
  browser.keys([key]);
});
