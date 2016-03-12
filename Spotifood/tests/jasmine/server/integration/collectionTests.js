describe("logged users", function(){
  // beforeEach(function (done) {
  //   Meteor.loginWithPassword("tester", "testing", function(err){
  //     Router.go('newPosts');
  //     Tracker.afterFlush(done);
  //   });
  // });

  //beforeEach(waitForRouter);

  // afterEach(function(done){
  //   Meteor.logout(function() {
  //     done();
  //   });
  // });
  UsersCollection = new Mongo.Collection('UsersCollection');
  it("user collection", function(){

    var users = UsersCollection.findOne({});
    expect(users).toBe(undefined);
  });

});

describe("database", function(){
  // beforeEach(function (done) {
  //   Meteor.loginWithPassword("tester", "testing", function(err){
  //     Router.go('newPosts');
  //     Tracker.afterFlush(done);
  //   });
  // });

  //beforeEach(waitForRouter);

  // afterEach(function(done){
  //   Meteor.logout(function() {
  //     done();
  //   });
  // });
  PostCollection = new Mongo.Collection('postCollection');
  it("restaurant collections", function(){

    var post = PostCollection.findOne({});
    expect(post).toBe(undefined);
  });



  
});
// describe("posts", function(){
//   it("collections", function () {  
//   // First, check that we have 0 documents
//   var posts = posts.findOne({});
//   expect( posts ).toBe(defined);
//   });
//});