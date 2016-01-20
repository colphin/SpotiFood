if (Recommendations.find().count() === 0) { Recommendations.insert({
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  });
  Recommendations.insert({
    title: 'Meteor',
    url: 'http://meteor.com'
});
  Recommendations.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
}); }