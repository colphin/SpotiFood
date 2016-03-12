describe("create account", function(){
  beforeEach(function (done) {
  Accounts.createUser({username: 'tester', password: 'testing'});
    Meteor.loginWithPassword("tester", "testing", function(err){
      Router.go('newPosts');
      Tracker.afterFlush(done);
    });
  });

  beforeEach(waitForRouter);

  afterEach(function(done){
    Meteor.logout(function() {
      done();
    });
  });
  
  it("creates account", function(){
    expect(Meteor.userId()).not.toBeNull()
  });
});

describe("log in", function(){
  beforeEach(function (done) {
    Meteor.loginWithPassword("tester", "testing", function(err){
      Router.go('newPosts');
      Tracker.afterFlush(done);
    });
  });

  beforeEach(waitForRouter);

  // afterEach(function(done){
  //   Meteor.logout(function() {
  //     done();
  //   });
  // });
  
  it("logs user in", function(){
    expect(Meteor.userId()).not.toBeNull()
  });
});

describe("log out", function(){
  beforeEach(function (done) {
    Meteor.loginWithPassword("tester", "testing", function(err){
      Router.go('newPosts');
      Tracker.afterFlush(done);
    });
  });

  beforeEach(waitForRouter);

  afterEach(function(done){
    Meteor.logout(function() {
      done();
    });
  });
  
  it("logs user out", function(){
    expect(Meteor.userId()).not.toBeNull()
  });
});
