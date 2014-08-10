import Ember from 'ember';
import Issue from '../../models/issue';

export default Ember.Controller.extend({
  needs: ['repository'],
  repo: Ember.computed.alias('controllers.repository'),
  issue: function() {
    return Issue.create();
  }.property('repo.model'),
  actions: {
    submitIssue: function() {
      var issue = this.get('issue');
      var url = this.get('repo').get('issues_url');
      console.log("Title: " + issue.get('title') + ". Body: " + issue.get('body') + " Url: " + url);
      this.set('issue', Issue.create());
      this.transitionToRoute("issues");
    }
  }
});
