const {When} = require('cucumber');

const moveMouseTo = require('../../support/action/moveMouseTo.js');
const typeKeys = require('../../support/action/typeKeys.js');
const waitForEvent = require('../../support/action/waitForEvent.js');

When(
  /^I move my mouse to the element "([^"]*)?"$/,
  moveMouseTo
);

When(
  /^I type "([^"]*)?"$/,
  key => typeKeys(key, 1)
);

When(
  /^I type "([^"]*)?" (\d+) times?$/,
  typeKeys
);

When(
  /^I type "([^"]*)?" with the modifier "([^"]*)?"$/,
  (key, modifier) => {browser.keys([modifier, key, modifier]);}
);

When(
  /^I wait for the event "([^"]*)?"$/,
  waitForEvent
);
