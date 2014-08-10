import Ember from 'ember';

export default Ember.ArrayController.extend({
  renderedOn: function() {
    return new Date();
  }.property()
});
