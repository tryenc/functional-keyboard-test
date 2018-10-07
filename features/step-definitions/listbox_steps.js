const { Given, Then } = require("cucumber");

const isSelected = require("../../support/check/isSelected.js");
const isFocused = require("../../support/check/isFocused.js");

Given(
  /^I click on the first option in the listbox "([^"]*)?"$/,
  listboxSelector => {
    browser.click(`${listboxSelector} [role="option"]:first-of-type`);
  }
);

Given(
  /^I click on the second option in the listbox "([^"]*)?"$/,
  listboxSelector => {
    browser.click(`${listboxSelector} [role="option"]:nth-of-type(2)`);
  }
);

Given(
  /^I click on the third option in the listbox "([^"]*)?"$/,
  listboxSelector => {
    browser.click(`${listboxSelector} [role="option"]:nth-of-type(3)`);
  }
);

Given(
  /^I click on the last option in the listbox "([^"]*)?"$/,
  listboxSelector => {
    browser.click(`${listboxSelector} [role="option"]:last-of-type`);
  }
);

Given(
  /^the first option in the listbox "([^"]*)?" is( not)* selected$/,
  (listboxSelector, falseCase) => {
    isSelected(`${listboxSelector} [role="option"]:first-of-type`, falseCase);
  }
);

Given(
  /^the second option in the listbox "([^"]*)?" is( not)* selected$/,
  (listboxSelector, falseCase) => {
    isSelected(`${listboxSelector} [role="option"]:nth-of-type(2)`, falseCase);
  }
);

Given(
  /^the third option in the listbox "([^"]*)?" is( not)* selected$/,
  (listboxSelector, falseCase) => {
    isSelected(`${listboxSelector} [role="option"]:nth-of-type(3)`, falseCase);
  }
);

Given(
  /^the last option in the listbox "([^"]*)?" is( not)* selected$/,
  (listboxSelector, falseCase) => {
    isSelected(`${listboxSelector} [role="option"]:last-of-type`, falseCase);
  }
);

Given(
  /^the first option in the listbox "([^"]*)?" is( not)* focused$/,
  (listboxSelector, falseCase) => {
    isFocused(`${listboxSelector} [role="option"]:first-of-type`, falseCase);
  }
);

Given(
  /^the second option in the listbox "([^"]*)?" is( not)* focused$/,
  (listboxSelector, falseCase) => {
    isFocused(`${listboxSelector} [role="option"]:nth-of-type(2)`, falseCase);
  }
);

Given(
  /^the third option in the listbox "([^"]*)?" is( not)* focused$/,
  (listboxSelector, falseCase) => {
    isFocused(`${listboxSelector} [role="option"]:nth-of-type(3)`, falseCase);
  }
);

Given(
  /^the last option in the listbox "([^"]*)?" is( not)* focused$/,
  (listboxSelector, falseCase) => {
    isFocused(`${listboxSelector} [role="option"]:last-of-type`, falseCase);
  }
);

Then(
  /^I expect the first option in the listbox "([^"]*)?" is( not)* selected$/,
  (listboxSelector, falseCase) => {
    isSelected(`${listboxSelector} [role="option"]:first-of-type`, falseCase);
  }
);

Then(
  /^I expect the second option in the listbox "([^"]*)?" is( not)* selected$/,
  (listboxSelector, falseCase) => {
    isSelected(`${listboxSelector} [role="option"]:nth-of-type(2)`, falseCase);
  }
);

Then(
  /^I expect the third option in the listbox "([^"]*)?" is( not)* selected$/,
  (listboxSelector, falseCase) => {
    isSelected(`${listboxSelector} [role="option"]:nth-of-type(3)`, falseCase);
  }
);

Then(
  /^I expect the last option in the listbox "([^"]*)?" is( not)* selected$/,
  (listboxSelector, falseCase) => {
    isSelected(`${listboxSelector} [role="option"]:last-of-type`, falseCase);
  }
);

Then(
  /^I expect the first option in the listbox "([^"]*)?" is( not)* focused$/,
  (listboxSelector, falseCase) => {
    isFocused(`${listboxSelector} [role="option"]:first-of-type`, falseCase);
  }
);

Then(
  /^I expect the second option in the listbox "([^"]*)?" is( not)* focused$/,
  (listboxSelector, falseCase) => {
    isFocused(`${listboxSelector} [role="option"]:nth-of-type(2)`, falseCase);
  }
);

Then(
  /^I expect the last option in the listbox "([^"]*)?" is( not)* focused$/,
  (listboxSelector, falseCase) => {
    isFocused(`${listboxSelector} [role="option"]:last-of-type`, falseCase);
  }
);
