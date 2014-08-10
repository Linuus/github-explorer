import Ember from 'ember';

var Router = Ember.Router.extend({
  location: GithubExplorerENV.locationType
});

Router.map(function() {
  this.resource('user', { path: 'users/:login' }, function(){
    this.resource('repositories');
    this.resource('repository', { path: 'repositories/:reponame' }, function() {
      this.resource('issues');
      this.resource('forks');
      this.resource('commits');
      this.route('newissue');
    });
  });
});

export default Router;
