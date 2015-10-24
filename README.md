# Hummus

An AngularJS 1.4, ES6, Sass, Angular Material, Material Design Icons, and Webpack starter app.

## Features

* [Webpack](https://webpack.github.io)
* [AngularJS](https://angularjs.org)
* [Angular Material](https://material.angularjs.org)
* [Lodash](https://lodash.com)
* [Material Design Icons](https://materialdesignicons.com)
* [Moment.js](http://momentjs.com)
* [Babel](https://babeljs.io) (ES6, and ES7 support)
* Source maps included in all builds
* Development server with hot reload when possible and refresh otherwise
* Production builds with cache busting and asset minification
* Testing environment using karma to run tests and jasmine as the framework
* Code coverage when tests are run

## Installation

To use it, just clone this repo and install the npm dependencies:

```shell
$ npm install
```

## Scripts

All scripts are run with `npm run [script]`, for example: `npm run test`.

* `clean` - deletes build and dist folders
* `build` - generate a minified build to dist folder
* `dist` - starts a server running at the compiled dist folder (do `npm run build` before this)
* `dev` - start development server, try it by opening `http://localhost:3333/`
* `test` - run all tests
* `test:live` - continuously run unit tests watching for changes

See what each script does by looking at the `scripts` section in [package.json](./package.json).

## References
* [https://github.com/angular-tips/webpack-demo](https://github.com/angular-tips/webpack-demo)
* [https://github.com/shprink/angular1.4-ES6-material-webpack-boilerplate](https://github.com/shprink/angular1.4-ES6-material-webpack-boilerplate)