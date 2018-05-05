/**
 * Check if the given element has hidden text
 * @param  {String}   selector  Element selector
 * @param  {String}   text  The text we expect to be hidden in the element
 */
module.exports = (selector, falseCase, text) => {
  const html = browser.getHTML(selector, false);

  console.log('html', html);

  if(falseCase) {
    expect(html.indexOf(text)).to.equal(-1);
  } else {
    expect(html.indexOf(text)).to.be.above(-1);
  }
};
