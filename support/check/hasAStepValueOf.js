/**
 * Check if the given element has the expected step value
 * @param  {String}   selector  Element selector
 * @param  {String}   expectedStepValue The step value we expect the element to have
 */
module.exports = (selector, expectedStepValue) => {
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#Setting_the_value's_granularity
  const DEFAULT_STEP_VALUE = '1';
  const element = $(selector);

  const step = element.getAttribute('step') || DEFAULT_STEP_VALUE;

  expect(step).to
    .equal(expectedStepValue, `Expected element to have a step value of ${expectedStepValue}, but its step value is ${step}`);
};
