const {When} = require('cucumber');

When(/^I type "([^"]*)?"$/, key => {
  browser.keys([key]);
});

When(/^I type "([^"]*)?" with the modifier "([^"]*)?"$/, (key, modifier) => {
  browser.keys([modifier, key]);
});
