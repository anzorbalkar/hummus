import 'angular';
import 'lodash';

import ngAnimate from 'angular-animate';
import ngMaterial from 'angular-material';

import uirouter from 'angular-ui-router';

import 'angular-material/angular-material.css';
import 'mdi/css/materialdesignicons.css';

import config from './app.config.js';
import home from './screens/home/home.js';
import search from './screens/search/search.js';

require('./app.scss');

angular.module('app', [uirouter, ngMaterial, ngAnimate, home, search])
  .config(config);
