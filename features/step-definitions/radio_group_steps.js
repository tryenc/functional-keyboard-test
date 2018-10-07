const { Given, Then } = require('cucumber');

const areChecked = require("../../support/check/areChecked.js");
const isChecked = require("../../support/check/isChecked.js");
const isFocused = require("../../support/check/isFocused.js");

Given(
  /^I right click on the first radio button in the radio group "([^"]*)?"$/,
  radioGroupSelector => {
    browser.rightClick(`${radioGroupSelector} [role="radio"]:first-of-type`);
  }
);

Given(
  /^I click on the first radio button in the radio group "([^"]*)?"$/,
  radioGroupSelector => {
    browser.click(`${radioGroupSelector} [role="radio"]:first-of-type`);
  }
);

Given(
  /^I click on the second radio button in the radio group "([^"]*)?"$/,
  radioGroupSelector => {
    browser.click(`${radioGroupSelector} [role="radio"]:nth-of-type(2)`);
  }
);

Given(
  /^I click on the last radio button in the radio group "([^"]*)?"$/,
  radioGroupSelector => {
    browser.click(`${radioGroupSelector} [role="radio"]:last-of-type`);
  }
);

Given(
  /^the radio buttons in the radio group "([^"]*)?" are( not)* checked$/,
  (radioGroupSelector, falseCase) => {
    areChecked(`${radioGroupSelector} [role="radio"]:first-of-type`, falseCase);
  }
);

Given(
  /^the first radio button in the radio group "([^"]*)?" is( not)* checked$/,
  (radioGroupSelector, falseCase) => {
    isChecked(`${radioGroupSelector} [role="radio"]:first-of-type`, falseCase);
  }
);

Given(
  /^the second radio button in the radio group "([^"]*)?" is( not)* checked$/,
  (radioGroupSelector, falseCase) => {
    isChecked(`${radioGroupSelector} [role="radio"]:nth-of-type(2)`, falseCase);
  }
);

Given(
  /^the last radio button in the radio group "([^"]*)?" is( not)* checked$/,
  (radioGroupSelector, falseCase) => {
    isChecked(`${radioGroupSelector} [role="radio"]:last-of-type`, falseCase);
  }
);

Given(
  /^the first radio button in the radio group "([^"]*)?" is( not)* focused$/,
  (radioGroupSelector, falseCase) => {
    isFocused(`${radioGroupSelector} [role="radio"]:first-of-type`, falseCase);
  }
);

Given(
  /^the second radio button in the radio group "([^"]*)?" is( not)* focused$/,
  (radioGroupSelector, falseCase) => {
    isFocused(`${radioGroupSelector} [role="radio"]:nth-of-type(2)`, falseCase);
  }
);

Given(
  /^the last radio button in the radio group "([^"]*)?" is( not)* focused$/,
  (radioGroupSelector, falseCase) => {
    isFocused(`${radioGroupSelector} [role="radio"]:last-of-type`, falseCase);
  }
);

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