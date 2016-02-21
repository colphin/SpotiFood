Template.Restaurant.onCreated(function(){ //refers to the Menu template
	var self = this;
	self.autorun(function(){
		self.subscribe('recipes');
	});
});

Template.Restaurant.helpers({
	recipes: ()=> {
		return Recipes.find({inMenu: true});
	}
});