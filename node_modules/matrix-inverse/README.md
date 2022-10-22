# matrix-inverse

[![version](https://img.shields.io/npm/v/matrix-inverse?style=flat-square)][npm]
[![license](https://img.shields.io/npm/l/matrix-inverse?style=flat-square)][npm]
[![build](https://img.shields.io/circleci/project/github/metabolize/matrix-inverse?style=flat-square)][build]
[![bundle size](https://img.shields.io/bundlephobia/minzip/matrix-inverse?style=flat-square)][bundlephobia]
[![code style](https://img.shields.io/badge/code_style-prettier-ff69b4?style=flat-square)][prettier]

[npm]: https://npmjs.com/matrix-inverse
[build]: https://circleci.com/gh/metabolize/matrix-inverse/tree/master
[bundlephobia]: https://bundlephobia.com/result?p=matrix-inverse
[prettier]: https://prettier.io/

Matrix inverse function. Code is from [sylvester][] by [James Coglan][], with
gratitude.

## Installation

Install matrix-inverse by running:

    npm install matrix-inverse

## Example

```js
const matrixInverse = require('matrix-inverse')

const M = [[3, 3.2], [3.5, 3.6]]

const M_inv = matrixInverse(M)
```

## Origin

This code was copied and adapted from sylvester at commit
5a2c61681e988d60bf0a4223640c636052946341.

## Contribute

- Issue Tracker: https://github.com/metabolize/matrix-inverse/issues
- Source Code: https://github.com/metabolize/matrix-inverse

## Acknowledgements

This project was packaged by [Paul Melnikow][] while at [Body Labs][]. Thanks
to Body Labs for the repository transfer.

## License

The project is licensed under the MIT license.

[sylvester]: https://github.com/jcoglan/sylvester
[paul melnikow]: https://github.com/paulmelnikow
[body labs]: https://github.com/bodylabs
[james coglan]: http://jcoglan.com/
