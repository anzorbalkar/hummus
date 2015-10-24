import 'angular';
import moment from 'moment';

class PrettyTime {

  getTime() {
    return moment().format('dddd, MMMM Do YYYY, h:mm:ss a')
  }
}

export default angular.module('components.pretty-time', [])
  .service('prettyTime', PrettyTime)
  .name;
