const fs = require("fs");

const text = fs.readFile("./assets/alex.jpeg", (err, img) => {
    if (err) {
        console.log(`An error has occured: ${err.message}`);
        process.exit();
    }
    console.log("file contents read");
    console.log(img);
});