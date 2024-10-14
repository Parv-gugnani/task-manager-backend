const mongodb = require("mongodb");

// const MongoClient = mongodb.MongoClient;
// const connectionURL = "mongodb://localhost:27017";
// const databaseName = "task-manager";
// const ObjectId = mongodb.ObjectId;
const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://localhost:27017";
const databaseName = "task-manager";

const id = new ObjectID();
// console.log(id.id.length);
console.log(id.getTimestamp());

// Connect to MongoDB using the native driver
MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);

    //this is one user at one time

    // db.collection("users").insertOne(
    //   {
    //     _id: id,
    //     name: "vik",
    //     age: 19,
    //   },
    //   (err, result) => {
    //     if (err) {
    //       return console.log("Error inserting user", err);
    //     }
    //     console.log("User added to database");

    //     console.log(result.ops);
    //     // Close the connection
    //     client.close();
    //   }
    // );

    //lets add multiple user at once
    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "jen",
    //       age: 20,
    //     },
    //     {
    //       name: "pancard",
    //       age: 40,
    //     },
    //     {
    //       name: "adhar",
    //       age: 46,
    //     },
    //   ],
    //   (error, client) => {
    //     if (error) {
    //       return console.log("Unable to Insert Documents!");
    //     }
    //   }
    // );

    //assignment
    //1 use insetmany to insert documents - description(string),completed(boolean)
    //setup the callback to handle error or print ops
    //run the script
    //check database

    db.collection("documents").insertMany(
      [
        {
          description: "Complete Node.js tutorial",
          completed: true,
        },
        {
          description: "Completgood one",
          completed: true,
        },
        {
          description: "Complete 121212",
          completed: false,
        },
        {
          description: "lmaoooo",
          completed: true,
        },
      ],
      (error, client) => {
        if (error) {
          return console.log("Unable to Insert Documents!");
        }

        console.log("Working!!");
      }
    );
  }
);
