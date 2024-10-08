const a = "John".split("");
const b = a;
const c = "Jane".split("");

b.push(c);

console.log("length of a", a.length);

console.log("value of b", b.slice(-1));

console.log("value of a", a);


// fields @timestamp, @message
// | filter @message like /Request ID =>/
// | filter @message like /0a5264bf-9284-41ef-baaf-780339411ca4/
// | sort @timestamp desc
// | limit 20

// fields @timestamp, @message
// | filter @message like //
// | sort @timestamp desc