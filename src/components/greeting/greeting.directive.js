import 'angular';

function greeting() {
  return {
    restrict: 'E',
    scope: {
      name: '='
    },
    template: '<h3 class="greeting-text">Hello, {{name}}</h3>'
  }
}

export default angular.module('components.greeting', [])
  .directive('greeting', greeting)
  .name;
