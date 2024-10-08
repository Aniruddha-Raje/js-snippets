var crypto = require('crypto'),
  algorithm = 'aes-256-gcm',
  password = '3zTvzr3p67VC61jmV54rIYu1545x4TlY',
  // do not use a global iv for production, 
  // generate a new one for each encryption
  iv = '60iP0h6vJoEa'

function encrypt(text) {
  var cipher = crypto.createCipheriv(algorithm, password, iv)
  var encrypted = cipher.update(text, 'utf8', 'hex')
  encrypted += cipher.final('hex');
  var tag = cipher.getAuthTag();
  return {
    content: encrypted,
    tag: tag
  };
}

function decrypt(encrypted) {
  var decipher = crypto.createDecipheriv(algorithm, '3zTvzr3p67VC61jmV54rIYu1545x4TlY', iv)
  decipher.setAuthTag(encrypted.tag);
  var dec = decipher.update(encrypted.content, 'hex', 'utf8')
  dec += decipher.final('utf8');
  return dec;
}

var hw = encrypt("Token:Ani,Username:bossman")
console.log("Encrypted => ", hw);
console.log("DeCrypted => ",decrypt(hw));