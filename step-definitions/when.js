const {When} = require('cucumber');
const waitForEvent = require('../support/action/waitForEvent.js');

When(/^I type "([^"]*)?"$/, key => {
  browser.keys([key]);
});

When(/^I type "([^"]*)?" with the modifier "([^"]*)?"$/, (key, modifier) => {
  browser.keys([modifier, key, modifier]);
});

When(
  /^I wait for the event "([^"]*)?"$/,
  waitForEvent
);
