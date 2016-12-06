angular.module('app', ['ui.router', 'ngMap'])
  .config(function($urlRouterProvider, $stateProvider) {

      $urlRouterProvider.otherwise('/home');

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: './js/features/home/homeTmpl.html',
          controller: 'appCtrl'
        })
        .state('about', {
          url: '/about',
          templateUrl: './js/features/about/aboutTmpl.html',
          controller: 'appCtrl'
        })
        .state('videos', {
          url: '/videos',
          templateUrl: './js/features/videos/videosTmpl.html',
          controller: 'appCtrl'
        })

  });
