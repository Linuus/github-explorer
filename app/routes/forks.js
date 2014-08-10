import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var repo = this.modelFor('repository');
    return Ember.$.getJSON(repo.forks_url);
  }
});
