const {Given} = require('cucumber');

const hasAStepValueOf = require('../../support/check/hasAStepValueOf.js');
const hasAValueOf = require('../../support/check/hasAValueOf.js');
const hasHiddenText = require('../../support/check/hasHiddenText.js');
const isChecked = require('../../support/check/isChecked.js');
const isFocused = require('../../support/check/isFocused.js');
const isSetToMaxValue = require('../../support/check/isSetToMaxValue.js');
const isSelected = require('../../support/check/isSelected.js');
const isVisible = require('../../support/check/isVisible.js');
const waitForVisible = require('../../support/action/waitForVisible.js');

Given(
  /^I click on the element "([^"]*)?"$/,
  selector => { browser.click(selector); }
);

Given(
  /^I right click on the element "([^"]*)?"$/,
  selector => { browser.rightClick(selector); }
);

Given(
  /^I open the site "([^"]*)?"$/,
  url => {browser.url(url);}
);

Given(
  /^I wait (\d+) milliseconds?$/,
  milliseconds => {browser.pause(milliseconds);}
);

Given(
  /^I wait until the element "([^"]*)?" is( not)* visible$/,
  waitForVisible
);

Given(
  /^the element "([^"]*)?" does( not)* contain the hidden text "([^"]*)?"$/,
  hasHiddenText
);

Given(
  /^the element "([^"]*)?" has a step value of "([^"]*)?"$/,
  hasAStepValueOf
);

Given(
  /^the element "([^"]*)?" has a value of "([^"]*)?"$/,
  hasAValueOf
);

Given(
  /^the element "([^"]*)?" is( not)* checked$/,
  isChecked
);

Given(
  /^the element "([^"]*)?" is( not)* focused$/,
  isFocused
);

Given(
  /^the element "([^"]*)?" is( not)* selected$/,
  isSelected
);

Given(
  /^the element "([^"]*)?" is( not)* visible$/,
  isVisible
);

Given(
  /^the element "([^"]*)?" is set to its maximum value$/,
  isSetToMaxValue
);

