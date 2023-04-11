const path = require("path");
console.log(path.sep);

const filePath = path.join("/content", "subfolders", "test.txts"); // joins all the arguments provided together to make a path

const base = path.basename(filePath); // returns the last path of the path
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt"); // returns the absolute path
console.log(absolute);
