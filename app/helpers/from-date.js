import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(theDate) {
  var today = window.moment();
  var target = window.moment(theDate);
  return target.from(today);
});
