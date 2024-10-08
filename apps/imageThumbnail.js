const imageThumbnail = require('image-thumbnail');
const fs = require('fs');

let test = async () => {
    try {
        const thumbnail = await imageThumbnail('/Users/aniruddharaje/apps/snippets/test.jpg');
        console.log(thumbnail);
    } catch (err) {
        console.error(err);
    }
};

test();