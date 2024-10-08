var zipFolder = require('zip-folder');
 
zipFolder('/Users/aniruddhanarendraraje/Documents/work/pocs/node-crud-app/snippets/sharp', '/Users/aniruddhanarendraraje/Documents/work/pocs/node-crud-app/snippets/aaa.zip', function(err) {
    if(err) {
        console.log('oh no!', err);
    } else {
        console.log('EXCELLENT');
    }
});