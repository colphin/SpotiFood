if(Meteor.isClient){
	Template.body.helpers({
		resolutions:[
		{title: "Hello Resolution #1"}
		]

	});
}

if (Meteor.isServer){
	Meteor.startup(function (){
		//code to run on server at startup
	});
}