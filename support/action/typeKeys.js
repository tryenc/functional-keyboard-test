/**
 * Type the given key a specified number of times
 * @param  {String}   key  Keyboard key to press
 */
module.exports = (key, times) => {
  for (let i = 0; i < times; i++) {
    browser.keys([key]);
  }
};
