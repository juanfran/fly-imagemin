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
      cb(null, {code: newdata})
    })
    .catch(function(err) {
      console.error(`imagemin error in ${err}`)
    })
}

module.exports = function () {
  this.filter("imagemin", function(data, options) {
    return this.defer(min)(data, options)
  })
}
