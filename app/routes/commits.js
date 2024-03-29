import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var repo = this.modelFor('repository');
    var url = repo.commits_url.replace("{/sha}","");
    return Ember.$.getJSON(url);
  }
});
