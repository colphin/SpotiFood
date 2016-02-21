// Fixture data 

// if (Posts.find().count() === 0) {

//   var now = new Date().getTime();
  
//   // create two users
//   var calvinId = Meteor.users.insert({
//     profile: { name: 'Calvin Yin' }
//   });
//   var calvin = Meteor.users.findOne(calvinId);
  
//   for (var i = 0; i < 10; i++) {
//     Posts.insert({
//       title: 'Restaurant #' + i,
//       author: calvin.profile.name,
//       userId: calvin._id,
//       url: 'http://google.com/?q=test-' + i,
//       submitted: new Date(now - i * 3600 * 1000 + 1),
//       commentsCount: 0,
//       upvoters: [], votes: 0
//     });
//   }
// }