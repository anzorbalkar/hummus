import 'angular';

import prettyTime from '../../components/pretty-time/pretty-time.service';
import greeting from '../../components/greeting/greeting.directive';

import HomeController from './home.controller';

export default
  angular.module('home', [prettyTime, greeting])
    .controller('HomeController', HomeController)
    .name;
