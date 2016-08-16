<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8733685/0be81080-2c40-11e5-98d2-c634f076ccd7.png">
  </a>
</div>

> [imagemin](https://github.com/imagemin/imagemin) plugin for _[Fly][fly]_.

[![][fly-badge]][fly]
[![][mit-badge]][mit]

### Install

```a
npm install -D fly-imagemin
```

## Usage

```js
export default function* () {
  yield this
    .source("image.jpg")
    .imagemin()
    .target("result")
}
```

### Options

#### plugins

Type: `Array`<br>
Default: `[imagemin.gifsicle(), imagemin.jpegtran(), imagemin.optipng(), imagemin.svgo()]`

Additional [plugins](https://www.npmjs.com/browse/keyword/imageminplugin) to use with imagemin.

## License

[MIT][mit] © [Juanfran][author] et [al][contributors]


[mit]:          http://opensource.org/licenses/MIT
[author]:       http://github.com/juanfran
[contributors]: https://github.com/juanfran/fly-imagemin/graphs/contributors
[releases]:     https://github.com/juanfran/fly-imagemin/releases
[fly]:          https://www.github.com/flyjs/fly
[fly-badge]:    https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[mit-badge]:    https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[npm-pkg-link]: https://www.npmjs.org/package/fly-imagemin
[npm-ver-link]: https://img.shields.io/npm/v/fly-imagemin.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/fly-imagemin.svg?style=flat-square
[travis-link]:  https://travis-ci.org/juanfran/fly-imagemin
[travis-badge]: http://img.shields.io/travis/juanfran/fly-imagemin.svg?style=flat-square
