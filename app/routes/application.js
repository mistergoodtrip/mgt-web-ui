import Ember from 'ember';

/**
 * @class ApplicationRoute
 * @extends Ember.Route
 */
export default Ember.Route.extend({
  /**
   * Generates the title for all routes, appending the application's name
   *
   * @method title
   * @param {Array.<string>} tokens
   * @returns {string}
   */
  title: function (tokens) {
    if (!tokens) {
      tokens = [];
    }
    tokens.push(this.t('common.app_name'));
    return tokens.join(' - ');
  }
});
