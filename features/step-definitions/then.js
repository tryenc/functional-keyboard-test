const {Then} = require('cucumber');

const hasAValueGreaterThan = require('../../support/check/hasAValueGreaterThan.js');
const hasAValueLessThan = require('../../support/check/hasAValueLessThan.js');
const hasAValueOf = require('../../support/check/hasAValueOf.js');
const hasHiddenText = require('../../support/check/hasHiddenText.js');
const isChecked = require('../../support/check/isChecked.js');
const isFocused = require('../../support/check/isFocused.js');
const isSetToMaxValue = require('../../support/check/isSetToMaxValue.js');
const isSetToMinValue = require('../../support/check/isSetToMinValue.js');
const isSelected = require('../../support/check/isSelected.js');
const isVisible = require('../../support/check/isVisible.js');

// Radio buttons
Then(
  /^I expect the first radio button in the radio group "([^"]*)?" is( not)* checked$/,
  (radioGroupSelector, falseCase) => {
    isChecked(`${radioGroupSelector} [role="radio"]:first-of-type`, falseCase);
  }
);

Then(
  /^I expect the second radio button in the radio group "([^"]*)?" is( not)* checked$/,
  (radioGroupSelector, falseCase) => {
    isChecked(`${radioGroupSelector} [role="radio"]:nth-of-type(2)`, falseCase);
  }
);

Then(
  /^I expect the last radio button in the radio group "([^"]*)?" is( not)* checked$/,
  (radioGroupSelector, falseCase) => {
    isChecked(`${radioGroupSelector} [role="radio"]:last-of-type`, falseCase);
  }
);

Then(
  /^I expect the first radio button in the radio group "([^"]*)?" is( not)* focused$/,
  (radioGroupSelector, falseCase) => {
    isFocused(`${radioGroupSelector} [role="radio"]:first-of-type`, falseCase);
  }
);

Then(
  /^I expect the second radio button in the radio group "([^"]*)?" is( not)* focused$/,
  (radioGroupSelector, falseCase) => {
    isFocused(`${radioGroupSelector} [role="radio"]:nth-of-type(2)`, falseCase);
  }
);

Then(
  /^I expect the last radio button in the radio group "([^"]*)?" is( not)* focused$/,
  (radioGroupSelector, falseCase) => {
    isFocused(`${radioGroupSelector} [role="radio"]:last-of-type`, falseCase);
  }
);

// General
Then(
  /^I expect the element "([^"]*)?" is( not)* checked$/,
  isChecked
);

Then(
  /^I expect the element "([^"]*)?" is( not)* focused$/,
  isFocused
);

Then(
  /^I expect the element "([^"]*)?" is( not)* selected$/,
  isSelected
);

Then(
  /^I expect the element "([^"]*)?" has a value of "([^"]*)?"$/,
  hasAValueOf
);

Then(
  /^I expect the element "([^"]*)?" is( not)* visible$/,
  isVisible
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

Then(
  /^I expect the element "([^"]*)?" does( not)* contain the hidden text "([^"]*)?"$/,
  hasHiddenText
);
