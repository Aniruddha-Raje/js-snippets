const sharp = require('sharp');

let test = async () => {

    //await positionTests();

    await sharp('/Users/aniruddharaje/apps/snippets/test.jpg')
    .resize({
        width: 320,
        height: 320,
        fit: sharp.fit.outside
    })
    .sharpen()
    .toFile('/Users/aniruddharaje/apps/snippets/sharp/sharp_320x320.jpg')
    .then(info => { 
        console.log(info);
     })
    .catch(err => {
        console.log(err);
    });

    await sharp('/Users/aniruddharaje/apps/snippets/test.jpg')
    .resize({
        width: 800,
        height: 800,
        fit: sharp.fit.outside
    })
    .sharpen()
    .toFile('/Users/aniruddharaje/apps/snippets/sharp/outside_800x800.jpg')
    .then(info => { 
        console.log(info);
     })
    .catch(err => {
        console.log(err);
    });

    await sharp('/Users/aniruddharaje/apps/snippets/test.jpg')
    .resize({
        width: 1000,
        height: 1000,
        fit: sharp.fit.outside
    })
    .sharpen()
    .toFile('/Users/aniruddharaje/apps/snippets/sharp/outside_1000x1000.jpg')
    .then(info => { 
        console.log(info);
     })
    .catch(err => {
        console.log(err);
    });



    // await sharp('/Users/aniruddharaje/apps/snippets/test.jpg')
    // .resize({
    //     width: 500,
    //     height: 500,
    //     fit: sharp.fit.contain
    // })
    // .sharpen()
    // .toFile('sharpen1.jpg')
    // .then(info => { 
    //     console.log(info);
    //  })
    // .catch(err => {
    //     console.log(err);
    // });

    // await sharp('/Users/aniruddharaje/apps/snippets/test.jpg')
    // .resize({
    //     width: 500,
    //     height: 500,
    //     fit: sharp.fit.contain
    // })
    // .toFile('sharpen2.jpg')
    // .then(info => { 
    //     console.log(info);
    //  })
    // .catch(err => {
    //     console.log(err);
    // });
};

let positionTests = async () => {

    await sharp('/Users/aniruddharaje/apps/snippets/test.jpg')
    .resize({
        width: 500,
        height: 500,
        fit: sharp.fit.contain
    })
    .toFile('/Users/aniruddharaje/apps/snippets/sharp/fitContain.jpg')
    .then(info => { 
        console.log(info);
     })
    .catch(err => {
        console.log(err);
    });

    await sharp('/Users/aniruddharaje/apps/snippets/test.jpg')
    .resize({
        width: 500,
        height: 500,
        //fit: sharp.fit.cover,
        position: sharp.strategy.cover
    })
    .toFile('/Users/aniruddharaje/apps/snippets/sharp/cover.jpg')
    .then(info => { 
        console.log(info);
     })
    .catch(err => {
        console.log(err);
    });

    await sharp('/Users/aniruddharaje/apps/snippets/test.jpg')
    .resize({
        width: 500,
        height: 500,
        //fit: sharp.fit.cover,
        position: sharp.strategy.entropy
    })
    .toFile('/Users/aniruddharaje/apps/snippets/sharp/entropy.jpg')
    .then(info => { 
        console.log(info);
     })
    .catch(err => {
        console.log(err);
    });

    await sharp('/Users/aniruddharaje/apps/snippets/test.jpg')
    .resize({
        width: 500,
        height: 500,
        //fit: sharp.fit.cover,
        position: sharp.strategy.attention
    })
    .toFile('/Users/aniruddharaje/apps/snippets/sharp/attention.jpg')
    .then(info => { 
        console.log(info);
     })
    .catch(err => {
        console.log(err);
    });
};

test();