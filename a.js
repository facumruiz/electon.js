const csv = require("csvtojson");
var cars = 0;

(async () => {

  // Load the cars
  cars = await csv().fromFile("C:/Users/facun/Downloads/data.csv");

  // Show the cars
  console.log(cars);


})();

