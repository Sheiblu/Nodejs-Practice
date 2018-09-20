var fs = require('fs');

// create mkDirSync
if (!fs.existsSync ('./node')) {
    fs.mkdirSync("node");
    res = "Add node dir";
} else {
    fs.rmdirSync("node");
    res = "Delete node dir";
}

console.log( res );





