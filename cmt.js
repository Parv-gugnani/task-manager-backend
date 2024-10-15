// delete

// db.collection("users")
//   .deleteMany({
//     age: 19,
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// assignment - 4
// 1:grab the description you want to remove
// 2: setup the call with the query
// 3: use promise methods to setup sucess/eror handles
// check

// db.collection("documents")
//   .deleteMany({ description: "Complete Node.js tutorial" })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// assignment -3

// 1: check the documentation for updatemany
// 2: setup the call with the query the updates
// #: use promise methods to setup the sucess/error handlers
// check db

// const updatePromise = db.collection("documents").updateMany(
//   {
//     completed: false,
//   },
//   {
//     //this set operator help to update
//     // $set:{}
//     //$inc :{} help to ince (old + inc)
//     $set: {
//       completed: true,
//     },
//   }

// yes iti is working
// assignemnt 3 completed
// );

// const updatePromise = db.collection("users").updateOne(
//   {
//     _id: new ObjectID("670bb057cf6b4db9f2c33e9e"),
//   },
//   {
//     //this set operator help to update
//     // $set:{}
//     //$inc :{} help to ince (old + inc)
//     $set: {
//       age: 77,
//     },
//   }
// );

// updatePromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// db.collection("users").findOne(
//   { _id: new ObjectID("670bb057cf6b4db9f2c33e9e") },
//   (error, user) => {
//     if (error) {
//       return console.log("Unable to fetch!");
//     }

//     console.log(user);
//   }
// );

// db.collection("users")
//   .find({ age: 40 })
//   .toArray((error, users) => {
//     console.log(users);
//   });
// //
// db.collection("users")
//   .find({ age: 19 })
//   .toArray((error, count) => {
//     console.log(count);
//   });

// Assignment : 2
// 1 : Use findone to fetch last task by its id
// 2 : use find to fetch all tass that are not completed
// 3 : test

// db.collection("documents")
//   .find({ id: new ObjectID("670bc2840067a5dbfb482f47") })
//   .toArray((error, docs) => {
//     console.log(docs);
//   });

// db.collection("documents")
//   .find({ completed: false })
//   .toArray((error, task) => {
//     console.log(task);
//   });
