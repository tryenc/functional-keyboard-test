const {Given} = require('cucumber');
const isFocused = require('../support/check/isFocused.js');
const isChecked = require('../support/check/isChecked.js');

Given(/^I open the site "([^"]*)?"$/, url => {
  return browser.url(url);
});

Given(/^I click on the element with text "([^"]*)?"$/, text => {
  browser.click(`div=${text}`);
});

Given(
  /^the element with text "([^"]*)?" is( not)* focused$/,
  isFocused
);

Given(
  /^the element with text "([^"]*)?" is( not)* checked$/,
  isChecked
);

// Given(/^I type ([^"]*)? 6 times$/, key => {

// });