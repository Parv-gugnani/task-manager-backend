const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Thing Went Wrong");
    resolve([7, 4, 1]);
  }, 2000);
});

doWorkPromise
  .then((result) => {
    console.log("Sucess!", result);
  })
  .catch((error) => {
    console.log("Error!", error);
  });
