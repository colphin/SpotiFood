Recipes = new Mongo.Collection('recipes');
Recipes.allow({ //because we deleted the insecure packages.
	insert: function(userId, doc){
		return !!userId; //who is allowed to insert, if you are signed in.
	},
	update: function(userId, doc){
		return !!userId;
	}
});

Ingredient = new SimpleSchema({
	Cuisine:{
		type: String,
		label:"Enter a Cuisine you Prefer",
		allowedValues:['American','Chinese','European','Greek','Italian','Japanese','Mediterranean','Mexican','Scandinavian','Vietnamese','No Prefered Cuisine']
	}
});

RecipeSchema = new SimpleSchema({
	PrefName: {
		type: String,
		label:"Name your Preference."
	},
	Price: {
		type: String,
		label:"Select your price Range in $.",
		allowedValues:['under 10 ($)','11-30 ($$)','31-60 ($$$)','above 60 ($$$$)']
	},

	Stars: {
		type: String,
		label:"Select Minimum Stars.",
		allowedValues:['0','1','2','3','4']
	},

	Cuisines: {
		type: [Ingredient] //this allows us to have multiple ingredients
	},

	inMenu: {
		type: Boolean,
		defaultValue: false,
		optional: true,
		autoform:{
			type: "hidden"
		}
	},

	author: {
		type: String,
		label:"Author",
		autoValue: function(){
			return this.userId
		},
		autoform:{ //autoform specific object
			type: "hidden"
		}
	},
	createdAt:{
		type: Date,
		label:"Created At",
		autoValue: function(){
			return new Date()
		},
		autoform:{
			type: "hidden"
		}
	}
});

Meteor.methods({
	toggleMenuItem: function(id, currentState) {
		Recipes.update(id, {
			$set:{
				inMenu: !currentState
			}
		});
	},
	deleteRecipe: function(id){
		Recipes.remove(id);
	}
});
Recipes.attachSchema(RecipeSchema);