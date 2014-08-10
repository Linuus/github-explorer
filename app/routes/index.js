import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      { login: "linuus", name: "Linus Pettersson" },
      { login: "jensljungblad", name:  "Jens Ljungblad" },
      { login: "johanhalse", name: "Johan Halse" },
      { login: "kindell", name: "Jon Kindell" },
      { login: "mwq", name: "Mattias Warnqvist" }
    ];
  }
});
