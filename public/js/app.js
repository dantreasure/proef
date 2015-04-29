var proef = angular.module('proef', ['ui.router']);
var mouseEvt;

proef.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "../partials/home.html",
      controller: "homeCtrl"
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
});



