/**
 * Check if the given element has a value less than the expected value
 * @param  {String}   selector  Element selector
 * @param  {String}   expectedValue The element should have a value less than this
 */
module.exports = (selector, expectedValue) => {
  const element = $(selector);

  const value = element.getValue();
  const ariaValueNow = element.getAttribute('aria-valuenow');
  const valueOrAriaValueNow = value || ariaValueNow;

  // convert strings to numbers
  const valueAsNumber = Number.parseInt(valueOrAriaValueNow, 10);
  const expectedValueAsNumber = Number.parseInt(expectedValue, 10);

  expect(valueAsNumber).to
    .be.below(expectedValueAsNumber, `Expected element to have a value less than ${expectedValue}, but its value is ${valueOrAriaValueNow}`);
};
