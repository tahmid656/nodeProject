const { readFile, writeFile } = require("fs");

// readFile("./content/first.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(result);
// });

// writeFile("./content/result-async.txt", "mew mew", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(result);
// });

const path = "./content";
readFile(`${path}/first.txt`, "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile(`${path}/second.txt`, "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      `${path}/result-async.txt`,
      `Here are the files, first: ${first}, second: ${second}`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
