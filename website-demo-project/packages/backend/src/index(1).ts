const express = require("express");
const app = express();
const port = 4000;
const { MongoClient, ObjectId } = require("mongodb");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json({ limit: "5000mb", extended: true, parameterLimit: 5000 });
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "myProject";
const cors = require("cors");

app.use(cors());
app.use(jsonParser)
function checkToken(req,res,next){
  console.log ("hola")
   next();
 };

let db;



app.listen(port, async () => {
  await client.connect();
  db = client.db(dbName);
  const collection = db.collection("documents");

  console.log(`Example app listening on port ${port}`);
});

/* GET ALL USERS*/
app.get("/get-all-users", async (req, res) => {
  const collection = await db.collection("documents");
  const result = await collection.find({}).toArray();

  res.send(result);
});

/* CREATE USER */
app.post("/create-user", async (req, res) => {
  const collection = await db.collection("documents");

  const newUser = await collection.insertOne(req.body);
  const createdUser = await collection.findOne({
    _id: ObjectId(newUser.insertedId),
  });

  res.send(createdUser);
});

/*  DELETE */
app.delete("/delete-user", async (req, res) => {
  const collection = await db.collection("documents");

  const deleteResult = await collection.deleteOne({ _id: req.body._id });

  console.log("Deleted documents =>", deleteResult);

  res.send(deleteResult);
});

/* UPDATE */
app.post("/update-user", async (req, res) => {
  const collection = await db.collection("documents");

  const updateUser = await collection.findOneAndUpdate(
    { _id: ObjectId(req.body._id) },
    {
      $set: { username: req.body.username, name: req.body.name },
    },
    { returnOriginal: false }
  );

  console.log("Updated documents =>", updateUser);

  res.send(updateUser.value);
});

/*  GET USER BY ID */
app.post("/get-user-by-id", async (req, res) => {
  const collection = await db.collection("documents");

  const singleUser = await collection.findOne({ _id: ObjectId(req.body._id) });
  res.send(singleUser);
});

