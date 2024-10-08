const uuidv4 = require("uuid/v4");
const uuidv1 = require("uuid/v1");

console.log("V4\n");
for (i = 0; i < 5; i++) {
  console.log(uuidv4());
}
console.log("\nV1\n");
for (i = 0; i < 5; i++) {
  console.log(uuidv1());
}
