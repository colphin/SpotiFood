Template.register.events({
	"submit form": function(event, template){
		event.preventDefault();
		var emailVar = template.find("#inputEmail").value;
		var passwordVar = template.find('#inputPassword').value;
		// console.log('form submitted');
		Accounts.createUser({
			email:emailVar,
			password:passwordVar
		});
	}
})