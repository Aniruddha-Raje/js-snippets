const sharp = require('sharp');

let test = async () => {
    let left = 0;
    let top = 0;
    let width = 1000;
    let height = 500;

    sharp('/Users/aniruddharaje/apps/snippets/test.jpg')
        // .extract({ left: leftOffsetPre, top: topOffsetPre, width: widthPre, height: heightPre })
        // .resize(width, height)
        .extract({ left: left, top: top, width: width, height: height })
        .toFile('output2.png')
        .then(info => { 
            console.log(info);
        })
        .catch(err => {
            console.log(err);
        });
};

test();