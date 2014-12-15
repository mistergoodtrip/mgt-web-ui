import SailsSocketAdapter from 'ember-data-sails/adapters/sails-socket';

/**
 * @class ApplicationAdapter
 * @extends SailsSocketAdapter
 */
export default SailsSocketAdapter.extend({
  /**
   * Namespace of the API
   * @property namespace
   * @type {string}
   */
  namespace:            'api/v1',
  /**
   * Whether to use CSRF tokens or not
   * @property useCSRF
   * @type {boolean}
   */
  useCSRF:              true,
  /**
   * Whether to group multiple find by ID with one request with a `where`
   * @property coalesceFindRequests
   * @type {boolean}
   */
  coalesceFindRequests: true
});
