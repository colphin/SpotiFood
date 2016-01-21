Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  // waitOn: function() {return Meteor.subscribe('Recommendations');}
});

Router.route('/', {name: 'home'});