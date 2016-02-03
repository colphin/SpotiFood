Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  // waitOn: function() {return Meteor.subscribe('Recommendations');}
});

Router.route('/', {name: 'home'});


Router.route('/login', function () {
  this.render('login');
  this.layout('login');

});
 
 
Router.route('/register', function () {
  this.render('register');
  this.layout('register');
});
 