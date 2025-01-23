const fs = require("fs");
const path = require("path");

const theme = "primary"; // Replace with the desired theme or pass it dynamically

const directoryPath = path.join(
  __dirname,
  `./../public/assets/styles/${theme}/svgs`
); // Dynamic theme directory

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }

  const fileArray = files.map((file) => {
    return `/assets/styles/\${theme}/svgs/${file}`;
  });

  console.log(fileArray); // Logs the array with the literal ${theme} in the string
});
