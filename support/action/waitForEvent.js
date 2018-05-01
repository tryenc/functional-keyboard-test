/**
 * Wait for an event to fire before proceeding with the next step
 * @param  {String}   eventName  name of the event to wait for
 */
module.exports = eventName => {
  browser.executeAsync(function(name, done) {
    var callback = function() {
      document.removeEventListener(name, callback);
      done();
    };

    document.addEventListener(name, callback);
  }, eventName);
};
