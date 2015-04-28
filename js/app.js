var proef = angular.module('proef', ['ui.router']);

proef.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "../views/home.html",
      controller: "homeCtrl"
    })
    .state('approach', {
      url: "/approach",
      templateUrl: "../views/approach.html",
      controller: "approachCtrl"
    })
    .state('about', {
      url: "/about",
      templateUrl: "../views/about.html",
      controller: "aboutCtrl"
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "../views/contact.html",
      controller: "contactCtrl"
    })
});
