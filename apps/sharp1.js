const sharp = require('sharp');

let test = async () => {

    //await positionTests();

    await sharp('/Users/aniruddharaje/apps/snippets/test.jpg')
    .sharpen()
    .toFile('/Users/aniruddharaje/apps/snippets/sharp/enhancedTest.jpg')
    .then(info => { 
        console.log(info);
     })
    .catch(err => {
        console.log(err);
    });

};

test();