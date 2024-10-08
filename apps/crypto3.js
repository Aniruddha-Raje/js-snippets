const crypto = require('crypto');

const ENCRYPTION_KEY = 'O776aM3Rz3zTvzr3p67VC61jmV54rIYu1545x4TlY';
const SALT = 'alsjd8932ed823';
const IV_LENGTH = 16;

// Gives us 8-character Base64 output. The higher this number, the better
const NONCE_LENGTH = 15; 

function encrypt(key, text) {
  let nonce = crypto.randomBytes(NONCE_LENGTH);
  let iv = Buffer.alloc(IV_LENGTH)
  nonce.copy(iv)

  let cipher = crypto.createCipheriv('aes-256-ctr', key, iv);
  let encrypted = cipher.update(text.toString());
  message = Buffer.concat([nonce, encrypted, cipher.final()]);
  return message.toString('base64')
}

function decrypt(key, text) {
  let message = Buffer.from(text, 'base64')
  let iv = Buffer.alloc(IV_LENGTH)
  message.copy(iv, 0, 0, NONCE_LENGTH)
  let encryptedText = message.slice(NONCE_LENGTH)
  let decipher = crypto.createDecipheriv('aes-256-ctr', key, iv);
  let decrypted = decipher.update(encryptedText);
  try{
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
  }catch(Err){
    return 'NULL';
  }
}

// You could do this one time and record the result. Or you could just
// generate a random 32-byte key and record that. But you should never
// pass an ASCII string to the encryption function.
let key = crypto.pbkdf2Sync(ENCRYPTION_KEY, SALT, 10000, 32, 'sha512')
console.log("Key => ", key);

let encrypted = encrypt(key, "someSecretHere")
console.log("Encrypted => ",encrypted)

let decrypted = decrypt(key, encrypted)
console.log("Decrypted => ",decrypted)