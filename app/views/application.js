import Ember from 'ember';
import WithComputedSizeMixin from 'ember-computed-size/mixins/with-computed-size';

var computed = Ember.computed;

/**
 * @class ApplicationView
 * @extends Ember.View
 * @uses WithComputedSizeMixin
 */
export default Ember.View.extend(WithComputedSizeMixin, {
  /**
   * @inheritDoc
   */
  classNameBindings: ['resourceAndRouteClassName'],

  /**
   * Used to have the current resource and route in the class name of the root element of the application
   * @property resourceAndRouteClassName
   * @type {string}
   */
  resourceAndRouteClassName: computed('controller.currentPath', function () {
    var path = this.get('controller.currentPath');
    return 'route$' + path.split('.').slice(-2).join('$');
  })
});
