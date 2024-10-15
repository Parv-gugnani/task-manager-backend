const mongodb = require("mongodb");

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://localhost:27017";
const databaseName = "task-manager";

const id = new ObjectID();

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);
  }
);
