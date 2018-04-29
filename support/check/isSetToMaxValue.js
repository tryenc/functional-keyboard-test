/**
 * Check if the given element is set to its maximum value
 * @param  {String}   selector  Element selector
 */
module.exports = selector => {
  const element = $(selector);

  const value = element.getValue();
  const ariaValueNow = element.getAttribute('aria-valuenow');
  const valueOrAriaValueNow = value || ariaValueNow;

  const max = element.getAttribute('max');
  const ariaValueMax = element.getAttribute('aria-valuemax');
  const maxOrAriaValueMax = max || ariaValueMax;

  expect(valueOrAriaValueNow).to
    .equal(maxOrAriaValueMax, `Expected element to have a value set to its max value of ${maxOrAriaValueMax}, but its value is ${valueOrAriaValueNow}`);
};
