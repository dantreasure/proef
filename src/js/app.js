var proef = angular.module('proef', ['ui.router']);

proef.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: "/",
      abstract: true,
      templateUrl: "../partials/home.html",
      controller: "homeCtrl"
    })
      .state('home.1',{
        url: '',
        controller: "homeCtrl",
        templateUrl: "../partials/home/1.html"
      })
      .state('home.2',{
        url: '',
        controller: "homeCtrl",
        templateUrl: "../partials/home/2.html"
      })
      .state('home.3',{
        url: '',
        controller: "homeCtrl",
        templateUrl: "../partials/home/3.html"
      })
      .state('home.4',{
        url: '',
        controller: "homeCtrl",
        templateUrl: "../partials/home/4.html"
      })
      .state('home.5',{
        url: '',
        controller: "homeCtrl",
        templateUrl: "../partials/home/5.html"
      })
    .state('approach', {
      url: "/approach",
      templateUrl: "../partials/approach.html",
      controller: "approachCtrl"
    })
    .state('about', {
      url: "/about",
      templateUrl: "../partials/about.html",
      controller: "aboutCtrl"
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "../partials/contact.html",
      controller: "contactCtrl"
    })

    $locationProvider.html5Mode({enabled: true, requireBase: false})
});

proef.run(function($rootScope, $state){
  $rootScope.$state = $state;
});
