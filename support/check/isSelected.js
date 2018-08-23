/**
 * Check if the given element is selected
 * @param  {String}   selector  Element selector
 * @param  {String}   falseCase Whether to check if the given element is selected or not
 */
module.exports = (selector, falseCase) => {
  const element = $(selector);

  const isAriaSelected = element.getAttribute('aria-selected') === 'true';
  const isSelected = element.selected;
  const isSelectedOrAriaSelected = isSelected || isAriaSelected;

  if (falseCase) {
    expect(isSelectedOrAriaSelected).to.not
      .equal(true, 'Expected element to not be selected, but it is');
  } else {
    expect(isSelectedOrAriaSelected).to
      .equal(true, 'Expected element to be selected, but it is not');
  }
};
