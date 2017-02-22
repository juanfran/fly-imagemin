module.exports.default = function * (fly) {
  yield fly.clear(__dirname + "test/result/image.png")
  yield fly
    .source("test/image.png")
    .imagemin()
    .target("test/result")
}
