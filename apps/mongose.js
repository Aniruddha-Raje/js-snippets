const mongoose = require("mongoose");
const util = require("util");

let createConnection = async () => {
  //Set up default mongoose connection
  await mongoose.connect("mongodb://localhost/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  //Get the default connection
  var conn = mongoose.connection;
  //console.log("conn => ", conn);

  //Bind connection to error event (to get notification of connection errors)
  conn.on("error", console.error.bind(console, "MongoDB connection error:"));

  return true;
};

let getModel = async () => {
  // Declare schema
  var Schema = mongoose.Schema;

  // Define schema
  var testSchema = new Schema({
    a_string: String,
    a_boolean: Boolean,
    a_age: Number
  });

  // Compile model from schema
  var TestModel = mongoose.model("testModel", testSchema);

  // let mongooseModel = util.promisify(mongoose.model).bind(mongoose);
  // let TestModel = await mongooseModel('testModel', testSchema);

  return TestModel;
};

let insert = async model => {
  // Create an instance of model SomeModel
  var document = new model({
    a_string: "Aniruddha",
    a_boolean: false,
    a_age: 28
  });

  // Save the new model instance, passing a callback
  document.save(function(err) {
    if (err) return handleError(err);
    console.log("Saved");
  });

  // Create an instance of model SomeModel
  var document = new model({
    a_string: "Amit",
    a_boolean: false,
    a_age: 27
  });

  // Save the new model instance, passing a callback
  document.save(function(err) {
    if (err) return handleError(err);
    console.log("Saved");
  });

  // Create an instance of model SomeModel
  var document = new model({
    a_string: "Hitesh",
    a_boolean: true,
    a_age: 27
  });

  // Save the new model instance, passing a callback

  let documentSave = util.promisify(document.save).bind(document);
  await documentSave();
  console.log("Saved");

  document.save(function(err) {
    if (err) return handleError(err);
    console.log("Saved");
  });
};

let findAll = async model => {
  let findAll = util.promisify(model.find).bind(model);
  let response = await findAll({});
  console.log("findAll => ", response);

  return true;
};

let findById = async model => {
  let modelFindById = util.promisify(model.findById).bind(model);
  let response = await modelFindById("5e8eed2eb57c1f289f6ebc29");
  console.log("findById => ", response);

  return true;
};

let findByName = async model => {
  let modelfind = util.promisify(model.find).bind(model);
  let response = await modelfind({ a_string: "Amit" });
  console.log("findByName => ", response);

  return true;
};

let query = async model => {
  model
    .find({ a_boolean: false })
    .where("a_age")
    .gt(27)
    .exec(function(err, response) {
      if (err) return handleError(err);

      console.log("query => ", response);
    });
};

let findByIdAndUpdate = async model => {
  model.findByIdAndUpdate("5e8eed2eb57c1f289f6ebc29", { a_age: 29 }, function(
    err,
    response
  ) {
    if (err) return handleError(err);

    console.log("findByIdAndUpdate => ", response);
  });
};

let findByIdAndRemove = async model => {
  model.findByIdAndRemove("5e8eed2eb57c1f289f6ebc29", function(err) {
    if (err) return handleError(err);

    console.log("findByIdAndRemove completed!");
  });
};

let main = async () => {
  await createConnection();
  let model = await getModel();
  //await insert(model);
  //await findAll(model);
  //await findById(model);
  await findByName(model);
  //await query(model);
  //await findByIdAndUpdate(model);
  //await findByIdAndRemove(model);

  return true;
};

main();
