var crypto = require('crypto');

// var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
// var mystr = mykey.update('abc', 'utf8', 'hex')
// mystr += mykey.final("hex");

// console.log(mystr);

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

function encrypt(text) {
    let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

function decrypt(text) {
    let iv = Buffer.from(text.iv, 'hex');
    let encryptedText = Buffer.from(text.encryptedData, 'hex');
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}
   
   var hw = encrypt("Token:Ani,Username:bossman")
   console.log("Encrypted => ",hw)
   console.log("DeCrypted => ", decrypt(hw))