Template.login.events({
	"submit form": function(event, template){
		event.preventDefault();
		var emailvar = template.find("#login-email").value;
		var passwordvar = template.find('#login-password').value;
		Meteor.loginWithPassword(emailvar,passwordvar);
	}
})