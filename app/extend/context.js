'use strict';

module.exports = {
  /**
   * Authing Singleton instance
   * @member Context#authing
   * @since 1.0.0
   * @see App#authing
   */
  get authing() {
    return this.app.authing;
  },
};
