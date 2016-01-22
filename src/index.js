/**
 * @class KeyboardInput
 */
export default class KeyboardInput {
  /**
   * @constructs KeyboardInput
   */
  constructor() {
    this._pressed = {};

    this._handleKeyDown = this.handleKeyDown.bind(this);
    this._handleKeyUp = this.handleKeyUp.bind(this);

    this.addListeners();
  }

  /**
   * @method addListeners
   * @private
   */
  addListeners() {
    document.addEventListener('keydown', this._handleKeyDown);
    document.addEventListener('keyup', this._handleKeyUp);
  }

  /**
   * @method removeListeners
   * @private
   */
  removeListeners() {
    document.removeEventListener('keydown', this._handleKeyDown);
    document.removeEventListener('keyup', this._handleKeyUp);
  }

  /**
   * @method handleKeyDown
   * @private
   * @param {KeyboardEvent} e
   */
  handleKeyDown(e) {
    const keyCode = this.getKeyCode(e);

    if(typeof keyCode === 'undefined') {
      return;
    }

    this._pressed[keyCode] = true;
  }

  /**
   * @method handleKeyUp
   * @private
   * @param {KeyboardEvent} e
   */
  handleKeyUp(e) {
    const keyCode = this.getKeyCode(e);

    if(typeof keyCode === 'undefined') {
      return;
    }

    this._pressed[keyCode] = false;
  }

  /**
   * @method getKeyCode
   * @private
   * @param {KeyboardEvent} e
   * @returns {number}
   */
  getKeyCode(e) {
    e = e || window.event;
    return e.keyCode || e.which;
  }

  /**
   * @method isPressed
   * @public
   * @param {number} keyCode
   * @returns {boolean}
   */
  isPressed(keyCode) {
    return this._pressed[keyCode];
  }

  /**
   * @method dispose
   * @public
   */
  dispose() {
    this.removeListeners();
  }
}
