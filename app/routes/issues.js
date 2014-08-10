import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var repo = this.modelFor('repository');
    var url = repo.issues_url.replace("{/number}","");
    return Ember.$.getJSON(url);
  }
});
