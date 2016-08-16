module.exports.default = function * () {
  yield this.clear(__dirname + "test/result/image.png")
  yield this
    .source("test/image.png")
    .imagemin()
    .target("test/result")
}
