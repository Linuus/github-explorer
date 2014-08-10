import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['user'],
  user: Ember.computed.alias('controllers.user'),
  forked: Ember.computed.alias('fork')
});
