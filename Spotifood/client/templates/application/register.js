Accounts.ui.config({
  requestPermissions: {
    facebook: ['user_likes'],
    github: ['user', 'repo']
  },
  requestOfflineToken: {
    google: true
  },
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});

// Template.register.events({
//     'submit form': function(event){
//         event.preventDefault();
//         var email = $('[name=email]').val();
//         var password = $('[name=password]').val();
//     }
// });

