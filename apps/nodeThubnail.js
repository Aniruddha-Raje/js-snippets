var thumb = require('node-thumbnail').thumb;


thumb({
    source: '/Users/aniruddharaje/apps/snippets/test.jpg',
    destination: '/Users/aniruddharaje/apps/snippets',
    width: 500,
  }).then(function() {
    console.log('Success');
  }).catch(function(e) {
    console.log('Error', e.toString());
  });