const fs = require("fs");

function writeDataToFile(filename, content) {
  fs.writeFile(filename, JSON.stringify(content), (err) => {
    if (err) console.log(err);
  });
}

module.exports = { writeDataToFile };
