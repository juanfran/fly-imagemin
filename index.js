var imagemin = require("imagemin")
var imageminGifsicle = require('imagemin-gifsicle')
var imageminJpegtran = require('imagemin-jpegtran')
var imageminOptipng = require('imagemin-optipng')
var imageminSvgo = require('imagemin-svgo')

var min = function(data, options, cb) {
  var plugins = options.plugins || [
    imageminGifsicle(),
    imageminJpegtran(),
    imageminOptipng(),
    imageminSvgo()
  ]

  imagemin.buffer(data, {
      plugins: plugins
  })
    .then(function(newdata) {
      cb(null, newdata)
    })
    .catch(function(err) {
      console.error(`imagemin error in ${err}`)
    })
}

module.exports = function (fly, utils) {
  var minAsync = utils.promisify(min)

  fly.plugin("imagemin", { every: true }, function * (file, opts) {
    const data = yield minAsync(file.data, opts)
    file.data = data
  })
}
