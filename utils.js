const fs = require("fs");

function writeDataToFile(filename, content) {
  fs.writeFile(filename, JSON.stringify(content), (err) => {
    if (err) console.log(err);
  });
}

function getPostData(req) {
  return new Promise((resolve, reject) => {
    try {
      let body = "";
      req.on("data", (chunk) => (body += chunk.toString()));
      req.on("end", () => {
        resolve(body);
      });
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = { writeDataToFile, getPostData };
