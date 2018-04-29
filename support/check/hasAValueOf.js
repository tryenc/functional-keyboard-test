/**
 * Check if the given element has the expected value
 * @param  {String}   selector  Element selector
 * @param  {String}   expectedValue The value we expect the element to have
 */
module.exports = (selector, expectedValue) => {
  const element = $(selector);

  const value = element.getValue();
  const ariaValueNow = element.getAttribute('aria-valuenow');
  const valueOrAriaValueNow = value || ariaValueNow;

  expect(valueOrAriaValueNow).to
    .equal(expectedValue, `Expected element to have a value of ${expectedValue}, but its value is ${valueOrAriaValueNow}`);
};
