var fs = require("fs");

fs.open("./test.txt", "r", function(err, file) {
  if (err) throw err;
  console.log("File is opened in write mode.");
});

var data = fs.readFile("./test.txt", function(err, data) {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});
