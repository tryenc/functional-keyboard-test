/**
 * Wait for the given element to become visible or not visible
 * @param  {String}   selector  Element selector
 * @param  {String}   falseCase Whether to wait until the given element is visible or not
 */
module.exports = (selector, falseCase) => {
  const element = $(selector);

  if (falseCase) {
    return element.waitForVisible(true);
  }

  return element.waitForVisible();
};
