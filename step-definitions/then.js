const {Then} = require('cucumber');
const isFocused = require('../support/check/isFocused.js');
const isChecked = require('../support/check/isChecked.js');

Then(
  /^I expect the element with text "([^"]*)?" is( not)* focused$/,
  isFocused
);

Then(
  /^I expect the element with text "([^"]*)?" is( not)* checked$/,
  isChecked
);
