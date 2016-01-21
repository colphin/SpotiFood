Template.register.events({
	"submit form": function(event, template){
		event.preventDefault();
		var emailVar = template.find("#email").value;
		var passwordVar = template.find('#password').value;
		// console.log('form submitted');
		Accounts.createUser({
			email:emailVar,
			password:passwordVar
		});
	}
})