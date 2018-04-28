/**
 * Check if the given element is checked
 * @param  {String}   selector  Element selector
 * @param  {String}   falseCase Whether to check if the given element is checked or not
 */
module.exports = (text, falseCase) => {
  const element = $(`div=${text}`);

  const isAriaChecked = element.getAttribute('aria-checked') === 'true';
  const isChecked = element.getAttribute('checked');
  const isCheckedOrAriaChecked = isChecked || isAriaChecked;

  if (falseCase) {
    expect(isCheckedOrAriaChecked).to.not
      .equal(true, 'Expected element to not be checked, but it is');
  } else {
    expect(isCheckedOrAriaChecked).to
      .equal(true, 'Expected element to be checked, but it is not');
  }
};
