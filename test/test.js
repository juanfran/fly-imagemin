var fs = require("fs")
var originalImage = fs.statSync(__dirname + "/image.png")
var newImage = fs.statSync(__dirname + "/result/image.png")

if (!newImage["size"] || newImage["size"] >= originalImage["size"]) {
  console.error('wrong image size')
  process.exit(1)
}

if (fs.existsSync(__dirname + "/result/image.png")) {
  fs.unlinkSync(__dirname + "/result/image.png")
}
