Template.login.events({
	"submit form": function(event, template){
		event.preventDefault();
		var emailvar = template.find("#email").value;
		var passwordvar = template.find('#password').value;
		console.log('form submitted');
	}
})