# egg-authing

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-authing.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-authing
[travis-image]: https://img.shields.io/travis/eggjs/egg-authing.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-authing
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-authing.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-authing?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-authing.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-authing
[snyk-image]: https://snyk.io/test/npm/egg-authing/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-authing
[download-image]: https://img.shields.io/npm/dm/egg-authing.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-authing

<!--
Description here.
-->

## Install

```bash
$ npm i egg-authing --save
```

## Usage

To enable Authing plugin, you should change ${baseDir}/config/plugin.js

```js
// {app_root}/config/plugin.js
exports.authing = {
  enable: true,
  package: 'egg-authing',
};
```

## Configuration

### Single Instance

```js
// {app_root}/config/config.default.js
exports.authing = {
  client: {
    clientId: '',
    secret: ''
  }
};
```

### Multiple Instances

```js
// {app_root}/config/config.default.js
exports.authing = {
  clients: {
    pool1:{
      clientId: 'your_client_id',
      secret: 'your_client_secret'
    },
    pool2: {
      clientId: 'your_client_id',
      secret: 'your_client_secret'
    }
  }
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

```js
  const { ctx } = this;
  const user = await ctx.authing.login({
    email: 'test@testmail.com',
		password: 'testpassword'
  });
```

```js
  //Multiple instances example
  const { ctx } = this;
  const userPool1 = await ctx.authing.get('pool1').login({
    email: 'test@testmail.com',
		password: 'testpassword'
  });
  const userPool2 = await ctx.authing.get('pool2').login({
    email: 'test@testmail.com',
		password: 'testpassword'
  });
```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
