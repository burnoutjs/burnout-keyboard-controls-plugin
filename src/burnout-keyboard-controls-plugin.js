/**
 * Provide keyboard controls for burnout game engine.
 *
 * @param {object} control - All burnout core methods for movements.
 * @param {object} control.up - Burnout core methods for up movements.
 * @param {object} control.down - Burnout core methods for down movements.
 * @param {object} control.left - Burnout core methods for left movements.
 * @param {object} control.right - Burnout core methods for right movements.
 * @param {object} [context = window] - Context for execute the DOM API.
 *
 */

const burnoutKeyboardControlsPlugin = (control, context = window) => {

  /**
   * Test a specific event keycode.
   *
   * @param {object} target - The target event(element).
   * @param {number} keyCode - Keyboard keycode for test.
   *
   * @returns {boolean} Cross browser event keycode result.
   *
   */

  const keyPress = (target, keyCode) => {
    return (target.which === keyCode || target.keyCode === keyCode);
  };

  context.addEventListener('keydown', e => {
    if (keyPress(e, 38)) control.up();
    if (keyPress(e, 40)) control.down();
    if (keyPress(e, 37)) control.left();
    if (keyPress(e, 39)) control.right();
  });

};

export default burnoutKeyboardControlsPlugin();
