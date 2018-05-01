const {Given} = require('cucumber');
const isFocused = require('../support/check/isFocused.js');
const isChecked = require('../support/check/isChecked.js');
const hasAValueOf = require('../support/check/hasAValueOf.js');
const isSetToMaxValue = require('../support/check/isSetToMaxValue.js');
const hasAStepValueOf = require('../support/check/hasAStepValueOf.js');
const isVisible = require('../support/check/isVisible.js');

Given(/^I open the site "([^"]*)?"$/, url => {
  return browser.url(url);
});

Given(/^I click on the element with text "([^"]*)?"$/, text => {
  browser.click(`div=${text}`);
});

Given(/^the element "([^"]*)?" does not contain the hidden text "([^"]*)?"$/, (selector, text) => {
  var html = browser.getHTML(selector, false);
  expect(html.indexOf(text)).to.equal(-1);
});

Given(/^the element "([^"]*)?" does contain the hidden text "([^"]*)?"$/, (selector, text) => {
  var html = browser.getHTML(selector, false);
  expect(html.indexOf(text)).to.be.above(-1);
});

Given(/^I click on the element "([^"]*)?"$/, selector => {
  browser.click(selector);
});

Given(
  /^the element "([^"]*)?" is( not)* focused$/,
  isFocused
);

Given(
  /^the element "([^"]*)?" is( not)* checked$/,
  isChecked
);

Given(
  /^the element "([^"]*)?" is( not)* visible$/,
  isVisible
);

Given(
  /^the element "([^"]*)?" has a value of "([^"]*)?"$/,
  hasAValueOf
);

Given(
  /^the element "([^"]*)?" is set to its maximum value$/,
  isSetToMaxValue
);

Given(
  /^the element "([^"]*)?" has a step value of "([^"]*)?"$/,
  hasAStepValueOf
);
