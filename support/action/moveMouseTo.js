/**
 * Move the mouse to a given element
 * @param  {String}   selector  Element selector
 */
module.exports = (selector) => {
  // const location = browser.getLocation(selector);
  // browser.actions([
  //   {
  //     "type": "pointer",
  //     "id": "mouse1",
  //     "parameters": {"pointerType": "mouse"},
  //     "actions": [
  //       {
  //         "type": "pointerMove",
  //         "duration": 0,
  //         "x": location.x,
  //         "y": location.y
  //       },
  //       {"type": "pause", "duration": 500}
  //     ]
  //   }]);
  // browser.actions();
  browser.moveToObject(selector);
};
