/**
 * Check if the given element is visible
 * @param  {String}   selector  Element selector
 * @param  {String}   falseCase Whether to check if the given element is visible or not
 */
module.exports = (selector, falseCase) => {
  const element = $(selector);

  const isVisible = element.isVisible();

  if (falseCase) {
    expect(isVisible).to.not
      .equal(true, 'Expected element to not be visible, but it is');
  } else {
    expect(isVisible).to
      .equal(true, 'Expected element to be visible, but it is not');
  }
};
