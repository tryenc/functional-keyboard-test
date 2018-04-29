const {Then} = require('cucumber');
const isFocused = require('../support/check/isFocused.js');
const isChecked = require('../support/check/isChecked.js');
const hasAValueOf = require('../support/check/hasAValueOf.js');
const isSetToMaxValue = require('../support/check/isSetToMaxValue.js');
const isSetToMinValue = require('../support/check/isSetToMinValue.js');
const hasAValueGreaterThan = require('../support/check/hasAValueGreaterThan.js');
const hasAValueLessThan = require('../support/check/hasAValueLessThan.js');

Then(
  /^I expect the element with text "([^"]*)?" is( not)* focused$/,
  isFocused
);

Then(
  /^I expect the element "([^"]*)?" is( not)* checked$/,
  isChecked
);

Then(
  /^I expect the element "([^"]*)?" has a value of "([^"]*)?"$/,
  hasAValueOf
);

Then(
  /^I expect the element "([^"]*)?" has a value greater than "([^"]*)?"$/,
  hasAValueGreaterThan
);

Then(
  /^I expect the element "([^"]*)?" has a value less than "([^"]*)?"$/,
  hasAValueLessThan
);

Then(
  /^I expect the element "([^"]*)?" is set to its maximum value$/,
  isSetToMaxValue
);

Then(
  /^I expect the element "([^"]*)?" is set to its minimum value$/,
  isSetToMinValue
);
