function config($stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: require('./screens/home/home.html'),
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .state('search', {
      url: '/search',
      template: require('./screens/search/search.html'),
      controller: 'SearchController',
      controllerAs: 'search'
    });
}

export default config