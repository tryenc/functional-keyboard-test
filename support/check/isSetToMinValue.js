/**
 * Check if the given element is set to its minimum value
 * @param  {String}   selector  Element selector
 */
module.exports = selector => {
  const element = $(selector);

  const value = element.getValue();
  const ariaValueNow = element.getAttribute('aria-valuenow');
  const valueOrAriaValueNow = value || ariaValueNow;

  const min = element.getAttribute('min');
  const ariaValueMin = element.getAttribute('aria-valuemin');
  const minOrAriaValueMin = min || ariaValueMin;

  expect(valueOrAriaValueNow).to
    .equal(minOrAriaValueMin, `Expected element to have a value set to its minimum value of ${minOrAriaValueMin}, but its value is ${valueOrAriaValueNow}`);
};
